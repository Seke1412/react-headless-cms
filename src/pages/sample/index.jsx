import React, { useCallback, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Layout from '../../layout'
import Table from '../../core/ui/table'
import Button from '../../core/ui/button'

import {
  ContentWrapper, Title,
  Content, ActionWrapper, ActionButton, TableHead
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
  const baseUrl = 'http://localhost:8080/'
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

  useEffect(() => {
    let isCancel = false
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      }
      const url = baseUrl + 'samples'
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
            onRowClick={(e, row) => console.log(e.target.action, row)}
          />
        </Content>
      </ContentWrapper>
    </Layout>
  )
}

export default SampleList
