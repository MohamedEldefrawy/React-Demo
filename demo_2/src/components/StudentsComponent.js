import {Component} from "react";
import {NavLink} from "react-router-dom";

export default class StudentsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: this.props.students
        }
    }


    renderStudents() {
        return (this.state.students.map((student, index) => {
            return (
                <tr key={index}>
                    <td>
                        <NavLink to={"/student/" + student.name}>
                            {student.name}
                        </NavLink>
                    </td>
                    <td>{student.age}</td>
                </tr>);
        }));
    }

    render() {
        return (
            <table className="table table-bordered table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                </tr>
                </thead>
                <tbody>
                {this.renderStudents()}
                </tbody>
            </table>
        )
    }
}