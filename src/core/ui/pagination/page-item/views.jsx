import styled, {css} from 'styled-components'

const StyledPageItem = styled.span.attrs(({className}) => ({
  className: `page-item ${className ?? ''}`
}))`
  padding: var(--space-1) var(--space-2);
  margin: var(--space-1);

  border: 1px solid var(--text-color);
  color: var(--text-color);

  cursor: pointer;
  user-select: none;

  transition: border-color 0.3s ease-out, color 0.3s ease-out;

  ${({isActive}) => isActive
  ? css`
    border-color: var(--secondary);
    color: var(--secondary);
  `
  : css`
    &:hover {
      transition: border-color 0.3s ease-out, color 0.3s ease-out;
      border-color: var(--secondary);
      color: var(--secondary);
    }
  `
  };
`

export  {
  StyledPageItem,
}
