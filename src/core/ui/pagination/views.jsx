import styled, {css} from 'styled-components'

const StyledPagination = styled.div.attrs(() => ({
  className: 'pagination'
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

  ${({customStyle}) => customStyle && css(customStyle)};
`

export {
  StyledPagination,
}
