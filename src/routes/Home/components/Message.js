import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'
import MsgDropdown from './MsgDropdown'

const styles = {
  date: {
    "fontSize": "12px",
    "color": "#8899A6"
  }
}
class Message extends React.Component {
  constructor(props) {
    super(props)
  }
  getDate(d) {
    let dd = d.getDate()
    let mm = d.getMonth() + 1
    let yyyy = d.getFullYear()
    dd = dd < 10 ? '0' + dd : dd
    mm = mm < 10 ? '0' + mm : mm
    return dd + '/' + mm + '/' + yyyy
  }
  render() {
    const { msg, deleteMsg } = this.props
    return(
      <Item.Content>
        <Item.Meta>
          <span style={styles.date} >{this.getDate(msg.date)}</span>
          <MsgDropdown id={msg.id} deleteMsg={deleteMsg}/>
        </Item.Meta>
        <Item.Description>{msg.text}</Item.Description>
      </Item.Content>
    )
  }
}
export default Message
