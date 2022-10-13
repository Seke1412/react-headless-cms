import styled, {css} from 'styled-components'
import {ClipIcon, DeleteIcon, UploadIcon} from '../../../svg'
import Animation from '../animation'

const UploadHolder = styled.div.attrs(() => ({
  className: 'upload-holder'
}))`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  ${({disabled}) => disabled && css`
    background-color: transparent;
    cursor: not-allowed;
  `}

  ${({customStyle}) => customStyle && css(customStyle)};
`

const FileItem = styled.li.attrs(() => ({
  className: 'upload-file-item'
}))`
  cursor: pointer;
  font-family: var(--font-family);
  color: var(--secondary);
  width: calc(100% - 10px);
  min-width: 100px;
  max-width: var(--smallest);
  padding: 0px 5px;
  aspect-ratio: 1/1;
  height: auto;
  max-height: var(--smallest);
  min-height: 100px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.1);

  ${({isImage}) => isImage && css`
    position: relative;
    width: auto;
    height: fit-content;
    padding: 0px;
  `};

  :hover {
    transition: all 0.3s ease-out;
    background-color: var(--background-color);
    .delete-icon {
      transition: all 0.3s ease-out;
      opacity: 1
    }
  }
`

const FilesHolder = styled.div.attrs(() => ({
  className: 'file-holder'
}))`
  width: 100%;
  height: auto;
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-4);
  flex-wrap: wrap;
`

const FileImage = styled.img.attrs(() => ({
  className: 'upload-image'
}))`
  width: auto;
  height: 100%;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  margin: 0px;
  padding: 0px;
`

const StyledClipIcon = styled(ClipIcon).attrs(() => ({
  className: 'clip-icon'
}))`
  width: 16px;
`

const FileName = styled.span.attrs(() => ({
  className: 'file-name'
}))`
  flex: 1 1 0;
  padding: 0px 10px;
  line-height: 16px;
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
  position: relative;
  display: flex;
  align-items: center;
  width: auto;
  padding: 0px 16px;
  min-width: 120px; 
  height: 40px;
  max-width: var(--double-smallest);
  flex-direction: row;
  justify-content: space-between;


  box-sizing: border-box;
  border: 0px solid transparent;
  border-radius: var(--border-radius);
  background-color: rgb(238, 240, 242);
  cursor: pointer;
  transition: all 0.3s ease-out;

  :hover {
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
  margin-left: var(--space-3);
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
  UploadHolder,
  ButtonWrapper,
  UploadInput,
  Label,
  StyledUploadIcon,
  StyledClipIcon,
  FileName,
  StyledDeleteIcon,
  FilesHolder,
  FileItem,
  FileImage,
  LoadingIcon
}
