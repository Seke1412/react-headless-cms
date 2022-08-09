import React, {useState, useCallback} from 'react'
import {string, object} from 'prop-types'
import UI from '../../core/ui'

import {
  ContentWrapper, Title,
} from './views'

import Fields from './fields'

const DefaultLanguageId = 'en'

const BasicTemplate = ({title, serviceName, config, defaultValue}) => {
  const [currentTab, setCurrentTab] = useState(DefaultLanguageId)
  const { languages, content, actions } = config

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
          serviceName={serviceName}
          defaultValue={defaultValue}
        />
      }
    </ContentWrapper>
  )
}

BasicTemplate.propTypes = {
  title: string.isRequired,
  serviceName: string.isRequired,
  config: object.isRequired,
  defaultValue: object
}

BasicTemplate.defaultProps = {
  defaultValue: null
}

export default BasicTemplate
