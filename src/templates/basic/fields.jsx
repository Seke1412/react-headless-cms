import React, {useCallback} from 'react'
import {array} from 'prop-types'
import {useForm, Controller} from 'react-hook-form'
import {ErrorMessage} from '@hookform/error-message'

import UI from '../../core/ui'
import {
  Wrapper, FieldWrapper, FieldLabel, Field, ErrorLabel, Form, ActionWrapper,
} from './views'

const Fields = ({content, actions}) => {
  const { handleSubmit, control, formState: {errors}} = useForm();

  const shouldRenderActions = Array.isArray(actions) && actions.length > 0

  const onSubmitHandler = useCallback(data => {
    console.log(data)
  }, [])

  return content.length > 0 && (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        {content.map(field => {
          const {fieldName, type, label, fieldProps, rules} = field
          const ResultComponent = UI[type]

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
    </Wrapper>
  )
}

Fields.propTypes = {
  content: array.isRequired,
  actions: array.isRequired,
}

export default Fields
