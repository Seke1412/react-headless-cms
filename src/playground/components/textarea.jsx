import React, {useState, memo, useCallback} from 'react'
import { string } from 'prop-types'
import TextArea from '../../core/ui/textarea'

import { Code, CodeTitle } from './views'

const TAWrapper = ({id}) => {
  const [textareaValue, setTextAreaValue] = useState('')
  const [toggleCode, setToggleCode] = useState(false)

  const onChangeCb = useCallback((e) => {
    setTextAreaValue(e.target.value)
  }, [setTextAreaValue])

  return (
    <div id={id}>
      <h2>TextArea</h2>
      <p>
        <b>Props:</b> <br />
        <b><i>value</i></b>: string *(<i>Because this is a controlled textarea, so need value to pass in</i>)<br />
        allowResize: bool <br />
        placeholder: string <br />
        onFocus: func<br />
        onBlur: func<br />
        onChange: func<br />
        onKeyUp: func<br />
        dataTest: string<br />
        customStyle: object<br />
        <br/>
      </p>
      <TextArea
        placeholder="Please enter text here"
        allowResize
        value={textareaValue}
        onChange={onChangeCb}
      />
      <br/>
      <CodeTitle
        toggleCode={toggleCode}
        onClick={() => setToggleCode(state => !state)}
      >
        Code
      </CodeTitle>
      <Code toggleCode={toggleCode}>
        import Apple from &quot;svg/apple.tsx&quot; <br />
        <br />
        &lt;TextArea <br />
        &nbsp;&nbsp;allowResize=&quot;true&quot;<br />
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

TAWrapper.propTypes = {
  id: string,
}

export default memo(TAWrapper)
