import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Card } from 'antd'
import Companies from '../data/companies'
import TimelineComponent from '../components/Timeline'

export default class HistoryScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  renderTimeline() {
    return (
      <TimelineComponent
        isSmallScreen={this.isSmallScreen}
        milestones={Companies.milestones}
        doneColor={Companies.doneColor}
        progressColor={Companies.progressColor}
        todoColor={Companies.todoColor}
        doneIcon={Companies.doneIcon}
        progressIcon={Companies.progressIcon}
        todoIcon={Companies.todoIcon}
      />
    )
  }

  get renderHistory() {
    const width = this.isSmallScreen ? '95vw' : '800px'
    const padding = this.isSmallScreen ? '2px' : '30px'
    return (
      <div style={{ display: 'flex', marginBottom: '30px' }}>
        <Card
          title={`Companies I've worked with`}
          style={{ width, margin: '10px', padding }}
        >
          {this.renderTimeline()}
        </Card>
      </div>
    )
  }

  components() {
    return super.components().concat(this.renderHistory)
  }
}
