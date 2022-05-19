import {NavLink} from "react-router-dom";

let HomeComponent = () => {
    return (
        <div className={"row d-flex justify-content-center align-items-center"}>
            <NavLink to={"/artists"} className={"btn-app full-height full-width"}>Music App</NavLink>
        </div>
    )
}

export default HomeComponent;