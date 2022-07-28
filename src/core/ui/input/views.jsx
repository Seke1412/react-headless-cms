import styled from 'styled-components'

const IconWrapper = styled.span.attrs(({className}) => ({
  className: `icon-wrapper ${className ?? className}`
}))`
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  display: flex;
  width: 1.5em;
  ${
  ({iconPosition}) => iconPosition === 'right'
    ? 'left: calc(var(--space-2) / 2);'
    : 'right: calc(var(--space-2) / 2);'
  }
`

const InputWrapper = styled.div.attrs(({className}) => ({
  className: `input-wrapper ${className ?? ''}`
}))`
  position: relative;
  width: var(--max-mobile-width);
  height: 40px;
`

const StyledInput = styled.input.attrs(({className}) => ({
  className: `styled-input ${className ?? ''}`
}))`
  height: 100%;
  width: 100%;
  line-height: 100%;
  padding: var(--space-1) var(--space-2);

  box-sizing: border-box;
  border: 1px solid #ededed;
  border-radius: var(--border-radius);
  transition: border-color 0.3s ease-out;

  &:hover, &:visited, &:focus, &.haveValue {
    transition: border-color 0.3s ease-out;
    border-color: var(--primary-variant-2);
  }

  ${({hasIcon, iconPosition}) => hasIcon && iconPosition === 'left' &&
    'padding-left: calc(var(--space-2) + 20px);'
  }
  ${({hasIcon, iconPosition}) => hasIcon && iconPosition === 'right' &&
    'padding-right: calc(var(--space-2) + 20px);'
  }
`

export {
  IconWrapper,
  InputWrapper,
  StyledInput,
}
