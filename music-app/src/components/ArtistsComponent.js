import ArtistSummaryComponent from "./ArtistSummaryComponent";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

let ArtistsComponent = () => {

    let [artists, setArtists] = useState([]);
    let [errors, setError] = useState("");
    const url = "http://localhost:3500/artists";

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
                No data available
            </div>)
    }

    // ComponentDidMount
    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setArtists(data);
            })
            .catch((err) => {
                setError(err);
                console.log(errors)
            })
    }, []);

    return (

        <div>
            <div className={"row text-center"}>
                <NavLink to={"/"} className={"btn-app full-height full-width"}>Home</NavLink>
            </div>

            <div className={"row p-5"}>
                {renderArtists(artists)}
            </div>
        </div>
    )
}

export default ArtistsComponent;