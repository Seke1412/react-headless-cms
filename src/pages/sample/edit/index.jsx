import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { WebServiceUrl } from '../../../core/enums/constants'
import Layout from '../../../layout'
import BasicTemplate from '../../../templates/basic'
import PageConfig from '../config.json'


const SampleCreate = () => {
  const [sample, setSample] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    let isCancel = false
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }
      const url = WebServiceUrl + 'samples/' + id
      const res = await axios.get(url, requestOptions)

      if (!isCancel) {
        const transformSampleData = PageConfig.content.reduce((total, next) => {
          total[next.fieldName] = res?.data?.[next.fieldName]
          return total
        }, {})

        if (res?.data?.photo) {
          const defaultImageUrls = res.data.photo.split(',').filter(uri => uri !== '')
          const imageData = defaultImageUrls.map((uri, index) => 
            ({uri: WebServiceUrl + uri, type: 'url', index: 'url-' + index, file: uri}))
            
          transformSampleData.files = imageData
        }

        setSample(transformSampleData)
      }
    }

    fetchData();

    return () => {
      isCancel = true
    }
  }, [id])

  return (
    <Layout>
      <BasicTemplate
        title='Edit Sample'
        serviceName={`sample-edit/${id}`}
        config={PageConfig}
        defaultValue={sample}
      />
    </Layout>
  )
}

export default SampleCreate
