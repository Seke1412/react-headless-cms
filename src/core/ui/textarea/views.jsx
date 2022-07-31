import styled, {css} from 'styled-components'

const StyledTextarea = styled.textarea.attrs(() => ({
  className: 'textarea'
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0px;
  padding: var(--space-2) var(--space-4);

  min-width: var(--max-mobile-width);
  height: 80px;

  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: var(--fs-default);
  line-height: 25px;

  background: transparent;
  resize: ${({allowResize}) => allowResize ? 'auto' : 'none'};
  transition: all 0.3s ease-out;

  ::-moz-placeholder { /* Firefox 19+ */
    font-weight: lighter;
  }
  :-moz-placeholder { /* Firefox 18- */
    font-weight: lighter;
  }
  &:focus {
    outline: none;
  }

  &:disabled {
    -webkit-text-fill-color: var(--disable-color);
    opacity: 1;
    cursor: not-allowed;
    color: var(--disable-color);
  }

  :hover, :focus {
    transition: all 0.3s ease-out;
    border-color: var(--border-color-hl);
  }

  ${({customStyle}) => customStyle && css(customStyle)};
`

export {
  StyledTextarea,
}
