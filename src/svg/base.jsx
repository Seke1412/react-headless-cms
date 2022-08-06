import styled, {css} from 'styled-components'

const StyledSVG = styled.svg`
  display: block;
  width: 16px;
  fill: currentColor;
  padding: 0px;
  height: auto;

  ${({customStyle}) => customStyle && css(customStyle)};
`


export default StyledSVG

