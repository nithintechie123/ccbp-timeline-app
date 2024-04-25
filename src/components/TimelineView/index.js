import {Component} from 'react'
import {Chrono} from 'react-chrono'

import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="timeline-view-container">
        <h3 className="my-journey-of-heading">MY JOURNEY OF</h3>
        <h1 className="ccbp-heading">CCBP 4.0</h1>
        <Chrono items={timelineItemsList} mode="VERTICAL" />
      </div>
    )
  }
}

export default TimelineView
