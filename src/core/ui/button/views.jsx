import styled, {css} from 'styled-components'

const StyledButton = styled.button.attrs(({type}) => ({
  type: type || '',
  className: 'button'
}))`
  width: auto;
  height: auto;

  margin: 0px;
  padding: var(--space-2) var(--space-4);

  text-align: center;

  font-family: var(--font-family);
  color: white;

  box-sizing: border-box;

  border: 0px solid transparent;
  border-radius: var(--border-radius);


  ${({buttonType}) => buttonType === 'primary' && css`background-color: var(--primary);`};
  ${({buttonType}) => buttonType === 'secondary' && css`background-color: var(--secondary);`};
  ${({buttonType}) => buttonType === 'cancel' && css`
    color: var(--primary);
    background-color: white;
    border: 1px solid var(--primary);
  `}
  outline: none;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${({customStyle}) => customStyle && css(customStyle)};
`

const IconContainer = styled.p.attrs(() => ({
  className: 'button-icon'
}))`
  gap: var(--space-2);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Label = styled.span.attrs(() => ({
  className: 'button-label'
}))`
  display: flex;
  flex: 0 0 auto;
`

export {
  IconContainer,
  StyledButton,
  Label,
}
