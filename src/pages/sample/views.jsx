import styled from 'styled-components'

const ContentWrapper = styled.div.attrs(() => ({
  className: 'content-wrapper'
}))`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`

const Title = styled.h2.attrs(() => ({
  className: 'content-title'
}))`
  font-size: var(--fs-title);
  font-family: var(--font-family);
  line-height: var(--title-min-height);

  background-color: white;
  color: var(--text-color);
  
  box-sizing: border-box;
  height: auto;
  min-height: var(--title-min-height);
  padding-left: var(--space-4);

  border-bottom: 1px solid var(--border-color);
`

const Content = styled.div.attrs(() => ({
  className: 'content'
}))`
  margin: var(--space-8) 0px;
  padding: 0px var(--space-4);
  background-color: white;

`

export {
  ContentWrapper,
  Title,
  Content,
}
