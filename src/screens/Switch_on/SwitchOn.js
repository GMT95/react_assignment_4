import React, { Component } from 'react';
import '../../App.css';

class SwitchOn extends Component {
  render() {
    return <button onClick={this.props.turnon} className="btn btn-warning mr-2">Switch On</button>
  }
}

export default SwitchOn