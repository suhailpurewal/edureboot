import React, {Component} from "react";
import {Row, Col, Well, Media, Glyphicon} from 'react-bootstrap';

class StudentHome extends Component {

    render() {
        return (
            <div>
                <Row className="show-grid">
                <Col xs={12} md={8}>
                    <Well bsSize="large">
                    <Media className="pull-left"><img className="media-object" alt="#" src="http://via.placeholder.com/150x150"/></Media>
                        <a href="class"><h1>History 101</h1></a>
                        <p>Incididunt quis non minim sunt voluptate cupidatat consequat id laboris fugiat. Sunt dolore proident sit nostrud culpa sint ea pariatur voluptate elit. Consequat laborum est cillum do pariatur anim dolor voluptate nostrud dolor sit velit. Fugiat quis anim tempor magna Lorem officia velit ut dolore irure occaecat. Enim sunt velit eiusmod ipsum. Aliqua pariatur in nisi dolore tempor do deserunt pariatur duis. Esse laborum qui magna Lorem eiusmod consectetur aliquip duis nisi nostrud officia pariatur exercitation.</p>
                        <span className="scores">
                        <Glyphicon glyph="star"/> <Glyphicon glyph="star"/> <Glyphicon glyph="star"/> <Glyphicon glyph="star-empty"/> <Glyphicon glyph="star-empty"/>
                        </span>
                    </Well>
                </Col>
                </Row>
            </div>
        )
    }

}

export default StudentHome;