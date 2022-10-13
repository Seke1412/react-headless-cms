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
  line-height: var(--title-min-height);

  background-color: white;
  color: var(--text-color);
  
  box-sizing: border-box;
  height: auto;
  min-height: var(--title-min-height);
  padding-left: var(--space-4);

  border-bottom: 1px solid var(--border-color);
`

const Wrapper = styled.div.attrs(() => ({
  className: 'fields'
}))`
  background-color: white;
  padding: var(--space-8);
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

const BackWrapper = styled.div.attrs(() => ({
  className: 'back-wrapper'
}))`
  display: flex;
  align-self: flex-start;
  gap: var(--space-3);
  padding: 0px var(--space-4);
  margin-top: var(--space-4);
  cursor: pointer;
  color: var(--text-color);
  transition: all 0.3s ease-out;

  &:hover {
    transition: all 0.3s ease-out;
    color: var(--primary-variant-1);
  }
`

const BackText = styled.span.attrs(() => ({
  className: 'back-text'
}))`
  font-family: var(--font-family);
  font-size: var(--fs-default);
  line-height: var(--fs-default);
  font-weight: bolder;
`

const PreviewImage = styled.img.attrs(() => ({
  className: 'preview-image'
}))`
  width: 100%;
  height: auto;
  display: block;
  margin: 0px;
  padding: 0px;
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
  BackWrapper,
  BackText,
  PreviewImage,
}
