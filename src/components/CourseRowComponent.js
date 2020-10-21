import React from "react";
import {Link} from "react-router-dom"
import '../styling/CourseRowComponent.css'

export default class CourseRowComponent extends React.Component {

    state = {
        selected: false,
        editing: false,
        course:this.props.course
    }

    render() {
        let className = "wbdv-row wbdv-course";
        if(this.state.selected) {
            className += " highlight"
        }

        return (
            <tr className={className} onClick={() =>
                this.setState(prevState => ({selected: !prevState.selected}))}>
                <td className="course" >
                    <i className="fa fa-file-text-o wbdv-row wbdv-icon" aria-hidden="true"></i>
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

                </td>
                <td className="wbdv-row wbdv-owner d-none d-md-table-cell">{this.props.course.owner}</td>
                <td className="wbdv-row wbdv-modified-date d-none d-lg-table-cell">{this.props.course.modified}</td>
                <td className="wbdv-row wbdv-button wbdv-delete">
                    {
                        this.state.editing &&
                        <i className="fa fa-check-square-o float-right" aria-hidden="true" onClick={()=> {
                            this.props.updateEventHandler(this.state.course._id,this.state.course)
                            this.setState({editing: false})
                        }}></i>
                    }
                    {
                        !this.state.editing &&
                        <i className="fa fa-pencil float-right" aria-hidden="true"
                           onClick={() => this.setState({editing: true})}></i>
                    }
                    <i className="fa fa-trash float-right wbdv-cross" aria-hidden="true"
                       onClick={() => this.props.deleteCourse(this.props.course)}></i></td>
            </tr>
        )
    }
}
