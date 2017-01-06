import { connect } from 'react-redux'
import HomeView from '../components/HomeView'
import { submitMessage } from '../modules/messages'

const mapDispatchToProps = {
  submitMsg: (msg, date) => submitMessage(msg, date)
}


const mapStateToProps = (state) => ({
    msgs: state.msg 
})


export default connect(mapStateToProps, mapDispatchToProps)(HomeView)