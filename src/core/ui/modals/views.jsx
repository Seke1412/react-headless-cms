import styled from 'styled-components'
import { CloseIcon as Icon } from '../../../svg'

const DarkBg = styled.div.attrs(() => ({
  className: 'modal-bg'
}))`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 0;
  display: ${({isOpen}) => isOpen ? 'block' : 'none'};
`

const PopupHolder = styled.div.attrs(() => ({
  className: 'modal-content-holder'
}))`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  max-width: 50%;
  height: auto;
  max-height: 95vh;

  box-sizing: border-box;
  border-radius: 15px;
  overflow: hidden;
  background-color: white;

  display: ${({isOpen}) => isOpen ? 'block' : 'none'};
`

const CloseIcon = styled(Icon).attrs(() => ({
  className: 'close-icon',
  name: 'close',
  size: 's',
  color: 'var(--primary)'
}))`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

const ContentWrapper = styled.div.attrs(() => ({
  className: 'content-wrapper'
}))`
  width: calc(100% - 40px);
  height: auto;
  max-height: calc(95vh - 80px);
  background-color: white;
  margin: 0px;
  padding: 40px 20px;
  display: block;
  overflow: auto;
`

export {
  DarkBg,
  PopupHolder,
  CloseIcon,
  ContentWrapper,
}
