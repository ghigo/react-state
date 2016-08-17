/**
 * React component consisting in an input representing a US State.
 * It validates the state and invokes props.onValue when the input is validated
 */

import React, { Component } from 'react'
import states from './states.js'

export default class State extends Component {
  constructor () {
    super()

    this.state = {
      state: '',
      valid: true
    }

    this.format = this.format.bind(this)
  }

  format (event) {
    const value = event.target.value.toUpperCase()
    const validValue = states.validate(value)

    this.setState({
      state: value,
      valid: value.length > 1 && validValue
    })

    if (this.props && this.props.onValue && validValue) {
      this.props.onValue(value)
    }
  }

  render () {
    return (
      <input
        type='text'
        pattern='[A-Za-z]{2}'
        maxLength="2"
        value={this.state.state}
        onChange={this.format} />
    )
  }
}

State.propTypes = {
  onValue: React.PropTypes.func // Callback invoked when the input validates
}
