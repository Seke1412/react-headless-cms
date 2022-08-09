import React, {useState, memo, useCallback} from 'react'
import { string } from 'prop-types'
import Input from '../../core/ui/input'
import {Apple} from '../../svg'

import { Code, CodeTitle } from './views'

const InputWrapper = ({id}) => {
  const [inputValue, setInputValue] = useState('')
  const [toggleCode, setToggleCode] = useState(false)

  const onChangeCb = useCallback((e) => {
    setInputValue(e.target.value)
  }, [setInputValue])

  return (
    <div id={id}>
      <h2>Input</h2>
      <p>
        <b>Props:</b> <br />

        placeholder: string <br />
        value: string *(<i>Because this is a controlled input, so need value to pass in</i>)<br />
        onFocus: func<br />
        onBlur: func<br />
        onChange: func<br />
        <br/>
      </p>
      <Input
        className='input-wrapper-classname-added'
        placeholder="Please enter text here"
        value={inputValue}
        onChange={onChangeCb}
        icon={Apple}
      />
      <br/>
      <CodeTitle
        toggleCode={toggleCode}
        onClick={() => setToggleCode(state => !state)}
      >
        Code
      </CodeTitle>
      <Code toggleCode={toggleCode}>
        &lt;Input <br />
        &nbsp;&nbsp;placeholder=&quot;Please enter text here&quot;<br />
        &nbsp;&nbsp;value=[return value from onChange]<br />
        &nbsp;&nbsp;onChange=[func]<br />
        &nbsp;&nbsp;iconPosition=&quot;left&quot;<br />
        &nbsp;&nbsp;icon=Apple<br />
        /&gt;
      </Code>
    </div>
  )
}

InputWrapper.propTypes = {
  id: string,
}

export default memo(InputWrapper)
