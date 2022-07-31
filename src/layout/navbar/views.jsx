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
  color: var(--text-color-light);
  padding: var(--space-4) var(--space-6);
`

const Logo = styled.img.attrs(() => ({
  className: 'logo'
}))`
  width: 80%;
  height: auto;

  margin: 0px;
  padding: 0px;

  display: flex;
  align-self: flex-start;
  margin: 0 auto;
`

export {
  Nav,
  Logo,
}
