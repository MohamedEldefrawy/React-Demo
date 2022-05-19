import {useState} from "react";
import {NavLink} from "react-router-dom";

let ArtistSummaryComponent = (props) => {
    console.log(props);
    let [artist, setArtist] = useState(props.artistDetails);
    return (
        <div className="card card-shadow flip-card">
            <div className={"flip-card-inner"}>
                <div className={"flip-card-front full-height"}>
                    <NavLink to={`/artists/${artist.id}`}>
                        <img src={`/covers/${artist.cover}.jpg`} className={"card-img-top"} alt="artist-image"/>
                    </NavLink>
                    <div className="card-body">
                        <h2 className="card-text text-center">
                            {artist.name}
                        </h2>
                    </div>
                </div>

                {/*<div className={"flip-card-back"}>*/}
                {/*    <p>*/}
                {/*        {artist.bio}*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>

        </div>
    )
}

export default ArtistSummaryComponent;