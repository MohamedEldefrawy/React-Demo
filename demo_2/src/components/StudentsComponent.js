import {Component} from "react";

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
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                </tr>);
        }));
    }

    render() {
        return (
            <table className="table">
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