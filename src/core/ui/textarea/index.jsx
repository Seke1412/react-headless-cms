import {bool, string, func, object} from 'prop-types'
import {noop} from '../../utils/helpers'
import {StyledTextarea} from './views'

const TextArea = ({
  onFocus, onBlur, onChange, onKeyUp,
  placeholder, value, disabled, allowResize,
  dataTest, customStyle,
}) => {
  return (
    <StyledTextarea
      value={value}
      allowResize={allowResize}
      placeholder={placeholder}
      onKeyUp={onKeyUp}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      disabled={disabled}
      data-test={dataTest}
      customStyle={customStyle}
    />
  )
}

TextArea.propTypes = {
  value: string,
  allowResize: bool,
  onFocus: func,
  onBlur: func,
  onChange: func,
  onKeyUp: func,
  placeholder: string,
  dataTest: string,
  customStyle: object,
  disabled: bool,
}

TextArea.defaultProps = {
  allowResize: false,
  onFocus: noop,
  onBlur: noop,
  onChange: noop,
  onKeyUp: noop,
  placeholder: '',
  dataTest: '',
  customStyle: null,
  disabled: false,
}

export default TextArea
