import React, { useEffect, useState } from 'react'
import {number, func, string, object, bool, any} from 'prop-types'
import Input from '../input'
import {noop} from '../../utils/helpers'

import {
  ImageUploader,
  ContentHolder,
  PreviewHolder,

  ButtonWrapper,
  UploadInput,
  Label,
  StyledUploadIcon,
  StyledDeleteIcon,
  FileItem,
  FileImage,
  FileFields,
  Image,
  Prior,
  FilesHolder,
  LoadingIcon
} from './views'


const InputCustomStyle = {
  width: 'calc(50% - 10px)',
  'max-width': '240px',
}

const Uploader = ({
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
  const [buttonClass, setButtonClass] = useState('');
  const [previewUri, setPreviewUri] = useState();
  const [startDragId, setStartDragId] = useState();

  useEffect(() => {
    if (Array.isArray(value) && value?.length > 0) {
      const sortedArray = value.sort((a, b)=> b.originalOrder - a.originalOrder);
      setPreviewFiles(sortedArray)
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
      const sameFileName = previewFiles?.some(f => f.originalName === name);
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
          const highest = previewFiles[0]?.originalOrder ?? 0
          const order = highest + parseInt(i, 10) + 1
          const previewData = {
            uri: result,
            type: 'image',
            file,
            index,
            originalName: name,
            originalOrder: order,
          }
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

  const startDrag = (e) => {
    const itemId = e.target.dataset.itemId;
    setStartDragId(itemId);
  }

  const dragOver = (e) => {
    e.preventDefault();
  }

  const drop = (e) => {
    const dropId = parseInt(e.currentTarget.dataset.itemId, 10)
    const dragId = parseInt(startDragId, 10)
    const indexRange =  dragId - dropId
    const positiveIndex = indexRange > 0

    const newOrderArray = previewFiles.map(item => {
      const originalOrder = parseInt(item.originalOrder, 10)
      if (originalOrder === dragId) {
        item.originalOrder = dropId;
      } else {
        const inBetweenItem = positiveIndex
          ? originalOrder >= dropId && originalOrder < dragId
          : originalOrder <= dropId && originalOrder > dragId
        if (inBetweenItem) {
          item.originalOrder = positiveIndex ? originalOrder + 1 : originalOrder - 1
        }
      }

      return item
    })
    const sortedArray = newOrderArray.sort((a, b) => b.originalOrder - a.originalOrder)
    setStartDragId()
    setPreviewFiles(sortedArray)
  }

  const renderPreviewFiles = () => {
    return previewFiles?.map((fileData) => {
      const {uri, type, index, originalOrder} = fileData
      switch (type) {
        case 'image':
        case 'url':
          return (
            <FileItem
              data-item-id={originalOrder}
              draggable
              onDragStart={startDrag}
              onDragOver={dragOver}
              onDrop={drop}
              isImage
              key={index}
            >
              <FileImage>
                <Image 
                  onClick={() => onImageItemClick(uri)}
                  src={uri} 
                />
              </FileImage>
              <FileFields>
                <Input
                  placeholder="file name"
                  customStyle={InputCustomStyle}
                />
                <Input
                  placeholder="description"
                  customStyle={InputCustomStyle}
                />
                <Input
                  placeholder="caption"
                  customStyle={InputCustomStyle}
                />
              </FileFields>
              <StyledDeleteIcon
                isImage
                onClick={() => onDeleteFileClick(index)}
              />
              <Prior>
                {originalOrder}
              </Prior>
            </FileItem>
          )
        default:
          console.error('image-uploader only accept image type file')
          break;
      }
    })
  }

  const onDragOver = () => {
    setButtonClass('is-dragover');
  };

  const onDragOut = () => {
    setButtonClass('');
  };

  const onImageItemClick = (uri) => {
    setPreviewUri(uri)
    onImageClick(uri)
  }

  const shouldRenderPreview = value?.length > 0 || previewFiles?.length > 0

  return (
    <ImageUploader
      disabled={disabled}
      customStyle={customStyle}
    >
      <ContentHolder>
        {shouldRenderPreview
          ? <FilesHolder>{renderPreviewFiles()}</FilesHolder>
          : loading && <LoadingIcon />
        }
        <ButtonWrapper
          disabled={disabled}
          className={buttonClass}
          haveFiles={previewFiles?.length > 0}
        >
          <UploadInput
            multiple={multiple}
            name={name}
            accept={accept}
            onChange={onChangeFile}
            disabled={disabled}
            onDragOver={onDragOver}
            onDragEnter={onDragOver}
            onDragLeave={onDragOut}
            onDragEnd={onDragOut}
            onDrop={onDragOut}
          />
          <Label>
            {label}
          </Label>
          <StyledUploadIcon />
        </ButtonWrapper>
      </ContentHolder>
      {previewUri &&
        <PreviewHolder />
      }
    </ImageUploader>
  )
};

Uploader.propTypes = {
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

Uploader.defaultProps = {
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

export default Uploader
