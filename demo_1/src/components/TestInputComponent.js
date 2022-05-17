import {Component} from "react";

export class TestInputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {userName: ""}
    }

    render() {
        return (
            <div>
                <input placeholder={"Name"} value={this.state.userName} id="Name" onChange={(event) => {
                    this.setState(
                        {
                            userName: event.target.value
                        });
                }}/>
                {this.state.userName}

                <div>
                    <input type={"button"} value={"RESET"} onClick={(event) => {
                        this.setState({userName: ""});

                    }}/>
                </div>

            </div>

        )
    }
}