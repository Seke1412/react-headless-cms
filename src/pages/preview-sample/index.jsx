import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {
  PreviewWrapper,
  ArticleTitle,
  ArticleContent,
  ImageWrapper,
  Image,
} from './views'

const PreviewSample = () => {
  const [samples, setSamples] = useState(null)
  const baseUrl = 'http://localhost:8080/'

  useEffect(() => {
    let isCancel = false
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }
      const url = 'http://localhost:8080/samples'
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
    <>
      {samples?.map(sample => {
        const {title, content, photo} = sample
        const photoUrls = photo?.split(',')
        const shouldRenderImages = Array.isArray(photoUrls) && photoUrls.length > 0

        return (
          <PreviewWrapper key={title}>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleContent>{content}</ArticleContent>
            {shouldRenderImages && 
              (<ImageWrapper>
                {photoUrls.map(uri => {
                  if (uri) {
                    const url = baseUrl + uri; 
                    console.log(url)
                    return (<Image src={url} />)
                  }
                })}
              </ImageWrapper>)
            }
          </PreviewWrapper>
        )
      })}
    </>
  )
}

export default PreviewSample
