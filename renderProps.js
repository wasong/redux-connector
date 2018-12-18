import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Connector extends Component {
  render() {
    const { children, state, actions } = this.props
    return children({ ...state, actions })
  }
}

Connector.propTypes = {
  children: PropTypes.func,
}

Connector.defaultProps = {
  children: () => {},
}

const createConnector = (actions) => {
  const mapStateToProps = state => state
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })

  return connect(mapStateToProps, mapDispatchToProps)(Connector)
}
