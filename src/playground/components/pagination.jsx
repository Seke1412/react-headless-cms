import React, {useState, memo} from 'react'
import { string } from 'prop-types'
import Pagination from '../../core/ui/pagination'
import { Code, CodeTitle } from './views'

const PaginationWrapper = ({id}) => {
  const [pageValue, setPageValue] = useState('')
  const [toggleCode, setToggleCode] = useState(false)

  const onPageItemClick = (data) => {
    setPageValue(data.value)
  }

  return (
    <div id={id}>
      <h2>Pagination</h2>
      <p>
        <b>Props:</b> <br />
        <b><i>totalPage</i></b>: number <br />
        onItemClick: (arg) =&gt; void ( default: noop )<br />
        numPageView: number ( default: 3 )<br />
        align: left | right | center ( default: left )<br />
      </p>
      <Pagination
        totalPage={20}
        onItemClick={onPageItemClick}
        numPageView={5}
        align="center"
      />
      <p>
        {`You've selected: ${pageValue}`}
      </p>

      <CodeTitle
        toggleCode={toggleCode}
        onClick={() => setToggleCode(state => !state)}
      >
        Code
      </CodeTitle>
      <Code toggleCode={toggleCode}>
        &lt;Pagination <br />
        &nbsp;&nbsp;totalPage=20<br />
        &nbsp;&nbsp;onItemClick=[func]<br />
        &nbsp;&nbsp;numPageView=5<br />
        &nbsp;&nbsp;align=&quot;center&quot;<br />
        /&gt;
      </Code>
    </div>
  )
}

PaginationWrapper.propTypes = {
  id: string.required
}

export default memo(PaginationWrapper)

