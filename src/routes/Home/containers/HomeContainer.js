import { connect } from 'react-redux'
import HomeView from '../components/HomeView'
import submitMessage from '../modules/messages'
const mapDispatchToProps = {
  submitMsg: function() {
    return {
      type: 'SUBMIT_MESSAGE',
      date: '12',
      msg: 'diudiu'
    }
  }
}

const mapStateToProps = (state) => ({
    msg: state.msg 
})


export default connect(mapStateToProps, mapDispatchToProps)(HomeView)