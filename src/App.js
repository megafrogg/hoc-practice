import React, { Component } from 'react'
import { CardHOC } from './hoc/CardHOC'
import { UserInfo } from './components/UserInfo'
import { ListItemHOC } from './hoc/ListItemHOC'

const UserCard = CardHOC(UserInfo)
const UserListItem = ListItemHOC(UserInfo)

class App extends Component {

  state = {userList: [
    {
      name: 'Janet',
      userid: 1,
      userinfo: "She's the severe head of HR"
    },
    {
      name: 'Timothy',
      userid: 2,
      userinfo: "He's the quiet IT guy with a heart of gold"
    },
    {
      name:'Phil',
      userid: 3,
      userinfo: "He's the douchebag CEO"
    }
  ]}

  render() {
    return (
      <div className="App">
        <div>
          <h1>Users as Cards</h1>
          {this.state.userList.map(user => <UserCard {...user} />)}
        </div>
        <div>
          <h1>Users as List Item</h1>
          <ul>
            {this.state.userList.map(user => <UserListItem {...user} />)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
