import {Component} from "react";

export class TestInputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {userName: "Name"}
    }

    render() {
        return (
            <div>
                <input placeholder={this.state.userName} id="Name" onChange={(event) => {
                    this.setState(
                        {
                            userName: event.target.value
                        });
                }}/>
                {this.state.userName}
            </div>

        )
    }
}