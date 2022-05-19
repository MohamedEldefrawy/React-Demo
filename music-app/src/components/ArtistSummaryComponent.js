import {useState} from "react";
import {NavLink} from "react-router-dom";

let ArtistSummaryComponent = (props) => {
    console.log(props);
    let [artist, setArtist] = useState(props.artistDetails);
    return (
        <div className="card card-shadow">
            <img src={`/covers/${artist.cover}.jpg`} className={"card-img-top"} alt="artist-image"/>
            <div className="card-body">
                <h2 className="card-text text-center">
                    <NavLink to={`/artists/${artist.id}`}>{artist.name}</NavLink>
                </h2>
            </div>
        </div>
    )
}

export default ArtistSummaryComponent;