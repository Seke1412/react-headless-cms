import styled from 'styled-components'

const FooterWrapper = styled.footer.attrs(() => ({
  className: 'footer'
}))`
  background: white;
  color: var(--primary);
  padding: var(--space-1);
  text-align: center;
  font-size: 12px;
`

export {
  FooterWrapper,
}
