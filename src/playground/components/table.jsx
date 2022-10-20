import React, {useState, memo} from 'react'
import { string } from 'prop-types'
import Table from '../../core/ui/table'
import { Code, CodeTitle } from './views'

const Columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }
]

const DataSource = [
  {
    id: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    id: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
]

const ColumnRender = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <h4>{text}</h4>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map(tag => {
          return (
            <span
              className="multiTags"
              key={tag}
            >
              {tag.toUpperCase()}
            </span>
          );
        })}
      </>
    ),
  }
];

const ColumnRenderCopy = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: '(text: any) => <h4>{text}</h4>',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: '(tags) => <>{tags.map(tag => {return (<span key={tag}>{tag.toUpperCase()}</span>)})}</>',
  }
];

const DataRender = [
  {
    id: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    id: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    id: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const TableWrapper = ({id}) => {
  const [rowValue, setRowValue] = useState(null)
  const [rowRPValue, setRowRPValue] = useState(null)
  const [toggleCode1, setToggleCode1] = useState(false)
  const [toggleCode2, setToggleCode2] = useState(false)

  const onRowClick = (e, data) => {
    setRowValue(data)
  }

  const onRowRPClick = (e, data) => {
    setRowRPValue(data)
  }

  return (
    <div id={id}>
      <h2>Table</h2>
      <p>
        <b>Props:</b> <br />
        <b><i>columns</i></b>: array<br />
        dataSource: array ( default: [  ] )<br />
        showTableBorder: boolean ( default: false )<br />
        showRowBorder: boolean ( default: true )<br />
        onRowClick: (e, data) =&gt; void ( default: noop )<br />
      </p>
      <h3>Example: Simple Table</h3>
      <Table
        columns={Columns}
        dataSource={DataSource}
        onRowClick={onRowClick}
        customStyle={{margin: '0px auto'}}
      />
      <p>
        You&#39;ve selected:
      </p>
      <pre>
        {JSON.stringify(rowValue)}
      </pre>

      <CodeTitle
        toggleCode={toggleCode1}
        onClick={() => setToggleCode1(state => !state)}
      >
        Code
      </CodeTitle>
      <Code toggleCode={toggleCode1}>
        const Columns = {JSON.stringify(Columns, null, ' ')}<br />
        <br />
        const DataSource = {JSON.stringify(DataSource, null, ' ')}<br />
        <br />
        &lt;Table<br />
        &nbsp;&nbsp;columns=Columns<br />
        &nbsp;&nbsp;dataSource=DataSource<br />
        &nbsp;&nbsp;onRowClick=[func]<br />
        /&gt;
      </Code>
      <br />
      <h3>Example: Table w render props</h3>
      <Table
        columns={ColumnRender}
        dataSource={DataRender}
        onRowClick={onRowRPClick}
        customStyle={{margin: '0px auto'}}
      />
      <p>
        You&#39;ve selected:
      </p>
      <pre>
        {JSON.stringify(rowRPValue)}
      </pre>

      <CodeTitle
        toggleCode={toggleCode2}
        onClick={() => setToggleCode2(state => !state)}
      >
        Code
      </CodeTitle>
      <Code toggleCode={toggleCode2}>
        const Columns = {JSON.stringify(ColumnRenderCopy, null, ' ')}<br />
        <br />
        const DataSource = {JSON.stringify(DataRender, null, ' ')}<br />
        <br />
        &lt;Table<br />
        &nbsp;&nbsp;columns=Columns<br />
        &nbsp;&nbsp;dataSource=DataSource<br />
        &nbsp;&nbsp;onRowClick=[func]<br />
        /&gt;
      </Code>
    </div>
  )
}

TableWrapper.propTypes = {
  id: string,
}

export default memo(TableWrapper)
