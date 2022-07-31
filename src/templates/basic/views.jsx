import styled from 'styled-components'

const ContentWrapper = styled.div.attrs(() => ({
  className: 'basic-content-wrapper'
}))`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`

const Title = styled.h2.attrs(() => ({
  className: 'basic-content-title'
}))`
  font-size: var(--fs-title);
  font-family: var(--font-family);
  color: var(--text-color);
  line-height: var(--fs-title);
`

export {
  ContentWrapper,
  Title,
}
