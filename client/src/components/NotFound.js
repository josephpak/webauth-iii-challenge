import React from 'react'
import dennis from './assets/magic-word.gif'
import styled from "styled-components";

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;

  img {
    max-height: 300px;
  }
`

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <img src={dennis}/>
    </NotFoundWrapper>
  )
}
