import React from 'react'
import { object, string, func, any, oneOf } from 'prop-types'

import {noop} from '../../utils/helpers'
import { IconWrapper, InputWrapper, StyledInput} from './views'

const Input = ({
  className,
  value, placeholder, onFocus,
  onBlur, onChange,
  icon, iconPosition,
  customStyle
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
    >
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
  className: string,
  value: string,
  placeholder: string,
  onFocus: func,
  onBlur: func,
  onChange: func,
  icon: any,
  iconPosition: oneOf(['left', 'right']),
  customStyle: object,
}

Input.defaultProps = {
  className: '',
  value: '',
  placeholder: '',
  onFocus: noop,
  onBlur: noop,
  onChange: noop,
  icon: null,
  iconPosition: 'left',
  customStyle: null,
}

export default Input;
