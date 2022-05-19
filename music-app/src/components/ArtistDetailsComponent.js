import {NavLink, useParams} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import {ArtistService} from "../services/ArtistService";

let ArtistDetailsComponent = () => {
    let [artist, setArtist] = useState({});
    let [errors, setError] = useState("");
    let {id} = useParams();
    let artistSerivce = new ArtistService();


    let renderArtist = () => {
        return (
            <div className={"d-flex flex-column justify-content-center align-items-center artist-text-color"}>
                <img className={"img-fluid"} src={`/covers/${artist.cover}.jpg`} alt={"artist name"}/>
                <h1>
                    {artist.name}
                </h1>
                <section>
                    <h4>Bio</h4>

                    <p className={"text-center"}>{artist.bio}</p>
                </section>
            </div>
        )
    }

    // ComponentDidMount
    useEffect(() => {
        artistSerivce.getById(setArtist, setError, id);
    }, []);

    return (
        <div>
            <div className={"row text-center"}>
                <NavLink to={"/"} className={"btn-app full-height full-width"}>Home</NavLink>
            </div>
            {renderArtist()}
        </div>
    )
}
export default ArtistDetailsComponent;
