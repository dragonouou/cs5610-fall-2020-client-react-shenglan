import React from "react";
import {Card, Col} from "react-bootstrap"
import "../styling/CourseCardComponent.css"
import sample from "./sample.png"
import "../styling/CourseCardComponent.css"
import {Link} from "react-router-dom";

export default class CourseCardComponent extends React.Component{
    state ={
        editing:false,
        course:this.props.course
    }

    render(){
        return (
            <Col className="wbdv-grid-col" xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={sample} />
                    <Card.Body>
                        <Card.Title>
                            {
                                this.state.editing &&
                                <input onChange = {(e) =>{
                                    const newTitle = e.target.value
                                    this.setState(prevState => ({
                                        course:{...prevState.course, title:newTitle}
                                    }))
                                }}
                                       value={this.state.course.title}/>
                            }
                            {
                                !this.state.editing &&
                                <Link to={`/edit/course/${this.props.course._id}`}>{this.props.course.title}</Link>
                            }
                            {
                                this.state.editing &&
                                <i className="fa fa-check-square-o float-right" aria-hidden="true" onClick={()=> {
                                    this.setState({editing: false})
                                    this.props.updateEventHandler(this.state.course._id,this.state.course)
                                }}></i>
                            }
                            {
                                !this.state.editing &&
                                <i className="fa fa-pencil float-right" aria-hidden="true"
                                   onClick={() => this.setState({editing: true})}></i>
                            }
                            <i className="fa fa-trash float-right wbdv-cross" aria-hidden="true"
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
