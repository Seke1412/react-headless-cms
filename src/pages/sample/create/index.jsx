import React from 'react'
import Layout from '../../../layout'
import BasicTemplate from '../../../templates/basic'
import PageConfig from './config.json'

const SampleCreate = () => {
  return (
    <Layout>
      <BasicTemplate
        config={PageConfig}
      />
    </Layout>
  )
}

export default SampleCreate
