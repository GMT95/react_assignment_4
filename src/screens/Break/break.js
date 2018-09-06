import React, { Component } from 'react';
import '../../App.css';

class Break extends Component {
  render() {
    return (
      <button onClick={this.props.break} className="btn btn-danger">Break</button>
    );
  }
}

export default Break;

