import React, { Component, PropTypes } from 'react'
import AppContainer from './general/AppContainer'
import Active from './general/Active'
import { httpGET } from '../config/Api'
import { jq } from '../../vendors/vendors'

const $ = jq();

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const { active } = this.props
    this.setState(active)
  }

  componentDidMount() {
    const { request_data } = this.props
    request_data()
  }

  componentWillReceiveProps(nextProps) {
    const { active } = nextProps
    this.setState(active)
  }

  render() {
    return (
      <AppContainer>
        <Active {...this.props} />
      </AppContainer>
    )
  }
}

Demo.propTypes = {
  fetch_data: PropTypes.func.isRequired,
  request_data: PropTypes.func.isRequired,
}

export default Demo
