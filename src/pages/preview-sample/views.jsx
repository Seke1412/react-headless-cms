import styled from 'styled-components'

const PreviewWrapper = styled.div.attrs(() => ({
  className: 'preview-wrapper'
}))`
  width: 100%;
  max-width: var(--responsive-point);
  height: auto;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
`

const ArticleTitle = styled.h1.attrs(() => ({
  className: 'preview-title'
}))`
  width: 100%;
  height: auto;
  margin: var(--space-8) auto;
  padding: 0px;
  display: block;
  text-align: center;
  font-family: var(--font-family);
  font-size: var(--fs-title);
  color: var(--primary);
`

const ArticleContent = styled.p.attrs(() => ({
  className: 'preview-title'
}))`
  width: 100%;
  height: auto;
  margin: var(--space-8) auto;
  padding: 0px;
  display: block;

  text-align: center;

  font-family: var(--font-family);
  font-size: var(--fs-default);
  color: var(--primary);
`

const ImageWrapper = styled.div.attrs(() => ({
  className: 'image-wrapper'
}))`
  display: flex;
  flex-direction: row;
  gap: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
`

const Image = styled.img.attrs(() => ({
  className: 'image'
}))`
  display: flex;
  width: 100%;
  max-width: var(--max-mobile-width);
  height: auto;
  margin: 0px;
  padding: 0px;
`

export {
  PreviewWrapper,
  ArticleTitle,
  ArticleContent,
  ImageWrapper,
  Image,
}
