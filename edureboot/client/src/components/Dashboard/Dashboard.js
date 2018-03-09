import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import DateClock from './dcomponents/DateClock';
import Notepad from './dcomponents/Notepad'
import ClassInfo from './dcomponents/ClassInfo'
import './Dashboard.css';
import './dcomponents/style.less';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
      }

   

    render() {
   

        return (
            <div>
                <Row className="dashboardRow">
                    <Col xs={6} md={8}>
                        <ClassInfo />
                    </Col>
                    <Col xs={6} md={4}>
                        <DateClock/>
                    </Col>

                </Row>
                <hr/>
                <Row className="dashboardRow">
                
                    <Notepad/>
                </Row>
            </div>
        );
    }

}

export default Dashboard;