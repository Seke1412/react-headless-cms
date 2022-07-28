import styled, {css} from 'styled-components'

const StyledTable = styled.table.attrs(({className}) => ({
  className: `table ${className ?? ''}`
}))`
  margin: 0px;
  padding: 0px;
  border-collapse: collapse;

  ${({showBorder}) => showBorder && 'border: 1px solid var(--text-color);'}
`

const THead = styled.thead.attrs(({className}) => ({
  className: `thead ${className ?? ''}`
}))`
  background-color: #ddd;
`

const TR = styled.tr.attrs(({className}) => ({
  className: `tr ${className ?? ''}`
}))`
  ${({showRowBorder}) => showRowBorder && css`
    &:not(:last-child) {
      border-bottom: 1px solid var(--text-color);
    }
  `}
`

const TD = styled.td.attrs(({className}) => ({
  className: `td ${className ?? ''}`
}))`
  padding: var(--space-2);
`

export {
  StyledTable,
  THead,
  TR,
  TD,
}
