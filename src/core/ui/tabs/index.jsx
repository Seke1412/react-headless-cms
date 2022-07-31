import React from 'react'
import { string, array, object, func, oneOf } from 'prop-types'
import {noop} from '../../utils/helpers'

import { Wrapper, TabItem } from './views'

const Tabs = ({
  tabs, activeTab, onTabChange, align,
  customStyle
}) => {
  return (
    <Wrapper
      customStyle={customStyle}
      align={align}
    >
      {tabs.map(tab => {
        const {id, label} = tab
        const isActive = id === activeTab
        return (
          <TabItem
            onClick={() => {onTabChange({id, label})}}
            active={isActive}
            key={id}
          >
            {label}
          </TabItem>
        )
      })}
    </Wrapper>
  )
}

Tabs.propTypes = {
  tabs: array.isRequired,
  align: oneOf(['left', 'center', 'right']),
  activeTab: string,
  onTabChange: func,
  customStyle: object,
}

Tabs.defaultProps = {
  align: 'left',
  activeTab: '',
  onTabChange: noop,
  customStyle: null,
}

export default Tabs
