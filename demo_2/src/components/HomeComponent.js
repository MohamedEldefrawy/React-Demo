import {Component} from "react";
import InputFormComponent from "./InputFormComponent";
import StudentsComponent from "./StudentsComponent";

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [],
        }
    }

    sendStudent = (name, age) => {
        console.log(name, age)
        let temp = this.state.students;
        temp.push({name: name, age: age});
        this.setState({students: temp});
    }

    render() {
        return (
            <div className={"d-flex flex-column justify-content-center align-content-center"}>
                <section>
                    <InputFormComponent onSendStudent={this.sendStudent}/>
                </section>
                <section>
                    <StudentsComponent students={this.state.students}/>
                </section>
            </div>
        )
    }
}