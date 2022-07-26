import React, {useState} from 'react'
import { func, number, oneOf, object } from 'prop-types'
import {noop} from '../../utils/helpers'
import PageItem from './page-item'
import PageRange from './page-range'

import {StyledPagination} from './views'

const Pagination = ({
  onItemClick,
  totalPage, numPageView, align,
  customStyle,
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const onPageItemClick = (data) => {
    setCurrentPage(Number(data.value))
    onItemClick(data)
  }

  const renderAnchorPage = (firstOrLast) => {
    const PageNumber = firstOrLast === 'First' ? 1 : totalPage
    return (
      <PageItem
        label={PageNumber.toString()}
        isActive={PageNumber === currentPage}
        onClick={onPageItemClick}
      />
    )
  }

  return (
    <StyledPagination
      align={align}
      customStyle={customStyle}
    >
      {renderAnchorPage('First')}
      {totalPage > 2
        && (
          <PageRange
            currentPage={currentPage}
            totalPage={totalPage}
            onItemClick={onPageItemClick}
            numPageView={numPageView}
          />
        )
      }
      {totalPage > 1 && renderAnchorPage('Last')}
    </StyledPagination>
  )
}

Pagination.propTypes = {
  onItemClick: func,
  numPageView: number,
  align: oneOf(['left', 'right', 'center']),
  totalPage: number.isRequired,
  customStyle: object,
}

Pagination.defaultProps = {
  onItemClick: noop,
  numberPageView: 3,
  align: 'right',
  customStyle: null,
}


export default Pagination

