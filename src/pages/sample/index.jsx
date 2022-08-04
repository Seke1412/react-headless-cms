import React, { useEffect } from 'react'
import Layout from '../../layout'
import BasicTemplate from '../../templates/basic'
import PageConfig from './config.json'

const SamplePage = () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }

  useEffect(() => {
    fetch("http://localhost:8080/samples", requestOptions)
      .then(response => response.json())
      .then(res => console.log(res));
  }, [])

  return (
    <Layout>
      <BasicTemplate
        config={PageConfig}
      />
    </Layout>
  )
}

export default SamplePage
