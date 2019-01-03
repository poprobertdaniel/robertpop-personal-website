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

export const TwitterSectionContainer = styled.div`
  max-width: 1340px;
  margin-left: auto;
  margin-right: auto;
  padding: 100px 50px;
  @media (max-width: 840px) {
    padding-right: 20px;
    padding-left: 20px;
  }
  @media (max-width: 576px) {
    padding: 50px 10px;
  }
`
export const Body2 = styled.p`
  display: inline;
  color: ${props =>
    props.primary
      ? '#324856'
      : props.secondary
      ? '#4A746A'
      : props.color
      ? props.color
      : '#FFFFFF'};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: ${props =>
    props.bold ? 'bold' : props.light ? '300' : 'inherit'};
  text-decoration: ${props => (props.link ? 'underline' : 'inherit')};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'inherit')};
  letter-spacing: 0.13px;
  line-height: 19px;
`
export const UserProfileSmall = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
