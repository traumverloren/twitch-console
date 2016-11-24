import React, { Component } from 'react'
import ChannelDetails from './ChannelDetails'
import '../ChannelList.css'
import jsonp from 'jsonp-promise'

const channelsList = ["ESL_SC2", "futuremangaming", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "noobs2ninjas", "comster404"]

// Get detailed streaming info for each channel.
// needed to use jsonp to be able to access twitch api with CORS blockout.
export async function getChannelInfo (channel) {
  try {
    const result = await jsonp(`https://wind-bow.hyperdev.space/twitch-api/streams/${channel}`).promise;
    const channelResult = await jsonp(`https://wind-bow.hyperdev.space/twitch-api/channels/${channel}`).promise;
    result.name = channel
    // Not proud of this.... :-(
    // Definitely not the best way to handle if a user's account is unexistent.
    if (result.error === "Not Found") {
      result.stream = null
      result.closedAccount = true
      result.logo = null
    } else {
      result.closedAccount = false
      result.logo = channelResult.logo
    }
    return result
  } catch (error) {
    console.warn('Error in getResults', error)
  }
}

// Map over array of channel names and do an API call for EACH to twitch.
// Once get that info back, return that user data for each user.
export async function getChannels (channels) {
  try {
    const info = await Promise.all(channels.map((channel) => getChannelInfo(channel)))
    return info.map((channel) => channel)
  } catch (error) {
      console.warn('Error in getChannels', error)
    }
}

class ChannelList extends Component {
  constructor () {
    super()
    this.state={ channelsInfo: [], isLoading: true }
  }

  async componentDidMount () {
    try {
      const searchResults = await getChannels(channelsList)
      this.setState({channelsInfo: searchResults, isLoading: false})
    } catch (error) {
      console.warn('Error in componentDidMount', error)
    }
}

  handleClick = (name) => {
    window.open(`https://twitch.tv/${name}`)
  }

  render() {
    return (
      <div className="ChannelList">
        {this.state.channelsInfo.map((channel) => (
          <ChannelDetails
              key={channel.name}
              name={channel.name}
              closedAccount={channel.closedAccount}
              isStreaming={channel.stream !== null}
              currentStream={channel.stream !== null ? `${channel.stream.game}: ${channel.stream.channel.status}` : 'offline' }
              logo={channel.logo}
              onClick={() => this.handleClick(channel.name) }/>
        ))}
      </div>
    )
  }
}

export default ChannelList
