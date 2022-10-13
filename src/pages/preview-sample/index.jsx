import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { WebServiceUrl } from '../../core/enums/constants'
import {
  PreviewWrapper,
  ArticleTitle,
  ArticleContent,
  ImageWrapper,
  Image,
} from './views'

const PreviewSample = () => {
  const [samples, setSamples] = useState(null)

  useEffect(() => {
    let isCancel = false
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }
      const url = WebServiceUrl + 'samples'
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
        const {id, title, content, photo} = sample
        const photoUrls = photo?.split(',')
        const shouldRenderImages = Array.isArray(photoUrls) && photoUrls.length > 0

        return (
          <PreviewWrapper key={id}>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleContent>{content}</ArticleContent>
            {shouldRenderImages && 
              (<ImageWrapper>
                {photoUrls.map(uri => {
                  if (uri) {
                    const url = WebServiceUrl + uri; 
                    return (
                      <Image 
                        key={uri}
                        src={url}
                      />
                    )
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
