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
  background-color: transparent;
  display: flex;
  flex-direction: column;
`

const TableHead = styled.h4.attrs(() => ({
  className: 'table-head'
}))`
  font-family: var(--font-family);
  font-size: var(--fs-default);
  color: var(--primary);
  background-color: var(--secondary);
  padding: var(--space-2) var(--space-4);
  text-align: left;
`

const ActionButton = styled.span.attrs(() => ({
  className: 'action-button'
}))`
  display: flex;
  flex: 0 0 auto;
  padding: var(--space-2) var(--space-4);
  border: 1px solid var(--primary-variant-1);
  box-sizing: border-box;
  color: var(--primary-variant-1);
  font-weight: bolder;
  transition: all 0.3s ease-out;
  border-radius: var(--border-radius);
  &:hover {
    transition: all 0.3s ease-out;
    background-color: var(--primary-variant-1);
    color: white;
  }
`

const ActionWrapper = styled.span.attrs(() => ({
  className: 'action-wrapper'
}))`
  display: flex;
  width: auto;
  max-width: var(--max-mobile-width);
  flex-wrap: wrap;
  gap: var(--space-2);
`

export {
  ContentWrapper,
  Title,
  Content,
  TableHead,
  ActionButton,
  ActionWrapper,
}
