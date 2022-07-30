import styled, {css} from 'styled-components'

const Nav = styled.nav.attrs(() => ({
  classSName: 'navbar'
}))`
  display: flex;
  ${({expandCollapse}) => expandCollapse
  ? css`
    flex: 0 0 calc(200px - var(--space-12));
    max-width: 200px;
    `
  : css`
    flex: 0 0 calc(80px - var(--space-12));
    max-width: 80px;
   `
  };

  width: auto;
  background-color: var(--primary);
  color: white;
  padding: var(--space-4) var(--space-6);
`

export {
  Nav,
}
