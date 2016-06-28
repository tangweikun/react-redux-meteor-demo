import { connect } from 'react-redux'
import { change } from '../actions'
import App from '../components/'

mapStateToProps = (state) => {
  const {value} = state
  return {
    value,
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    change: (value) => dispatch(change(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
