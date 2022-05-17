import {useParams} from "react-router-dom";


let StudentComponent = () => {
    let RenderStudent = () => {
        let {name} = useParams();
        return <h1>Name : {name}</h1>
    }

    return (
        <div>
            {RenderStudent()}
        </div>
    )
}

export default StudentComponent;