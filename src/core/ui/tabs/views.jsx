import styled, {css} from 'styled-components'

const Wrapper = styled.div.attrs(() => ({
  className: 'tabs'
}))`
  width: calc(100% - var(--space-8));
  height: 46px;
  display: flex;
  flex-direction: row;
  gap: var(--space-2);
  ${({align}) => align === 'left' && 'justify-content: flex-start;'};
  ${({align}) => align === 'center' && 'justify-content: center;'};
  ${({align}) => align === 'right' && 'justify-content: flex-end;'};

  padding: 0px var(--space-4);

  ${({customStyle}) => customStyle && css(customStyle)};
`

const TabItem = styled.div.attrs(() => ({
  className: 'tab-item'
}))`
  display: flex;
  flex: 0 0 auto;
  align-items: center;

  height: 100%;
  padding: 0px var(--space-2);

  cursor: pointer;

  font-family: var(--font-family);
  font-size: var(--fs-default);
  font-weight: bold;

  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background-color: transparent;
  }

  ${({active}) => active
  ? css`
    color: var(--primary-variant-1);
    &:after {
      background-color: var(--primary-variant-1);
    }
  `
  : css`
    color: var(--text-color);
    transition: all 0.3s ease-out;

    &:hover {
      transition: all 0.3s ease-out;
      color: var(--primary);
      &:after {
        background-color: var(--primary);
      }
    }
  `
  };
`

export {
  Wrapper,
  TabItem,
}
