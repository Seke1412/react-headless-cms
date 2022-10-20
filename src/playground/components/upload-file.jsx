import styled from 'styled-components'
import React, {useState, memo, useCallback} from 'react'
import { string } from 'prop-types'
import axios from 'axios'

import UploadFile from '../../core/ui/upload-file'
import Button from '../../core/ui/button'

import { WebServiceUrl } from '../../core/enums/constants'

import { Code, CodeTitle } from './views'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
`

const UploadWrapper = ({id}) => {
  const [toggleCode, setToggleCode] = useState(false)
  const [files, setCurrentFiles] = useState(null)

  const onFileChange = useCallback((files) => {
    setCurrentFiles(files)
  }, [setCurrentFiles])

  const doUpload = () => {
    const service={
      url: WebServiceUrl,
      api: 'playground-upload',
      method: 'POST',
      params: 'files',
      headers: {'Content-Type': 'multipart/form-data'}
    }

    if (files) {
      const {url, api, method, params, headers} = service
      switch (method) {
        case 'POST':
          const postUrl = url + api
          const formData = new FormData();
          files.forEach(file => {
            formData.append(params, file);
          })

          axios.post(postUrl, formData, {headers})
            .then(onUploadResult)
            .catch(onUploadError)
          break;
        default:
          break;
      }
    }
  }

  const onUploadResult = (response) => {
    console.log(response)
  }

  const onUploadError = (error) => {
    console.log(error)
  }

  return (
    <div id={id}>
      <h2>UploadFile</h2>
      <p>
        <b>Props:</b> <br />
          onChange: func <br/>
          label: string <br/>
          customStyle: object<br/>
          name: string<br/>
          accept: string<br/>
          limitSizeInKB: number<br/>
          onErrorMessage: func<br/>
          disabled: bool<br/>
          value: any<br/>
        <br/>
      </p>
      <Wrapper>
        <UploadFile
          label="Upload file"
          limitSizeInKB={3000}
          accept="image/*"
          multiple="multiple"
          onChange={onFileChange}
          onErrorMessage={(message) => console.log('upload error: ', message)}
          value={files}
          customStyle={{width: 'auto', 'max-width': '50%'}}
        />
        <Button 
          label="Submit"
          onClick={doUpload}
          customStyle={{margin: 'var(--space-3) 0px'}}
        />
      </Wrapper>
      <br/>
      <CodeTitle
        toggleCode={toggleCode}
        onClick={() => setToggleCode(state => !state)}
      >
        Code
      </CodeTitle>
      <Code toggleCode={toggleCode}>
        &lt;TextArea <br />
        &nbsp;&nbsp;label=&quot;Upload file&quot;<br />
        &nbsp;&nbsp;limitSizeInKB=3000<br />
        &nbsp;&nbsp;accept='image/*'<br />
        &nbsp;&nbsp;multiple='multiple'<br />
        &nbsp;&nbsp;onChange=[func(files)]<br />
        &nbsp;&nbsp;onErrorMessage=[func(message)]<br />
        &nbsp;&nbsp;value=[files return from onChange]<br />
        /&gt;
      </Code>
    </div>
  )
}

UploadWrapper.propTypes = {
  id: string,
}

export default memo(UploadWrapper)
