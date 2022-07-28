import styled, {css} from 'styled-components'

const CodeTitle = styled.h4.attrs(({className}) => ({
  className: `code-title ${className ?? ''}`
}))`
  display: inline-block;
  position: relative;
  margin: 0px;
  padding: 0px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 0px;
    height: 0px;
    background-color: transparent;
    top: 50%;
    right: -20px;
    transform: translateY(-3px);

    border-left: 6px solid transparent;
    border-right: 6px solid transparent;

    ${({toggleCode}) => toggleCode
  ? css`
      border-top: 6px solid var(--text-color);
      `
  : css`
      border-bottom: 6px solid var(--text-color);
      `
    }

  }
`;

const Code = styled.pre.attrs(({className}) => ({
  className: `code ${className ?? ''}`
}))`
  border: 1px solid;
  padding: 10px 20px;
  white-space: pre-wrap;
  overflow: hidden;

  ${({toggleCode}) => toggleCode
  ? css`
    height: auto;
    border: 1px solid;
    padding: 10px 20px;
  `
  : css`
    height: 0px;
    padding: 0px;
    border: 0px;
  `};
`

export {
  CodeTitle,
  Code,
}
