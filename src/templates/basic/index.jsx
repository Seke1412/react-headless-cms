import React, {useState, useCallback} from 'react'
import {object} from 'prop-types'
import UI from '../../core/ui'

import {
  ContentWrapper, Title,
} from './views'

import Fields from './fields'

const DefaultLanguageId = 'en'

const BasicTemplate = ({config}) => {
  const [currentTab, setCurrentTab] = useState(DefaultLanguageId)
  const { title, languages, content, actions } = config

  const onTabChange = useCallback(({id}) => {
    setCurrentTab(id)
  }, [setCurrentTab])

  const shouldRenderContent = Array.isArray(content) && content.length > 0

  return (
    <ContentWrapper>
      <Title>
        {title}
      </Title>
      <UI.Tabs
        align='right'
        activeTab={currentTab}
        onTabChange={onTabChange}
        tabs={languages}
      />
      {shouldRenderContent &&
        <Fields 
          currentLanguageId={currentTab} 
          content={content}
          actions={actions}
        />
      }
    </ContentWrapper>
  )
}

BasicTemplate.propTypes = {
  config: object.isRequired
}

export default BasicTemplate
