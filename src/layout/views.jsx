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
  min-height: 100vh;
  flex: auto;
  flex-direction: column;
  background-color: #eee;
  justify-content: space-between;
  padding: 0px;
`

export {
  Page,
  Body,
}


