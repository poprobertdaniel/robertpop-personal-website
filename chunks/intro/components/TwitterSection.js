import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import TwitterCard from './TwitterCard'
import { Row, Col, Spin } from 'antd'

class TwitterSection extends Component {
  constructor(props) {
    super(props)
    this.state = { ...super.state }
  }

  componentDidMount() {
    super.componentDidMount()
    fetch(this.props.twitterURL)
      .then(response => response.json())
      .then(resp => {
        const { tweets } = resp
        this.setState({ tweets })
      })
      .catch(err => console.log('err', err))
  }

  renderComponent() {
    const { tweets } = this.state
    const { text, textStyle } = this.props

    return (
      <Row gutter={24} style={{ paddingLeft: '30px', paddingRight: '30px' }}>
        <Components.Text source={text} style={textStyle} />

        {tweets ? (
          tweets.map(tweet => (
            <Col
              xl={{ span: 8 }}
              xs={{ span: 24 }}
              lg={{ span: 8 }}
              sm={{ span: 12 }}
              xxl={{ span: 6 }}
            >
              <TwitterCard tweet={tweet} />
            </Col>
          ))
        ) : (
          <Col span={24}>
            <Spin
              size={'large'}
              style={{ margin: '0 auto' }}
              tip="Fetching tweets"
            />
          </Col>
        )}
      </Row>
    )
  }
}

export default TwitterSection
