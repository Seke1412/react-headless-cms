import React from 'react'
import { func, number } from 'prop-types'

import {noop} from '../../../utils/helpers'
import PageItem from '../page-item'

import {NextBack} from './views'

const PageRange = ({
  totalPage, currentPage, numPageView,
  onItemClick,
}) => {
  const leftEdge = 2
  const rightEdge = totalPage - 1
  const halfRange = Math.floor(numPageView / 2)
  const shouldShowRange = totalPage > (numPageView + 2)
  const shouldShowBack = shouldShowRange && currentPage > leftEdge + halfRange
  const shouldShowNext = shouldShowRange && currentPage < rightEdge - halfRange
  const renderBack = () => {
    const pageNumber = Math.max(currentPage - numPageView, leftEdge)
    return (
      <NextBack
        onClick={(e) => onItemClick({...e, value: pageNumber})}
      >
        {'<<'}
      </NextBack>
    )
  }

  const renderNext = () => {
    const pageNumber = Math.min(currentPage + numPageView, rightEdge)
    return (
      <NextBack
        onClick={(e) => onItemClick({...e, value: pageNumber})}
      >
        {'>>'}
      </NextBack>
    )
  }

  const renderPageItem = () => {
    const result = []
    let startPage
    const pivotLeft = currentPage - halfRange
    const pivotRight = currentPage + halfRange

    if (pivotLeft <= leftEdge) {
      startPage = leftEdge
    } else if (pivotRight >= rightEdge) {
      startPage = totalPage - numPageView
    } else {
      startPage = currentPage - halfRange
    }

    const endPage = startPage + numPageView

    for (let i = startPage; i < endPage; i += 1) {
      const pageNumber = i
      result.push(
        <PageItem
          key={`page-${pageNumber}`}
          label={pageNumber.toString()}
          isActive={pageNumber === currentPage}
          onClick={(e) => onItemClick({...e, value: pageNumber})}
        />
      )
    }

    return result
  }

  return (
    <>
      {shouldShowBack && renderBack()}
      {renderPageItem()}
      {shouldShowNext && renderNext()}
    </>
  )
}

PageRange.propTypes = {
  onItemClick: func,
  numPageView: number,
  totalPage: number.isRequired,
  currentPage: number.isRequired,
}

PageRange.defaultProps = {
  onItemClick: noop,
  numPageView: 3,
}

export default PageRange

