import React from 'react'
import '../Loading.css'

function Loading () {
  return (
    <div className="Loading">
      Loading...
      <div>
        <i className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
      </div>
    </div>
  )
}

export default Loading
