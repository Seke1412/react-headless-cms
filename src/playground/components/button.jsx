import React, {memo, useState} from 'react'
import {string} from 'prop-types'
import styled from 'styled-components'
import Button from '../../core/ui/button'
import {Apple} from '../../svg'

import { Code, CodeTitle } from './views'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: var(--space-4);
`

const ButtonWrapper = ({id}) => {
  const [toggleCode, setToggleCode] = useState(false)

  return (
    <div id={id}>
      <h2>Button</h2>
      <p>
        <b>Props:</b> <br />
        className: string <br/>
        label: string <br/>
        icon: any<br/>
        onClick: func <br/>
        type: primary | secondary <br/>
        buttonType: string <br/>
        disabled: bool <br/>
        customStyle: Object<br/>
        <br/>
      </p>
      <Wrapper>
        <Button
          className='button-1'
          label='Button 1'
        />
        <Button
          className='button-2'
          label='Button 2'
          disabled
          icon={<Apple width='16px'/>}
        />
        <Button
          className='button-3'
          label='Button 3'
          buttonType='secondary'
        />
        <Button
          className='button-4'
          label='Button 4'
          buttonType='cancel'
        />
      </Wrapper>
      <br/>
      <CodeTitle
        toggleCode={toggleCode}
        onClick={() => setToggleCode(state => !state)}
      >
        Code
      </CodeTitle>
      <Code toggleCode={toggleCode}>
        &lt;Button<br />
        &nbsp;&nbsp;className=&quot;button-1&quot;<br />
        &nbsp;&nbsp;label=&quot;Button 1&quot;<br />
        /&gt;
        <br />
        &lt;Button<br />
        &nbsp;&nbsp;className=&quot;button-2&quot;<br />
        &nbsp;&nbsp;label=&quot;Button 2&quot;<br />
        &nbsp;&nbsp;disabled<br />
        &nbsp;&nbsp;icon=&quot;&lt;Apple width='16px' /&gt;&quot;<br />
        /&gt;
        <br />
        &lt;Button<br />
        &nbsp;&nbsp;className=&quot;button-3&quot;<br />
        &nbsp;&nbsp;label=&quot;Button 3&quot;<br />
        &nbsp;&nbsp;buttonType=&quot;secondary&quot;<br />
        /&gt;
        <br />
        &lt;Button<br />
        &nbsp;&nbsp;className=&quot;button-4&quot;<br />
        &nbsp;&nbsp;label=&quot;Button 4&quot;<br />
        &nbsp;&nbsp;buttonType=&quot;cancel&quot;<br />
        /&gt;
        <br />
      </Code>
    </div>
  )
}

ButtonWrapper.propTypes = {
  id: string,
}

export default memo(ButtonWrapper)
