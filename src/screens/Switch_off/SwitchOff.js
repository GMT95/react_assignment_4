import React, { Component } from 'react';
import '../../App.css';

class SwitchOff extends Component {
  render() {
    return <button onClick={this.props.turnoff} className="btn btn-dark mr-2">Switch Off</button>
  }
}

export default SwitchOff