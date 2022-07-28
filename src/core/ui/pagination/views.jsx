import styled from 'styled-components'

const StyledPagination = styled.div.attrs(({className}) => ({
  className: `pagination ${className ?? ''}`
}))`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  min-width: var(--max-mobile-width);

  font-family: var(--font-family);

  ${({align}) => align === 'left' && 'justify-content: flex-start;'};
  ${({align}) => align === 'right' && 'justify-content: flex-end;'};
  ${({align}) => align === 'center' && 'justify-content: center;'};
`

export {
  StyledPagination,
}
