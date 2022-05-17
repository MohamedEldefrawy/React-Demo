import {Component} from "react";

export default class ErrorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={"d-flex justify-content-center align-content-center"}>
                <h1>Error 404</h1>
            </div>
        )
    }
}