import React from 'react'
import { any, object, string, func, bool, oneOf } from 'prop-types'
import noop from 'lodash/noop'

import {
  StyledButton, IconContainer, Label,
} from "./views"


const Button = ({
  className,
  label, icon, type, buttonType,
  disabled, onClick,
  customStyle, dataTest
}) => {
  return (
    <StyledButton
      className={className}
      type={type}
      buttonType={buttonType}
      disabled={disabled}
      customStyle={customStyle}
      onClick={onClick}
      data-test={dataTest}
    >
      <IconContainer>
        {icon && icon}
        {label && <Label>{label}</Label>}
      </IconContainer>
    </StyledButton>
  )
}

Button.propTypes = {
  className: string,
  label: string,
  dataTest: string,
  icon: any,
  onClick: func,
  buttonType: oneOf(['primary', 'secondary', 'cancel']),
  type: string,
  disabled: bool,
  customStyle: object
}

Button.defaultProps = {
  className: '',
  label: '',
  icon: null,
  onClick: noop,
  buttonType: 'primary',
  type: '',
  dataTest: '',
  disabled: false,
  customStyle: null
}

export default Button
