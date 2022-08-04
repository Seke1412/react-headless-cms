import React, {useState} from 'react';
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

  const onChangeFile = (e) => {
    onErrorMessage(null)
    setLoading(true)
    const files = Array.from(e.target.files)

    if (files.length === 0) {
      // No files select
      return
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const {size, type, name} = file
      if (size > limitSize){
        const message =  `File ${name} size must smaller than ${limitSizeInKB} KB!`;
        onErrorMessage(message)
        return
      }

      const isImage = type.includes('image/')
      if (isImage) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = e => {
          const result = e.target.result
          setPreviewFiles(state => [...state, {uri: result, type: 'image', index: i}])
        }
      } else {
        setPreviewFiles(state => [...state, {name: name, type: 'file', index: i}])
      }
    }

    onChange(files)
    setLoading(false)
  }

  const onDeleteFileClick = (fileIndex) => {
    const files = [...value]
    files.splice(fileIndex, 1)

    setPreviewFiles(state => state.filter(item => item.index !== fileIndex))
    onChange(files)
  }

  const renderPreviewFiles = () => {
    return previewFiles.map((fileDataOrName) => {
      const {uri, name, type, index} = fileDataOrName
      const isImage = type === 'image'

      if (isImage) {
        return (
          <FileItem
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
      } else {
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
      {value?.length > 0
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
  disabled: bool,
  value: any,
  multiple: string,
};

UploadFile.defaultProps = {
  onErrorMessage: noop,
  onChange: noop,
  label: '',
  limitSizeInKB: 2048,
  disabled: false,
  value: null,
  accept: '',
  multiple: null,
};

export default UploadFile
