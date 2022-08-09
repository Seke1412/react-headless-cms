import React from 'react'
import Layout from '../../../layout'
import BasicTemplate from '../../../templates/basic'
import PageConfig from '../config.json'

const SampleCreate = () => {
  return (
    <Layout>
      <BasicTemplate
        title='Create Sample'
        serviceName='sample-upload'
        config={PageConfig}
      />
    </Layout>
  )
}

export default SampleCreate
