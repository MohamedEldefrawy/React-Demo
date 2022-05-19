import ArtistSummaryComponent from "./ArtistSummaryComponent";
import {useEffect, useState} from "react";
import {ArtistService} from "../services/ArtistService";

let ArtistsComponent = () => {

    let [artists, setArtists] = useState([]);
    let [errors, setError] = useState("");
    const url = "http://localhost:3500/artists";
    let artistSerivce = new ArtistService();

    // ComponentDidUpdate
    useEffect(() => {
        console.log("Component did updated");
    });

    let renderArtists = () => {

        if (artists.length > 0)
            return artists.map(artist => {
                return (
                    <div className={"col-sm-12 col-md-4 col-lg-3 mb-5"}>
                        <ArtistSummaryComponent key={artist.id} artistDetails={artist}/>
                    </div>
                )
            });
        else
            return (<div>
                <h1>errors</h1>
            </div>)
    }

    // ComponentDidMount
    useEffect(() => {
        artistSerivce.getAll(setArtists, setError);
    }, []);

    return (
        <div>
            <div className={"row p-5"}>
                {renderArtists(artists)}
            </div>
        </div>
    )
}

export default ArtistsComponent;