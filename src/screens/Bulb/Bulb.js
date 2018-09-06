import React, { Component } from 'react';
import '../../App.css';
import bulb from '../../assets/bulb.jpg'
import bulbOn from '../../assets/bulb_on.jpg'
import bulbBroken from '../../assets/broken_bulb.jpg'


class Bulb extends Component {
  constructor(props) {
    super(props)

    console.log(this.props.status)
  }

  checkBulbStatus() {
    const {status} = this.props;
    console.log('Inside checkBulbStatus function',status);
    
    if(status === "on") {
      return bulbOn;
    }
    else if(status === "broken") {
      return bulbBroken;
    }
    else 
      return bulb;
  }

  render() {
    
    return (
      <img src={this.checkBulbStatus()}
        alt="Bulb"
        height="200px"
        width="200px"
        className="mb-4"
      />
    );
  }
}

export default Bulb;