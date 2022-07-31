import React, {useState, useCallback} from 'react'
import {object} from 'prop-types'
import Tabs from '../../core/ui/tabs'
import {
  ContentWrapper, Title,
} from './views'

const DefaultLanguageId = 'en'

const BasicTemplate = ({config}) => {
  const [currentTab, setCurrentTab] = useState(DefaultLanguageId)
  const { title, languages, content, actions } = config
  console.log(content)
  console.log(actions)
  const onTabChange = useCallback(({id}) => {
    setCurrentTab(id)
  }, [setCurrentTab])

  return (
    <ContentWrapper>
      <Title>
        {title}
      </Title>
      <Tabs
        align='right'
        activeTab={currentTab}
        onTabChange={onTabChange}
        tabs={languages}
      />
    </ContentWrapper>
  )
}

BasicTemplate.propTypes = {
  config: object.isRequired
}

export default BasicTemplate
