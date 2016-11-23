import React, { Component } from 'react'
import UserDetails from './UserDetails'
import '../UserList.css'


class UsersList extends Component {
  constructor () {
    super()
    const usernames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
    const users = []

    for (let i=0; i < usernames.length; i++) {
      users.push({
        name: usernames[i],
      })
    }


    console.log(users)
    this.state={ users }
  }

  render() {
    return (
      <div className="UserList">
      {this.state.users.map((user) => (
        <UserDetails key={user.name} name={user.name} />
      ))}
      </div>
    );
  }
}

export default UsersList
