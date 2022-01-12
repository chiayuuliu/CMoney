import React, { useRef, useState } from 'react'
import HashLoader
from 'react-spinners/HashLoader'

function Spinner(props) {
  const { loading } = props

  const override = {
    position: 'absolute',
    top: '30%',
    left: '48%',
    paddingRight: '0!important',
    paddingLeft: '0!important',
    zIndex: '100',
  }

  return (
      <HashLoader
        loading={loading}
        color= '#4A90E2'
        css={override}
        size={50}
      />
  )
}

export default Spinner
