import { connect } from 'react-redux'
import MessagesView from '../components/MessagesView'
import { submitMessage, deleteMessage } from '../modules/messages'

const mapDispatchToProps = {
  submitMsg: (msg, date) => submitMessage(msg, date),
  deleteMsg: (id) => deleteMessage(id)
}


const mapStateToProps = (state) => ({
    msgs: state.msgs
})


export default connect(mapStateToProps, mapDispatchToProps)(MessagesView)