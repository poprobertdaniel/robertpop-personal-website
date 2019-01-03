import React from 'react'
import { Screen } from 'react-dom-chunky'
import * as CustomComponents from '../components'

export default class MainScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state, tweets: null }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  loadCustomComponent(props) {
    const { selectedLanguage, strings } = this.state
    return props => {
      const CustomComponent = CustomComponents[props.source]
      return (
        <CustomComponent
          {...props}
          selectedLanguage={selectedLanguage}
          strings={strings}
        />
      )
    }
  }

  components() {
    return super.components().concat([])
  }
}
