import { connect } from 'react-redux'
import MessagesView from '../components/MessagesView'
import { submitMessage, deleteMessage, editMessageClick, editMessageDone} from '../modules/messages'

const mapDispatchToProps = {
  submitMsg: (msg, date) => submitMessage(msg, date),
  deleteMsg: (id) => deleteMessage(id),
  editMsgClick: (id) => editMessageClick(id),
  editMsgDone: (id, newText) => editMessageDone(id, newText)
}


const mapStateToProps = (state) => ({
    msgs: state.msgs
})


export default connect(mapStateToProps, mapDispatchToProps)(MessagesView)
