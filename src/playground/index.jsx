import React from 'react'
import Searcher from './components/searcher'
import Input from './components/input'
import TextArea from './components/textarea'
import Table from './components/table'
import Pagination from './components/pagination'
import Tabs from './components/tabs'
import Button from './components/button'
import UploadFile from './components/upload-file'
import ImageUploader from './components/image-uploader'

import './styles.scss'

const SupportedComponent = [
  'pagination',
  'table',
  'input',
  'textarea',
  'tabs',
  'button',
  'upload-file',
  'image-uploader',
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
      <ImageUploader id="image-uploader" />
      <br />
      <UploadFile id="upload-file" />
      <br />
      <Button id="button" />
      <br />
      <Tabs id="tabs" />
      <br />
      <Pagination id="pagination" />
      <br />
      <Table id="table" />
      <br />
      <Input id="input" />
      <br />
      <TextArea id="textarea" />
    </section>
  )
}

export default Playground
