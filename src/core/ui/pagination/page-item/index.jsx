import React, { useCallback} from 'react'
import { string, bool, func } from 'prop-types'
import {noop} from '../../../utils/helpers'

import { StyledPageItem } from './views'

const PageItem = ({
  onClick, isActive, label
}) => {
  const onPageClick = useCallback((e) => {
    onClick({...e, value: label})
  }, [onClick, label])

  return (
    <StyledPageItem
      isActive={isActive}
      onClick={onPageClick}
    >
      {label}
    </StyledPageItem>
  )
}

PageItem.propTypes = {
  onClick: func,
  label: string.required,
  isActive: bool.required,
}

PageItem.defaultProps = {
  onClick: noop,
}

export default PageItem

