import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Demo from '../Components/Demo'
import * as ActiveActions from '../actions/active'

function mapStateToProps(state) {
  return {
    active: state.active
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActiveActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo)
