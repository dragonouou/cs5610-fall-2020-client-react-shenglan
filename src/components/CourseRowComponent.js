import React from "react";
import {Link} from "react-router-dom"
import {updateCourse} from "../services/CourseService";
import '../styling/CourseRowComponent.css'

export default class CourseRowComponent extends React.Component {

    state = {
        editing: false,
        course:this.props.course
    }

    render() {
        return (
            <tr className="wbdv-row wbdv-course">
                <td className="course">
                    <i className="fa fa-file-text-o wbdv-row wbdv-icon" aria-hidden="true"></i>
                    {
                        this.state.editing &&
                        <input className="form-control"
                               onChange = {(e) =>{
                                   const newTitle = e.target.value
                                   this.setState(prevState => ({
                                       course:{...prevState.course, title:newTitle}
                                   }))
                               }}
                               value={this.state.course.title}/>
                    }
                    {
                        !this.state.editing &&
                        <Link to={`/edit/${this.props.course._id}`}>{this.props.course.title}</Link>
                    }
                </td>
                <td className="wbdv-row wbdv-owner d-none d-md-table-cell">{this.props.course.owner}</td>
                <td className="wbdv-row wbdv-modified-date d-none d-md-table-cell">{this.props.course.modified}</td>
                <td className="wbdv-row wbdv-button wbdv-delete">
                    {
                        this.state.editing &&
                        <button onClick={()=>
                            updateCourse(this.state.course._id, this.state.course)
                                .then(status => {
                                    this.setState({editing: false})
                                    this.props.updateCourse(this.state.course._id, this.state.course)
                                })}>Ok</button>
                    }
                    {
                        !this.state.editing &&
                        <i className="fa fa-pencil float-right" aria-hidden="true"
                           onClick={() => this.setState({editing: true})}></i>
                    }
                    <i className="fa fa-times float-right wbdv-cross" aria-hidden="true"
                       onClick={() => this.props.deleteCourse(this.props.course)}></i></td>
            </tr>
        )
    }
}



// const CourseRowComponent = ({course, deleteCourse, editCourse,courseEdited}) =>
//     <tr className="wbdv-row wbdv-course">
//         <td className="course">
//             <i className="fa fa-file-text-o wbdv-row wbdv-icon" aria-hidden="true"></i>
//             {
//                 course === courseEdited &&
//                 <input className="form-control" value={courseEdited.title}/>
//             }
//             {
//                 course !== courseEdited &&
//                 <Link to={`/edit/${course._id}`}>{course.title}</Link>
//             }
//         </td>
//         <td className="wbdv-row wbdv-owner d-none d-md-table-cell">{course.owner}</td>
//         <td className="wbdv-row wbdv-modified-date d-none d-md-table-cell">{course.modified}</td>
//         <td className="wbdv-row wbdv-button wbdv-delete">
//             <i className="fa fa-pencil float-right" aria-hidden="true"
//                 onClick={() => editCourse(course)}></i>
//             <i className="fa fa-times float-right" aria-hidden="true"
//                onClick={() => deleteCourse(course)}></i></td>
//     </tr>

// export default CourseRowComponent