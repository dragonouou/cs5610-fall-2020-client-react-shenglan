import React from "react";
import {Card, Col} from "react-bootstrap"
import "../styling/CourseCardComponent.css"
import sample from "./sample.png"
import "../styling/CourseCardComponent.css"

export default class CourseCardComponent extends React.Component{
    state ={
        editing:false,
        course:this.props.course
    }

    render(){
        return (
            <Col className="wbdv-grid-col" xs={12} sm={6} md={4} lg={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={sample} />
                    <Card.Body>
                        <Card.Title>{this.props.course.title}
                            <i className="fa fa-pencil float-right" aria-hidden="true"
                               onClick={() => this.setState({editing: true})}></i>
                            <i className="fa fa-times float-right wbdv-cross" aria-hidden="true"
                               onClick={() => this.props.deleteCourse(this.props.course)}></i>
                        </Card.Title>
                        <Card.Text>
                            <i className="fa fa-file-text-o wbdv-row wbdv-icon" aria-hidden="true"></i>
                            {`Modified:   ${this.props.course.modified}`}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
};
