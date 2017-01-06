import React, { Component } from 'react'
import { Grid, Button, Form, Item, Card} from 'semantic-ui-react'

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
    var msg = this.state.msg
    this.setState({
      msg: ''
    })
    this.props.submitMsg(msg, date)
    
  }
  handleChange(event) {
    this.setState({
      msg: event.target.value
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
      items = this.props.msgs.map((item, index) => {
        return (
        <Item key={index}>
          <Item.Content>
            <Item.Meta>
              <span className={'date'}>{item.date.getTime()}</span>
            </Item.Meta>
            <Item.Description>{item.msg}</Item.Description>
          </Item.Content>
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
    return(
      <Grid columns={3} centered>
        <Grid.Column>
          <Form onSubmit={this.handleSubmit}>
          <Form.TextArea name='details'  placeholder='whats happening!' rows='3'
             value={this.state.msg}
             onChange={this.handleChange} 
             onKeyDown={this.handleKeyDown}/>
          <Button primary type='submit'>Submit</Button>
          </Form>
        </Grid.Column>
        <Grid.Row centered columns= {3}>
          <Grid.Column>
            <div>
              <Item.Group divided>
                { items }
              </Item.Group>
            </div>
          </Grid.Column>
        </Grid.Row>
       
      </Grid>
    )
  }
}
export default MessagesView