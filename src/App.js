import React, { Component } from 'react';
import Bulb from './screens/Bulb/Bulb'
import SwitchOn from './screens/Switch_on/SwitchOn'
import SwitchOff from './screens/Switch_off/SwitchOff'
import Break from './screens/Break/break'

import './App.css';

class App extends Component {
  constructor() {
    super();

  this.state = {
     status: "",
     broken: false
  }

  
}

  turnOn() {
    this.setState({status: "on"})
  }

  turnOff() {
    this.setState({status: ""})
  }

  breakBulb() {
    this.setState({status: "broken",broken: true})
  }

  repair() {
    this.setState({status: "",broken: false})
  }

  render() {
    const {status,broken} = this.state
    return (
     <div className="centralize">
     <h4><b>BULB using Props</b></h4>
     <Bulb status={this.state.status}/>
     {broken ?
     <div>
     <button onClick={_ => this.repair()} className="btn btn-success" style={{marginLeft: "3.7rem"}}>Repair</button>
     </div>
     :<div>
     {status ?
     <SwitchOff turnoff={_ => this.turnOff()}/>
     : <SwitchOn turnon={_ => this.turnOn()} />}
     
     <Break break={_ => this.breakBulb()}/>
     </div>
    }
    </div>
    );
  }
}


export default App;
