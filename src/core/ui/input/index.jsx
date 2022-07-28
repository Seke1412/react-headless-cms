import React from 'react'
import { string, func, element, oneOf } from 'prop-types'

import {noop} from '../../utils/helpers'
import { IconWrapper, InputWrapper, StyledInput} from './views'

const Input = ({
  value, placeholder, onFocus,
  onBlur, onChange,
  icon, iconPosition,
}) => {
  const renderIcon = () => {
    if (icon) {
      const Icon = icon
      return (
        <IconWrapper
          iconPosition={iconPosition}
        >
          <Icon />
        </IconWrapper>
      )
    }

    return null
  }

  return (
    <InputWrapper>
      <StyledInput
        hasIcon={!!icon}
        iconPosition={iconPosition}
        hasValue={value !== ''}

        value={value}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
      {renderIcon()}
    </InputWrapper>
  )
}

Input.propTypes = {
  value: string,
  placeholder: string,
  onFocus: func,
  onBlur: func,
  onChange: func,
  icon: element,
  iconPosition: oneOf(['left', 'right'])
}

Input.defaultProps = {
  value: '',
  placeholder: '',
  onFocus: noop,
  onBlur: noop,
  onChange: noop,
  icon: null,
  iconPosition: 'left',
}

export default Input;
