import React from 'react'
import { Form } from 'semantic-ui-react'

class EditMessageView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.text
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }
  handleKeyDown(e) {
    if (e.which === 13){
      console.log("finished editing msg")
    }
  }
  render() {
    return (
      <div>
        <Form>
          <Form.TextArea name='edit' rows='3'
            value={this.state.text}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown} />
        </Form>
      </div>
    )
  }
}

export default EditMessageView
