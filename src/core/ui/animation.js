import {keyframes} from 'styled-components'

export default {
  fadeOut: keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  `,
  fadeIn: keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `,
  spinning: keyframes`
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  `
}
