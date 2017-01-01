import React, { Component }from 'react'
import { Grid, Button, Form, } from 'semantic-ui-react'
import './HomeView.scss'

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
    console.log("hello there, I am submitted")
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return(
      <Grid columns={2} centered>
        <Grid.Column>
          <Form onSubmit={this.handleSubmit}>
           <Form.TextArea name='details' label='Details' placeholder='whats happening!' rows='3' />
           <Button primary type='submit'>Submit</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}
export default HomeView
