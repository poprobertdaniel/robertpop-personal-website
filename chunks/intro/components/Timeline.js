import React, { PureComponent } from 'react'
import { Timeline, Icon, Button } from 'antd'
import { Typography } from '@rmwc/typography'

export default class TimelineComponent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      hovered: false
    }
  }

  renderMilestone(item) {
    const {
      doneColor,
      progressColor,
      todoColor,
      doneIcon,
      progressIcon,
      todoIcon
    } = this.props
    let iconColor, iconType

    switch (item.status) {
      case 'done':
        iconColor = doneColor
        iconType = doneIcon
        break
      case 'progress':
        iconColor = progressColor
        iconType = progressIcon
        break
      case 'todo':
        iconColor = todoColor
        iconType = todoIcon
        break
      default:
        break
    }

    const strikeStyle = item.status === 'done' ? 'line-through' : '',
      opacity = item.status === 'todo' ? 0.5 : 1,
      backgroundColor = item.status === 'progress' ? '#00ACC1' : '',
      color = item.status === 'progress' ? '#fff' : '#424242'

    return (
      <Timeline.Item
        dot={
          <Icon
            type={iconType}
            style={{ fontSize: '20px', color: iconColor }}
          />
        }
      >
        <div
          style={{
            boxShadow: 'rgba(224,224,224,1) 0px 5px 20px 0px',
            display: 'flex',
            alignItems: 'center',
            padding: '15px',
            opacity,
            backgroundColor
          }}
        >
          <Typography
            use="headline5"
            style={{
              paddingRight: '5px',
              paddingLeft: '5px',
              textDecoration: strikeStyle,
              color
            }}
          >
            {item.title}
          </Typography>
        </div>
      </Timeline.Item>
    )
  }

  renderTimeline() {
    if (!this.props.milestones) {
      return
    }

    return (
      <Timeline mode="alternate">
        {this.props.milestones.map(milestone =>
          this.renderMilestone(milestone)
        )}
      </Timeline>
    )
  }

  render() {
    return (
      <div
        style={{
          color: this.props.textColor,
          backgroundColor: this.props.backgroundColor
        }}
      >
        {this.renderTimeline()}
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <Button
            style={{
              backgroundColor: '#00ACC1',
              borderColor: '#00ACC1',
              width: '40%',
              marginBottom: this.props.isSmallScreen ? '30px' : ''
            }}
            type="primary"
            onClick={this.props.goToLink}
            onMouseEnter={() => {
              this.setState({ hovered: true })
            }}
            onMouseLeave={() => {
              this.setState({ hovered: false })
            }}
          >
            About me
            <Icon
              type="smile"
              spin={true}
              style={{ marginLeft: this.state.hovered ? '30px' : '5px' }}
            />
          </Button>
        </div>
      </div>
    )
  }
}
