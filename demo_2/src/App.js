import './App.css';
import NavbarComponent from "./components/NavbarComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import {Component} from "react";
import ErrorComponent from "./components/ErrorComponent";
import StudentComponent from "./components/StudentComponent";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <NavbarComponent/>
                <Routes>
                    <Route path='/home' element={<HomeComponent/>}/>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/student/:name" element={<StudentComponent/>}/>
                    <Route path="*" element={<ErrorComponent/>}/>
                </Routes>
            </div>
        );
    }
}