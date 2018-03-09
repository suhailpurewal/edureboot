import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Row, Col} from 'react-bootstrap';
import './style.css';

const Sidebar = ({ matchedPath }) => (
    <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
      <div className="sidebar-nav navbar-collapse collapse">
        <ul className="nav in" id="side-menu">
          <li>
              <h3>Welcome</h3>
            </li>
        </ul>
      </div>
    </div>
 );

 class TeacherHomePage extends Component {
    constructor (props) {
        super(props)
        this.state = {
          
        }
      }
     
    render() {
        return (
            <div>
                <Row>
                    <Col xs={6} md={2}>
                        <Sidebar/> 
                    </Col>
                    <Row>
                        <Col xs={6} md={8}>
                            <h1>MOTHER FUCKER</h1>
                        </Col>
                        <Col xs={6} md={4}>
                        
                        </Col>
                    </Row>
                </Row>
            </div>
        )
    }

}

export default TeacherHomePage;