import styled from 'styled-components'

const NextBack = styled.span.attrs(({className}) => ({
  className: `next-back ${className ?? ''}`
}))`
  transition: color 0.3s ease-out;
  cursor: pointer;
  padding: var(--space-2) var(--space-1);
  &:hover {
    transition: color 0.3s ease-out;
    color: var(--primary);
  }
`

export {
  NextBack
}
