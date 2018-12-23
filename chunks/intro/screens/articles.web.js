import React from 'react'
import { Screen } from 'react-dom-chunky'
import Articles from '../components/Articles'
import { Row, Col } from 'antd'

export default class ArticlesScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state
    }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  get renderArticles() {
    return (
      <Row
        style={{
          paddingLeft: '40px',
          paddingRight: '40px',
          paddingTop: '10px'
        }}
      >
        <Col xl={{ span: 18, offset: 3 }} xs={{ span: 24, offset: 0 }}>
          <Articles />
        </Col>
      </Row>
    )
  }

  components() {
    return super.components().concat(this.renderArticles)
  }
}
