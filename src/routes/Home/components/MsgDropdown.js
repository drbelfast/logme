import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const MsgDropdown = (props) => {
  const styles = {
    dropdown: {
      "float": "right"
    }
  }
  const { id, deleteMsg } = props
  return (
    <Dropdown style={styles.dropdown}>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => deleteMsg(id)}>Delete</Dropdown.Item>
        <Dropdown.Item>foo</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default MsgDropdown