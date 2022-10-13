import React, {useState, useEffect} from 'react';
import {number, func, string, object, bool, any} from 'prop-types'
import {noop} from '../../utils/helpers'

import {
  UploadHolder,
  ButtonWrapper,
  UploadInput,
  Label,
  StyledUploadIcon,
  StyledClipIcon,
  FileName,
  StyledDeleteIcon,
  FileItem,
  FileImage,
  FilesHolder,
  LoadingIcon
} from './views'

const UploadFile = ({
  limitSizeInKB,
  onErrorMessage,
  onChange,
  onImageClick,
  label,
  customStyle,
  name,
  accept,
  disabled,
  value,
  multiple,
}) => {
  const baseByte = 1024
  const limitSize = baseByte * limitSizeInKB
  const [loading, setLoading] = useState(false)
  const [previewFiles, setPreviewFiles] = useState([])

  useEffect(() => {
    if (value?.length > 0 && value?.length !== previewFiles.length) {
      setPreviewFiles(value)
    }
  }, [value, previewFiles])

  const onChangeFile = (e) => {
    onErrorMessage(null)
    setLoading(true)
    const files = Array.from(e.target.files)

    if (files.length === 0) {
      // No files select
      return
    }
    
    let previewLoaded = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const {size, type, name} = file
      const sameFileName = previewFiles.some(f => f.originalName === name);
      let errorMessage = '';

      if (sameFileName) {
        errorMessage = `File ${name} already existed, please remove or rename!`;
      }

      if (size > limitSize){
        errorMessage = `File ${name} size must smaller than ${limitSizeInKB} KB!`;
      }

      if (errorMessage) {
        onErrorMessage(errorMessage);
        return
      }

      const isImage = type.includes('image/')
      const index = name.replaceAll(/\s/ig, '-');

      if (isImage) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = e => {
          const result = e.target.result
          const previewData = {uri: result, type: 'image', file, index, originalName: name}
          previewLoaded.push(previewData)

          if (previewLoaded.length === files.length) {
            onChange([...previewLoaded, ...previewFiles])
            setLoading(false)
          }

        }
      } 
    }
  }

  const onDeleteFileClick = (fileIndex) => {
    const newState = previewFiles.filter(item => item.index !== fileIndex)
    onChange(newState)
  }

  const renderPreviewFiles = () => {
    return previewFiles?.map((fileDataOrName) => {
      const {uri, name, type, index} = fileDataOrName

      switch (type) {
        case 'image':
        case 'url':
          return (
            <FileItem
              onClick={() => onImageClick(uri)}
              isImage
              key={index}
            >
              <FileImage src={uri} />
              <StyledDeleteIcon
                isImage
                onClick={() => onDeleteFileClick(index)}
              />
            </FileItem>
          )
        default:
          return (
            <FileItem key={name}>
              <StyledClipIcon />
              <FileName>{name}</FileName>
              <StyledDeleteIcon onClick={() => onDeleteFileClick(index)} />
            </FileItem>
          )
      }
    })
  }
  
  const shouldRenderPreview = value?.length > 0 || previewFiles?.length > 0

  return (
    <UploadHolder
      disabled={disabled}
      customStyle={customStyle}
    >
      <ButtonWrapper
        disabled={disabled}
      >
        <UploadInput
          multiple={multiple}
          name={name}
          accept={accept}
          onChange={onChangeFile}
          disabled={disabled}
        />
        <Label>
          {label}
        </Label>
        <StyledUploadIcon />
      </ButtonWrapper>
      {shouldRenderPreview
        ? <FilesHolder>{renderPreviewFiles()}</FilesHolder>
        : loading && <LoadingIcon />
      }
    </UploadHolder>
  )
};

UploadFile.propTypes = {
  onChange: func,
  label: string,
  customStyle: object,
  name: string,
  accept: string,
  limitSizeInKB: number,
  onErrorMessage: func,
  onImageClick: func,
  disabled: bool,
  value: any,
  multiple: string,
};

UploadFile.defaultProps = {
  onErrorMessage: noop,
  onChange: noop,
  onImageClick: noop,
  label: '',
  limitSizeInKB: 2048,
  disabled: false,
  value: null,
  accept: '',
  multiple: null,
};

export default UploadFile
