import React, { PropTypes } from 'react'
import '../UserDetails.css'

function UserDetails ({name}) {
  return (
    <div className="UserDetails">
      <p>{name}</p>
    </div>
  )
}

UserDetails.PropTypes = {
  name: PropTypes.string.isRequired,
}

export default UserDetails
