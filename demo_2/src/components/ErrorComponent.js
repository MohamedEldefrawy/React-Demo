import {Component} from "react";

export default class ErrorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Error</h1>
            </div>
        )
    }
}