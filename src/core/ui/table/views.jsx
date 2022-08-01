import styled, {css} from 'styled-components'

const StyledTable = styled.table.attrs(() => ({
  className: 'table'
}))`
  margin: 0px;
  padding: 0px;
  border-collapse: collapse;

  ${({showBorder}) => showBorder && 'border: 1px solid var(--text-color);'}

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
      border-bottom: 1px solid var(--text-color);
    }
  `}
`

const TD = styled.td.attrs(() => ({
  className: 'td'
}))`
  padding: var(--space-2);
`

export {
  StyledTable,
  THead,
  TR,
  TD,
}
