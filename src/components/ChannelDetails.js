import React, { PropTypes } from 'react'
import '../ChannelDetails.css'
import sad_mac from '../images/sad_mac.png';

function ChannelDetails ({name, logo, isStreaming, closedAccount, currentStream, onClick }) {
  if (closedAccount) {
    currentStream = "Sorry, no such user!"
  }

  return (
    <div className="ChannelDetailsContainer" onClick={onClick} >
      <img className="Channel-Logo" src={logo || sad_mac} alt="Channel Logo"/>
      <div className="Channel-Description">
        <div className="Channel-Title">{name}</div>
        <div className={"Channel-Stream " + (isStreaming ? '' : 'offline')}>{currentStream}</div>
      </div>
    </div>
  )
}

ChannelDetails.PropTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  isStreaming: PropTypes.bool.isRequired,
  closedAccount: PropTypes.bool.isRequired,
  currentStream: PropTypes.string
}

export default ChannelDetails
