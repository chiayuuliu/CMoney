import React, { useRef, useState } from 'react'
import { css } from '@emotion/react'
import HashLoader
from 'react-spinners/HashLoader'

function Spinner(props) {
  const { loading } = props
  // const override = css`
  //   position: 'absolute',
  //   top: 50%;
  //   left: 47%;
  //   transform: translate(-50%, -50%);
  //   z-index: 100;
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
