import { connect } from 'react-redux'
import MessagesView from '../components/MessagesView'
import { submitMessage } from '../modules/messages'

const mapDispatchToProps = {
  submitMsg: (msg, date) => submitMessage(msg, date)
}


const mapStateToProps = (state) => ({
    msgs: state.msg 
})


export default connect(mapStateToProps, mapDispatchToProps)(MessagesView)