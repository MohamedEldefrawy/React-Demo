import {Component} from "react";
import InputFormComponent from "./InputFormComponent";
import StudentsComponent from "./StudentsComponent";

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <section>
                    <InputFormComponent/>
                </section>
                <section>
                    <StudentsComponent/>
                </section>
            </div>
        )
    }
}