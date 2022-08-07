import styled, {css} from 'styled-components'

const Nav = styled.nav.attrs(() => ({
  classSName: 'navbar'
}))`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);

  ${({expandCollapse}) => expandCollapse
  ? css`
    flex: 0 0 200px;
    max-width: 200px;
    `
  : css`
    flex: 0 0 60px;
    max-width: 60px;
   `
  };

  width: auto;
  background-color: var(--primary);
  color: var(--text-color-light);
  padding: var(--space-4) 0;
`

const Logo = styled.img.attrs(() => ({
  className: 'logo'
}))`
  ${({expandCollapse}) => expandCollapse
  ? css`
    width: calc(75% - var(--space-8));
    `
  : css`
    width: 40%;
   `
  };
  height: auto;

  margin: 0px;
  padding: var(--space-4) 0px;

  display: flex;
  align-self: flex-start;
  margin: 0 auto;
`

const MenuItem = styled.p.attrs(() =>  ({
  className: 'menu-item'
}))`
  cursor: pointer;

  display: flex;
  gap: var(--space-4);

  margin: 0px;

  ${({expandCollapse}) => expandCollapse
  ? css`
    width: calc(100% - var(--space-12));
    padding: var(--space-2) var(--space-6);
    `
  : css`
    width: calc(100% - var(--space-4));
    padding: var(--space-2) var(--space-2);
    justify-content: center;
   `
  };


  overflow: hidden;
  transition: all 0.3s ease-out;
  ${({isActive}) => isActive
    ? css`
      background-color: var(--background-color);
      color: var(--primary);
      font-weight: bolder;
    `
    : css`
     &:hover {
       transition: all 0.3s ease-out;
       background-color: var(--background-color);
       color: var(--primary);
     }
  `
  }

`

const MenuLabel = styled.span.attrs(() => ({
  className: 'menu-label'
}))`
  text-overflow: ellipsis;
  display: flex;
  font-size: var(--fs-default);
  line-height: 24px;
`

export {
  Nav,
  Logo,
  MenuItem,
  MenuLabel,
}
