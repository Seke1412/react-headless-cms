import React from 'react'
import {object} from 'prop-types'

const BasicTemplate = ({config}) => {
  return (
    <pre>
      {JSON.stringify(config, null, 2)}
    </pre>
  )
}

BasicTemplate.propTypes = {
  config: object.isRequired
}

export default BasicTemplate
