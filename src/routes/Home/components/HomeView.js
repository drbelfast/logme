import React, { Component } from 'react'
import { Grid, Button, Form, Item, Card} from 'semantic-ui-react'
import MessagesView from './MessagesView'
import './HomeView.scss'

const desps = [
  'this is content 1',
  'this is content 2',
  'this is content 3'
]
class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    } 
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    var date = new Date()
    var msg = event.target.value
    console.log("hitting handlesubmit")
    this.props.submitMsg(msg, date)
    
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    const items = desps.map((desp, index) => {
      return (
       <Item key={index}>
        <Item.Content>
          <Item.Meta>
            <span className={'date'}>01-01-2017</span>
          </Item.Meta>
          <Item.Description>{desp}</Item.Description>
        </Item.Content>
      </Item> 
      )
    })

    const { msg } = this.props
    return(
      <Grid columns={3} centered>
        <Grid.Column>
          <Form onSubmit={this.handleSubmit}>
          <Form.TextArea name='details'  placeholder='whats happening!' rows='3' />
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
       
        <MessagesView />
      </Grid>
    )
  }
}
export default HomeView
