import React, {memo} from 'react'
import {bool, any, func} from 'prop-types'
import {noop} from '../../utils/helpers'

import BaseModal from './base'

import {
  DarkBg,
  PopupHolder,
  CloseIcon,
  ContentWrapper,
} from './views'

const Modal = ({
  onCloseClick,
  isOpen,
  children,
}) => {
  return (
    <BaseModal>
      <PopupHolder
        isOpen={isOpen}
      >
        <CloseIcon 
          onClick={onCloseClick} 
        />
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </PopupHolder>
      <DarkBg 
        isOpen={isOpen}
        onClick={onCloseClick}
      />
    </BaseModal>
  )
}

Modal.propTypes = {
  isOpen: bool,
  onCloseClick: func,
  children: any,
}

Modal.defaultProps = {
  onCloseClick: noop,
}

export default memo(Modal)
