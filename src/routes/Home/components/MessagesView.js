import React, { Component } from 'react'
import { Grid, Button, Form, Item, Card } from 'semantic-ui-react'
import Message from './Message'

class MessagesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    var date = new Date()
    var text = this.state.text
    this.setState({
      text: ''
    })
    this.props.submitMsg(text, date)

  }
  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }
  handleKeyDown(e) {
    if (e.which === 13) {
      this.handleSubmit(e)
    }
  }
  render() {
    let items
    if (this.props.msgs.length > 0) {
      items = this.props.msgs.map((msg, index) => {
        return (
           <Item key={index}>
            <Message msg={msg} deleteMsg={this.props.deleteMsg}/>
           </Item>
        )
      })
    }
    else {
      items = (
        <h1> nothing is here</h1>
      )
    }
    const { msg } = this.props
    return (
      <Grid columns={2} centered>
        <Grid.Column>
          <Form onSubmit={this.handleSubmit}>
            <Form.TextArea name='details' placeholder='whats happening!' rows='3'
              value={this.state.text}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown} />
            <Button primary type='submit'>Submit</Button>
          </Form>
        </Grid.Column>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            <div>
              <Item.Group divided>
                {items}
              </Item.Group>
            </div>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
}
export default MessagesView