import React, {useState, memo, useCallback} from 'react'
import { string } from 'prop-types'
import Tabs from '../../core/ui/tabs'

import { Code, CodeTitle } from './views'

const TabMenu = [
  {id: 'all', label: 'All'},
  {id: 'pending', label: 'Pending'},
  {id: 'confirmed', label: 'Confirm'}
]

const CustomStyle = {
  'background-color': 'white'
}

const TabMenuWrapper = ({id}) => {
  const [toggleCode, setToggleCode] = useState(false)
  const [currentTab, setCurrentTab] = useState('')

  const onTabChange = useCallback(({id}) => {
    setCurrentTab(id)
  }, [setCurrentTab])

  return (
    <div id={id}>
      <h2>Tabs</h2>
      <p>
        <b>Props:</b> <br />
        <b><i>tabs</i></b>: array <br/>
        align: left | center | right <br/>
        activeTab: string <br/>
        onTabChange: func <br/> 
        customStyle: object <br/>
        <br/>
      </p>
      <Tabs
        tabs={TabMenu}
        activeTab={currentTab}
        onTabChange={onTabChange}
        customStyle={CustomStyle}
      />
      <br/>
      <CodeTitle
        toggleCode={toggleCode}
        onClick={() => setToggleCode(state => !state)}
      >
        Code
      </CodeTitle>
      <Code toggleCode={toggleCode}>
        &lt;Tabs<br />
        &nbsp;&nbsp;tabs=&quot;{JSON.stringify(TabMenu)}&quot;<br />
        &nbsp;&nbsp;activeTab=[return value from onTabChange]<br />
        &nbsp;&nbsp;onChange=[func]<br />
        &nbsp;&nbsp;customStyle=&quot;{JSON.stringify(CustomStyle)}&quot;<br />
        /&gt;
      </Code>
    </div>
  )
}

TabMenuWrapper.propTypes = {
  id: string,
}

export default memo(TabMenuWrapper)
