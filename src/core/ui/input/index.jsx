import React from 'react'
import { bool, object, string, func, any, oneOf } from 'prop-types'

import {noop} from '../../utils/helpers'
import { IconWrapper, InputWrapper, StyledInput} from './views'

const Input = ({
  className,
  disabled,
  value, placeholder, onFocus,
  onBlur, onChange, defaultValue,
  icon, iconPosition,
  customStyle,
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
    <InputWrapper
      className={className}
      customStyle={customStyle}
      disabled={disabled}
    >
      <StyledInput
        hasIcon={icon}
        iconPosition={iconPosition}
        hasValue={value !== ''}

        value={value || defaultValue}
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
  className: string,
  disabled: bool,
  value: string,
  placeholder: string,
  onFocus: func,
  onBlur: func,
  onChange: func,
  icon: any,
  iconPosition: oneOf(['left', 'right']),
  customStyle: object,
  defaultValue: string,
}

Input.defaultProps = {
  className: '',
  disabled: false,
  value: '',
  placeholder: '',
  onFocus: noop,
  onBlur: noop,
  onChange: noop,
  icon: null,
  iconPosition: 'left',
  customStyle: null,
  defaultValue: '',
}

export default Input;
