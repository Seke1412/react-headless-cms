import React, {useState, useCallback} from 'react'
import {string, array} from 'prop-types'
import {useForm, Controller} from 'react-hook-form'
import {ErrorMessage} from '@hookform/error-message'
import axios from 'axios'

import UI from '../../core/ui'
import {
  Wrapper, FieldWrapper, FieldLabel, Field, ErrorLabel, Form, ActionWrapper,
} from './views'

const Fields = ({content, actions, currentLanguageId}) => {
  const [uploadParam, setUploadParam] = useState('');
  const { handleSubmit, control, formState: {errors}} = useForm();
  const [response, setResponse] = useState('')

  const shouldRenderActions = Array.isArray(actions) && actions.length > 0

  const onSubmitHandler = useCallback(async data => {
    const url = 'http://localhost:8080/sample-upload'
    let body, headers

    if (uploadParam) {
      headers = {'Content-Type': 'multipart/form-data'},
      body = new FormData();
      const files = data[uploadParam]
      files.forEach(file => {
        body.append(uploadParam, file);
      })
      Object.entries(data).forEach(([key, value])=> {
        if (key !== uploadParam) {
          body.append(key, value)
        }
      })
      body.append('langId', currentLanguageId)
    }

    const res = await axios.post(url, body, {headers})
    setResponse(res.data) 

  }, [uploadParam, currentLanguageId])

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
}

export default Fields
