import styled from 'styled-components'

const ContentWrapper = styled.div.attrs(() => ({
  className: 'basic-content-wrapper'
}))`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`

const Title = styled.h2.attrs(() => ({
  className: 'basic-content-title'
}))`
  font-size: var(--fs-title);
  font-family: var(--font-family);
  color: var(--text-color);
  line-height: var(--fs-title);
`

const Wrapper = styled.div.attrs(() => ({
  className: 'fields'
}))`
  margin: var(--space-6) 0px;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`

const FieldWrapper = styled.div.attrs(() => ({
  className: 'field-wrapper'
}))`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: var(--double-smallest);
`

const FieldLabel = styled.p.attrs(() => ({
  className: 'field-label'
}))`
  display: flex;
  flex: 0 0 auto;
`

const Field = styled.div.attrs(() => ({
  className: 'form-field'
}))`
  display: flex;
  flex-direction: column;
`

const ActionWrapper = styled.div.attrs(() => ({
  className: 'action-wrapper'
}))`
  display: flex;
  justify-content: flex-end;
  gap: var(--space-4);
`

const Form = styled.form.attrs(() => ({
  className: 'form'
}))`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`

const ErrorLabel = styled.p.attrs(() => ({
  className: 'error-label'
}))`
  font-family: var(--font-family);
  font-size: var(--fs-default);
  margin: 0px;
  margin-top: var(--base-space);
  padding: 0px;
  color: var(--error-color);
  font-style: italic;
  font-size: 11px;
`

export {
  ContentWrapper,
  Title,
  Wrapper,
  FieldWrapper,
  FieldLabel,
  Field,
  ActionWrapper,
  Form,
  ErrorLabel,
}
