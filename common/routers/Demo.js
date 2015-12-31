import React , { Component }from 'react'
import { Provider } from 'react-redux'
import Demo from '../containers/Demo'
import configureStore  from '../store/configureStore'

const store = configureStore();

class RouteDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      store:{},
    }
  }

  componentDidMount() {
    this.state = {store:store}
    //console.log({...store});
  }

  render() {
    return (
      <Provider store={store}>
        <Demo />
      </Provider>
    )
  }
}

export default RouteDemo
