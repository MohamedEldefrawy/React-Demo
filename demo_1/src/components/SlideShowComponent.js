import {Component} from "react";
import {clear} from "@testing-library/user-event/dist/clear";

export class SlideShowComponent extends Component {
    imagePrefix = "./images/";

    constructor(props) {
        super(props);
        this.state = {
            'images': ["1.jpg", "2.jpg", "3.jpg"],
            'index': 0,
            'selectedImage': "1.jpg",
            'intervalId': 0
        }
    }

    render() {

        return (
            <div>
                <img width="300px" height="300px" alt="slide show image" id="slideShow"
                     src={this.imagePrefix + this.state.selectedImage}/>
                <div>
                    <input type={"button"} value="Next" onClick={(event) => {
                        if (this.state.index < this.state.images.length - 1) {
                            this.setState({index: ++this.state.index})
                            this.setState({
                                selectedImage: this.state.images[this.state.index]
                            });
                        }
                    }}/>
                    <input type={"button"} value="Prev" onClick={(event) => {
                        if (this.state.index > 0) {
                            this.setState({index: --this.state.index})
                            this.setState({
                                selectedImage: this.state.images[this.state.index]
                            });
                        }
                    }}/>
                    <input type={"button"} value="Play" onClick={(event) => {
                        let id = setInterval(() => {
                            this.state.index = this.state.index > 0 ? --this.state.index : this.state.images.length - 1;
                            this.setState({selectedImage: this.state.images[this.state.index]})
                            this.setState({intervalId: id});
                        }, 1000);
                    }}/>
                    <input type={"button"} value="Stop" onClick={(event) => {
                        console.log(this.state.intervalId);
                        clearInterval(this.state.intervalId);
                    }}/>
                </div>

            </div>
        )
    }
}