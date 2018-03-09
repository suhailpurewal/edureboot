import React from "react";
import {Row, Col, Well} from 'react-bootstrap';
import Clock from 'react-clock';
import './DateClock.css';

// const DateClock = () => 
//     <Well className="clockWell">
//         This is where a clock will be
//     </Well>

class DateClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString()
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }
    render() {
      return (
        <Well className="clockWell">
            <p className="App-clock">
            The time is {this.state.time}.
            </p>
        </Well>
      );
    }
  }

export default DateClock;