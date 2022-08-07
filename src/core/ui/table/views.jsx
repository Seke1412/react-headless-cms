import styled, {css} from 'styled-components'

const StyledTable = styled.table.attrs(() => ({
  className: 'table'
}))`
  margin: 0px;
  padding: 0px;
  border-collapse: collapse;

  ${({showBorder}) => showBorder && 'border: 1px solid var(--border-color);'}
  box-shadow: 1px 1px 2px 2px rgba(212, 241, 244, 0.8) ;
  ${({customStyle}) => customStyle && css(customStyle)};
`

const THead = styled.thead.attrs(() => ({
  className: 'thead'
}))`
  background-color: #ddd;
`

const TR = styled.tr.attrs(() => ({
  className: 'tr'
}))`
  ${({showRowBorder}) => showRowBorder && css`
    &:not(:last-child) {
      border-bottom: 1px solid var(--border-color);
    }
  `}
`

const TD = styled.td.attrs(() => ({
  className: 'td'
}))`
  padding: var(--space-2) var(--space-4);
`

export {
  StyledTable,
  THead,
  TR,
  TD,
}
