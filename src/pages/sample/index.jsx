import React, { useCallback, useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

import Layout from '../../layout'
import Table from '../../core/ui/table'
import Button from '../../core/ui/button'
import Modal from '../../core/ui/modals';

import {WebServiceUrl} from '../../core/enums/constants'

import {
  ContentWrapper, Title,
  Content, ActionWrapper, ActionButton, TableHead,
  ModalContent, ModalMessage, ModalActions,
} from './views'


const Actions = ['edit', 'delete', 'view']
const TableStyle = {
  'background-color': 'white',
  width: '100%',
  height: 'auto',
}

const ButtonStyle = {
  'margin-bottom': 'var(--space-4)',
  'align-self': 'flex-end'
}

const SampleList = () => {
  const [samples, setSamples] = useState([])
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedSample, setSelectSample] = useState();
  const navigate = useNavigate()

  const onActionClick = useCallback((e, action) => {
    e.target.action = action
  }, [])

  const Columns = [
    {
      title: <TableHead>Title</TableHead>,
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: <TableHead> Content </TableHead>,
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: <TableHead>Photo Urls</TableHead>,
      dataIndex: 'photo',
      key: 'photo',
    },
    {
      title: <TableHead>Actions</TableHead>,
      dataIndex: 'actions',
      key: 'actions',
      /*eslint-disable react/no-multi-comp*/
      render: () => (
        <ActionWrapper>
          {Actions?.map( action => (
            <ActionButton
              key={action}
              onClick={(e) => onActionClick(e, action)}
            >
              {action}
            </ActionButton>
          ))}
        </ActionWrapper>
      )
      /*eslint-enable*/
    },
  ]

  const onRowClick = useCallback((e, row) => {
    const action = e.target.action
    if (Actions.includes(action)) {
      switch(action) {
        case 'edit':
          navigate('edit/' + row.id)
          return;
        case 'delete':
          setSelectSample(row);
          setIsVisible(true);
          break;
      }
    }
  }, [navigate])

  const onDeleteSample = async () => {
    if (loading) return;

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    }
    const url = WebServiceUrl + 'sample/' + selectedSample.id
    try {
      setLoading(true);
      const res = await axios.delete(url, requestOptions);
      const { status } = res;
      if (status === 200) {
        
      }
      console.log(res);
      setIsVisible(false);
    } catch(e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let isCancel = false
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }
      const url = WebServiceUrl + 'samples'
      const res = await axios.get(url, requestOptions)
      if (!isCancel) {
        setSamples(res.data)
      }
    }

    fetchData();

    return () => {
      isCancel = true
    }
  }, [])

  return (
    <Layout>
      <ContentWrapper>
        <Title>
          Samples
        </Title>
        <Content>
          <Link 
            to="create"
            style={{display: 'flex', alignSelf: 'flex-end'}}
          >
            <Button
              className="create-button"
              label="Create"
              customStyle={ButtonStyle}
            />
          </Link>
          <Table
            showTableBorder
            customStyle={TableStyle}
            columns={Columns}
            dataSource={samples}
            onRowClick={onRowClick}
          />
        </Content>
      </ContentWrapper>
      <Modal
        isOpen={isVisible}
        onCloseClick={() => setIsVisible(false)}
      >
        <ModalContent>
          <ModalMessage>Are you sure want to delete: <b>{selectedSample?.title}</b>?</ModalMessage>
          <ModalActions>
            <Button
              className="cancel-button"
              buttonType="cancel"
              onClick={() => setIsVisible(false)}
              label="Cancel"
            />
            <Button
              className="confirm-button"
              onClick={onDeleteSample}
              label="Confirm"
            />
          </ModalActions>
        </ModalContent>
      </Modal>
    </Layout>
  )
}

export default SampleList
