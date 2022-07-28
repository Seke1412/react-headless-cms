import React from 'react'
import Searcher from './components/searcher'
import Input from './components/input'
import Table from './components/table'
import Pagination from './components/pagination'

import './styles.scss'
const SupportedComponent = [
  'pagination',
  'table',
  'input',
]



const Playground = () => {
  const onSearch = (value) => {
    document?.getElementById(value)?.scrollIntoView()
  }

  return (
    <section className="section-wrapper">
      <Searcher
        options={SupportedComponent}
        onSearchResult={onSearch}
      />
      <Pagination id="pagination" />
      <br />
      <Table id="table" />
      <br />
      <Input id="input" />
    </section>
  )
}

export default Playground
