import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Layout from '../../layout'

import {
  ContentWrapper, Title,
  Content,
} from './views'

const SampleList = () => {
  const [samples, setSamples] = useState(null)
  const baseUrl = 'http://localhost:8080/'

  useEffect(() => {
    let isCancel = false
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }
      const url = baseUrl + 'samples'
      const res = await axios.get(url, requestOptions)
      if (!isCancel) {
        setSamples(res.data)
      }
    }

    fetchData();

    return () => {
      isCancel = true
    }
  }, [])

  return (
    <Layout>
      <ContentWrapper>
        <Title>
          Samples
        </Title>
        <Content>
          {JSON.stringify(samples, null, 2)}
        </Content>
      </ContentWrapper>
    </Layout>
  )
}

export default SampleList
