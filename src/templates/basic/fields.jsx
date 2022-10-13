import React, {useEffect, useState, useCallback} from 'react'
import {func, object, string, array} from 'prop-types'
import {useForm, Controller} from 'react-hook-form'
import {ErrorMessage} from '@hookform/error-message'
import axios from 'axios'

import {noop} from '../../core/utils/helpers'
import UI from '../../core/ui'
import { WebServiceUrl } from '../../core/enums/constants'
import {
  Wrapper, FieldWrapper, FieldLabel, Field, ErrorLabel, Form, ActionWrapper,
} from './views'

const Fields = ({
  serviceName, content, actions, currentLanguageId, defaultValue, onImageClick,
}) => {
  const [uploadParam, setUploadParam] = useState('');
  const { reset, handleSubmit, control, setError, formState: {errors}} = useForm()
  const [response, setResponse] = useState('')

  const shouldRenderActions = Array.isArray(actions) && actions.length > 0
  
  useEffect (() => {
    reset(defaultValue) 
  }, [reset, defaultValue])

  const onSubmitHandler = useCallback(async data => {
    const url = WebServiceUrl + serviceName
    let body, headers

    if (uploadParam) {
      headers = {'Content-Type': 'multipart/form-data'}
      body = new FormData()

      const files = []
      const imageUrls = []

      for (let i = 0; i < data[uploadParam]?.length; i++) {
        const {file, type} = data[uploadParam][i]
        if (type === 'image') {
          files.push(file)
        }
        if (type === 'url') {
          imageUrls.push(file)
        }
      }

      files.forEach(file => {
        body.append(uploadParam, file);
      })

      body.append('remain-urls', imageUrls)

      Object.entries(data).forEach(([key, value])=> {
        if (key !== uploadParam) {
          body.append(key, value)
        }
      })
      body.append('langId', currentLanguageId)
    }

    const res = await axios.post(url, body, {headers})
    setResponse(res.data) 

  }, [uploadParam, currentLanguageId, serviceName])

  return content.length > 0 && (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        {content.map(field => {
          const {fieldName, type, label, fieldProps, rules} = field
          const ResultComponent = UI[type]

          if (type === 'UploadFile' && !uploadParam) {
            setUploadParam(fieldName)
          }

          return (
            <FieldWrapper key={fieldName}>
              <FieldLabel>{label}</FieldLabel>
              <Field>
                <Controller
                  render={({field: {onChange, onBlur, value}}) => (
                    <ResultComponent
                      className={name}
                      onChange={onChange}
                      onBlur={onBlur}
                      onErrorMessage={(message) => setError(fieldName, {type: 'load-error', message})}
                      onImageClick={onImageClick}
                      {...fieldProps}
                      value={value}
                    />
                  )}
                  control={control}
                  rules={rules}
                  name={fieldName}
                />
                <ErrorMessage
                  errors={errors}
                  name={fieldName}
                  render={({message}) => (<ErrorLabel>{message}</ErrorLabel>)}
                />
              </Field>
            </FieldWrapper>
          )
        })}
        {shouldRenderActions &&
          <ActionWrapper>
            {actions.map(action => {
              const {type, label, fieldProps} = action
              const Action = UI[type]
              return (
                <Action
                  key={label}
                  label={label}
                  {...fieldProps}
                />
              )
            })}
          </ActionWrapper>
        }
      </Form>
      {response}
    </Wrapper>
  )
}

Fields.propTypes = {
  currentLanguageId: string.isRequired,
  content: array.isRequired,
  actions: array.isRequired,
  serviceName: string.isRequired,
  onImageClick: func,
  defaultValue: object,
}

Fields.defaultProps = {
  onImageClick: noop,
  defaultValue: null
}

export default Fields
