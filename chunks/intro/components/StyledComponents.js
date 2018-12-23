import React from 'react'
import styled from 'styled-components'

const fontColor = '#00ACC1'

export const PostTitle = styled.h4`
  padding: 20px 0;
  color: ${fontColor};
  font-size: 26px;
`

export const PostSummary = styled.p`
  color: ${fontColor};
  font-size: 16px;
  line-height: 20px;
`

export const PostImg = styled.img`
  height: 200px;
  width: 100%;
  min-width: 200px;
`

export const PostDate = styled.p`
  font-size: 16px;
  color: ${fontColor};
  position: absolute;
  bottom: 0;
`

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  margin: 50px;
`
