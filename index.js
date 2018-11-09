import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/**
 * @param {React Node} Component React Component that will accept state
 * @param {function} queryState receives redux state and returns desired state
 * @param {object} actions actions to be passed to bindActionCreators
 */

const createConnector = (Component, queryState = state => ({}), actions = {}) => {
  const mapStateToProps = state => queryState(state)

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  })

  return connect(mapStateToProps, mapDispatchToProps)(Component)
}

export default createConnector
