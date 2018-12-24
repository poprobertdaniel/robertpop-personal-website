import React from 'react'
import { Screen } from 'react-dom-chunky'

export default class MainScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state, tweets: null }
  }

  componentDidMount() {
    super.componentDidMount()
    fetch('https://twitter-nodejs-kxlmyxwouc.now.sh/timeline?user_id=robipop22')
      .then(response => response.json())
      .then(resp => {
        const { tweets } = resp
        this.setState({ tweets })
      })
      .catch(err => console.log('err', err))
  }

  components() {
    return super.components().concat([])
  }
}
