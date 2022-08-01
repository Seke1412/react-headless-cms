import styled, {css} from 'styled-components'

const IconWrapper = styled.span.attrs(() => ({
  className: 'icon-wrapper'
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
  };
`

const InputWrapper = styled.div.attrs(() => ({
  className: 'input-wrapper'
}))`
  position: relative;
  width: var(--max-mobile-width);
  height: 40px;

  ${({customStyle}) => customStyle && css(customStyle)};
`

const StyledInput = styled.input.attrs(() => ({
  className: 'styled-input'
}))`
  height: 100%;
  width: 100%;
  line-height: 100%;
  padding: var(--space-1) var(--space-2);

  box-sizing: border-box;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  transition: border-color 0.3s ease-out;

  &:hover, &:visited, &:focus, &.haveValue {
    transition: border-color 0.3s ease-out;
    border-color: var(--border-color-hl);
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
