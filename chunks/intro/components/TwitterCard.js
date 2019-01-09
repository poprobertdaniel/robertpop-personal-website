import React from 'react'
import { Grid, GridCell, GridInner } from 'rmwc'
import { Body2, UserProfileSmall } from './StyledComponents'
import Truncate from 'react-truncate'
import { Icon } from 'antd'

const DEFAULT_MAX_DESCRIPTION_LINES = 3

class TwitterCard extends React.PureComponent {
  render() {
    const {
      link,
      imgURL,
      author,
      name,
      date,
      description,
      retweetCount,
      favoriteCount
    } = this.props.tweet
    return (
      <div
        style={{
          borderRadius: '5px',
          border: '1px solid #324856',
          width: '100%',
          marginBottom: '50px',
          height: '200px'
        }}
      >
        <Grid>
          <GridCell phone="1" tablet="1" desktop="2">
            <UserProfileSmall src={imgURL} />
          </GridCell>
          <GridCell phone="3" tablet="7" desktop="10">
            <GridInner>
              <GridCell
                phone="3"
                tablet="7"
                desktop="9"
                style={{ marginTop: '5px', marginLeft: '10px' }}
              >
                <Body2 bold primary>
                  {name}
                </Body2>
                <div>
                  <Body2 color={'#9E9E9E'} fontSize={'13px'}>
                    @{author}
                  </Body2>
                </div>
              </GridCell>
              <GridCell phone="1" tablet="1" desktop="3">
                <Icon
                  type="twitter"
                  style={{ fontSize: '25px', color: '#00ACC1' }}
                />
              </GridCell>
            </GridInner>
          </GridCell>
          <GridCell span="12" style={{ marginTop: '-15px' }}>
            <a
              href={link}
              target={'_blank'}
              rel={'noopener'}
              style={{ textDecoration: 'none' }}
            >
              <Body2 primary>
                <Truncate
                  lines={DEFAULT_MAX_DESCRIPTION_LINES}
                  ellipsis={<span>...</span>}
                >
                  {description}
                </Truncate>
              </Body2>
            </a>
          </GridCell>
          <GridCell span="12">
            <Body2 primary>
              {date} {` `}
            </Body2>
            <Body2 primary>
              <Icon type="retweet" />
              {retweetCount} <Icon type="heart" /> {favoriteCount}{' '}
            </Body2>
          </GridCell>
        </Grid>
      </div>
    )
  }
}

export default TwitterCard
