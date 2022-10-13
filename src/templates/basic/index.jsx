import React, {useState, useCallback} from 'react'
import {bool, string, object} from 'prop-types'
import {useNavigate} from 'react-router-dom'
import UI from '../../core/ui'
import Modal from '../../core/ui/modals'
import {BackIcon} from '../../svg'

import {
  ContentWrapper, Title, BackWrapper, BackText, PreviewImage,
} from './views'

import Fields from './fields'

const DefaultLanguageId = 'en'

const BasicTemplate = ({hasBackButton, title, serviceName, config, defaultValue}) => {
  const navigate = useNavigate()
  const [currentTab, setCurrentTab] = useState(DefaultLanguageId)
  const [previewImgSrc, setPreviewImgSrc] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { languages, content, actions } = config

  const onTabChange = useCallback(({id}) => {
    setCurrentTab(id)
  }, [setCurrentTab])

  const onImageClick = useCallback((uri) => {
    setPreviewImgSrc(uri);
    setIsModalOpen(true);
  }, []);

  const shouldRenderContent = Array.isArray(content) && content.length > 0

  return (
    <>
      <ContentWrapper>
        <Title>
          {title}
        </Title>
        {hasBackButton && 
          <BackWrapper onClick={() => navigate(-1)}>
            <BackIcon customStyle={{width: 'var(--fs-default)'}}/>
            <BackText>Back</BackText>
          </BackWrapper>
        }
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
            onImageClick={onImageClick}
          />
        }
      </ContentWrapper>
      <Modal 
        isOpen={isModalOpen}
        onCloseClick={() => setIsModalOpen(false)}
      >
        <PreviewImage src={previewImgSrc}/>
      </Modal>
    </>
  )
}

BasicTemplate.propTypes = {
  title: string.isRequired,
  serviceName: string.isRequired,
  config: object.isRequired,
  defaultValue: object,
  hasBackButton: bool,
}

BasicTemplate.defaultProps = {
  defaultValue: null,
  hasBackButton: true,
}

export default BasicTemplate
