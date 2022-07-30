import styled from 'styled-components'

const Page = styled.div.attrs(() => ({
  className: 'page'
}))`
  width: 100%;
  height: auto;
  display: flex;
`

const Body = styled.section.attrs(() => ({
  className: 'page-body'
}))`
  display: flex;
  height: auto;
  min-height: calc(100vh - var(--space-8));
  flex: auto;
  flex-direction: column;
  background-color: #eee;
  justify-content: space-between;
  padding: var(--space-4) var(--space-6);
`

export {
  Page,
  Body,
}


