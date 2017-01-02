import React, { Component }from 'react'
import { Grid, Button, Form, Item, Card} from 'semantic-ui-react'
import './HomeView.scss'

const desps = [
  'Allow miles wound place the leave had. To sitting subject no improve studied limited. Ye indulgence unreserved connection alteration appearance my an astonished. Up as seen sent make he they of. Her raising and himself pasture believe females. Fancy she stuff after aware merit small his. Charmed esteems luckily age out.',
  'No depending be convinced in unfeeling he. Excellence she unaffected and too sentiments her. Rooms he doors there ye aware in by shall. Education remainder in so cordially. His remainder and own dejection daughters sportsmen. Is easy took he shed to kind. ',
  'An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses vanity say had its. '
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
    console.log("hello there, I am submitted")
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    const items = desps.map((desp) => {
      return (
       <Item>
        <Item.Content>
          <Item.Meta>
            <span className={'date'}>01-01-2017</span>
          </Item.Meta>
          <Item.Description>{desp}</Item.Description>
        </Item.Content>
      </Item> 
      )
    })
    return(
      <Grid columns={3} centered>
        <Grid.Column>
          <Form onSubmit={this.handleSubmit}>
           <Form.TextArea name='details'  placeholder='whats happening!' rows='3' />
           <Button primary type='submit'>Submit</Button>
          </Form>
        </Grid.Column>
        <Grid.Row Centered columns= {3}>
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
export default HomeView
