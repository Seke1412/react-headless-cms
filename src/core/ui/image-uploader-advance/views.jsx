import styled, {css} from 'styled-components'
import {DeleteIcon, UploadIcon} from '../../../svg'
import Animation from '../animation'

const FileItemHeight = 137

const ImageUploader = styled.div.attrs(() => ({
  className: 'uploader-holder'
}))`
  position: relative;
  width: 640px;
  height: 480px;

  background-color: white;
  overflow: auto;

  border: 0px solid transparent;
  border-radius: var(--border-radius);

  ${({disabled}) => disabled && css`
    background-color: transparent;
    cursor: not-allowed;
  `}
  
  box-shadow: var(--shadow-bottom-2);

  ${({customStyle}) => customStyle && css(customStyle)};
`;


const ContentHolder = styled.div.attrs(() => ({
  className: 'content-holder'
}))`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: white;
`

const PreviewHolder = styled.div.attrs(() => ({
  className: 'preview-holder'
}))`
  position: absolute;
  z-index: 0;
  inset: 0;

  width: 100%;
  height: 100%;
  background-color: white;
`

const FilesHolder = styled.div.attrs(() => ({
  className: 'file-holder'
}))`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`

const FileWrapper = styled.div.attrs(() => ({
  className: 'file-wrapper'
}))`
  position: relative;
  width: 100%;
  max-width: 640px;
  height: ${FileItemHeight}px;
`

const FileItem = styled.li.attrs(() => ({
  className: 'upload-file-item'
}))`
  position: relative;

  cursor: pointer;
  font-family: var(--font-family);
  color: var(--secondary);
  width: 100%;
  max-width: 640px;
  height: ${FileItemHeight}px;
  padding: var(--space-2);
  
  background-color: #eee;

  height: auto;
  max-height: var(--smallest);
  min-height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  transform: none;

  .delete-icon {
    transition: all 0.1s ease-out;
    opacity: 1
  }

  &.dragging {
    position: absolute;
    z-index: 99;
  }
`

const FileFields = styled.div.attrs(() => ({
  className: 'file-fields'
}))`
  margin: var(--space-2) 0px;
  width: calc(100% - 200px);
  margin-left: var(--space-4);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  user-select: none;
`

const FileImage = styled.div.attrs(() => ({
  className: 'file-image'
}))`
  position: relative;
  width: auto;
  height: 120px;
  aspect-ratio: 1/1;
  
  border: 1px solid var(--primary);
  border-radius: var(--border-radius);
  box-sizing: border-box;

  overflow: hidden;
  display: flex;
  margin: 0px;
  padding: 0px;
  user-select: none;
`


const Image = styled.img.attrs(() => ({
  className: 'image'
}))`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: 100%;

  display: flex;
  margin: 0px;
  padding: 0px;
  user-select: none;
`

const StyledDeleteIcon = styled(DeleteIcon).attrs(() => ({
  className: 'delete-icon'
}))`
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease-out;
  font-size: var(--fs-default);
  width: 20px;

  ${({isImage}) => isImage && css`
    position: absolute;
    width: 20px;
    top: var(--space-2);
    right: var(--space-2);
  `};

  :hover {
    transition: all 0.3s ease-out;
    color: var(--error-color);
  }
`


const ButtonWrapper = styled.div.attrs(() => ({
  className: 'upload-button'
}))`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  width: 360px;
  height: 240px;

  padding: 0px 16px;
  max-width: var(--double-smallest);
  flex-direction: column;
  justify-content: space-evenly;


  box-sizing: border-box;
  border: 0px solid transparent;
  border-radius: var(--border-radius);
  background-color: rgb(238, 240, 242);
  cursor: pointer;
  transition: all 0.3s ease-out;

  ${({haveFiles}) => haveFiles && css`
    flex-direction: row;
    transform: none;
    top: auto;
    left: auto;
    bottom: var(--base-space);
    right: var(--base-space);
    width: 240px;
    height: 40px;
  `}

  :hover {
    transition: all 0.3s ease-out;
    background-color: var(--primary);
    color: white;
    span, svg {
      color: inherit; 
    }
  }

  &.is-dragover {
    transition: all 0.3s ease-out;
    background-color: var(--primary);
    color: white;
    span, svg {
      color: inherit; 
    }
  }

  ${({disabled}) => disabled && css`
    pointer-events: none;
  `}
`

const UploadInput = styled.input.attrs(({multiple, name, accept}) => ({
  className: 'upload-input',
  type: 'file',
  name: name,
  accept: accept,
  multiple: multiple,
}))`
  width: 0px;
  height: 0px;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
`

const Label = styled.span.attrs(() => ({
  className: 'upload-label'
}))`
  font-family: var(--font-family);
  font-size: var(--fs-default);
  color: var(--text-color);
  user-select: none;
`

const StyledUploadIcon = styled(UploadIcon).attrs(() => ({
  className: 'upload-icon'
}))`
  width: 20px;
  color: var(--text-color);
`

const Prior = styled.span.attrs(() => ({
  className: 'prior-text'
}))`
  position: absolute;
  right: var(--space-4);
  top: 40px;
  font-family: var(--font-family);
  font-size: var(--fs-default);
  color: var(--text-color);
  user-select: none
`

const LoadingIcon = styled.span`
  height: 15px;
  width: 15px;
  border: 3px solid red;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${Animation.spinning} 1s infinite linear;
`

export {
  ImageUploader,
  ContentHolder,
  PreviewHolder,
  ButtonWrapper,
  UploadInput,
  Label,
  StyledUploadIcon,
  StyledDeleteIcon,
  FilesHolder,
  FileWrapper,
  FileItem,
  FileFields,
  FileImage,
  Image,
  Prior,
  LoadingIcon
}
