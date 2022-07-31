import React from 'react'
import { arrayOf, object, bool, func } from 'prop-types'
import {noop} from '../../utils/helpers'
import {StyledTable, THead, TR, TD} from './views'

const Table = ({
  columns, dataSource,
  showTableBorder, showRowBorder,
  onRowClick,
  customStyle
}) => {
  const renderData = () => {
    const header = []
    for (let i = 0; i < columns.length; i += 1) {
      const {title, dataIndex} = columns[i]
      header.push(
        <th key={dataIndex}>
          {title}
        </th>
      )
    }

    const rowArray = dataSource.map((row, index) => {
      const cells = []
      for (let i = 0; i < columns.length; i += 1) {
        const {key, dataIndex, render} = columns[i]
        const cellData = render
          ? render(row[key])
          : row[key]
        cells.push(
          <TD
            key={dataIndex}
          >
            {cellData}
          </TD>
        )
      }
      return (
        <TR
          key={row.key || index}
          showRowBorder={showRowBorder}
          onClick={(e) => onRowClick(e, row)}
        >
          {cells}
        </TR>
      )
    })

    return (
      <>
        <THead>
          <tr>
            {header}
          </tr>
        </THead>
        <tbody>
          {rowArray}
        </tbody>
      </>
    )
  }

  return (
    <StyledTable
      showBorder={showTableBorder}
      customStyle={customStyle}
    >
      {renderData()}
    </StyledTable>
  )
}

Table.propTypes = {
  columns: arrayOf(object).isRequired,
  dataSource: arrayOf(object),
  showTableBorder: bool,
  showRowBorder: bool,
  onRowClick: func,
  customStyle: object,
}

Table.defaultProps = {
  dataSource: [],
  showTableBorder: false,
  showRowBorder: true,
  onRowClick: noop,
  customStyle: null,
}

export default Table
