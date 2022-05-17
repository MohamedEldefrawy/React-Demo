import {Component} from "react";

export default class InputFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: 0,
            sendStudent: this.props.onSendStudent
        }
    }

    render() {
        return (
            <div style={{width: 100 + '%'}} className={"text-center m-3"}>
                <div className={"input-group mb-3 d-flex flex-row justify-content-center "}>
                    <div>
                        <label className="input-group-text" htmlFor="Name">
                            Name
                        </label>
                        <input id={"Name"} type={"text"} placeholder={"Name"} value={this.state.name} onChange={(e) => {
                            this.setState({name: e.target.value});
                        }}/>
                    </div>
                    <div>
                        <label className="input-group-text" htmlFor="Age">Age</label>
                        <input id={"Age"} type={"number"} placeholder={"Age"} value={this.state.age} onChange={(e) => {
                            this.setState({age: e.target.value});
                        }}/>
                    </div>
                </div>
                <div>
                    <input id={"Age"} type={"button"} className={"btn btn-primary"} value={"Add"}
                           onClick={(e) => {
                               if (this.state.name !== "" && this.state.age !== 0)
                                   this.state.sendStudent(this.state.name, this.state.age);
                           }}/>
                </div>
            </div>
        );
    }
}