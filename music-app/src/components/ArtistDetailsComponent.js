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
            <div className={"d-flex flex-column justify-content-center align-items-center artist-text-color p-5"}>
                <img className={"img-fluid"} src={`/covers/${artist.cover}.jpg`} alt={"artist name"}/>
                <h1>
                    {artist.name}
                </h1>
                <hr/>
                <section className={"text-center"}>
                    <h2>Bio</h2>
                    <p className={"text-center artist-bio"}>{artist.bio}</p>
                </section>
                <hr/>
                <section className={"text-center mb-4"}>
                    <h2>Albums</h2>
                    <div className={"d-flex flex-wrap img-cube m-auto"}>
                        {renderAlbumsImages()}
                    </div>
                </section>
            </div>
        )
    }

    let renderAlbumsImages = () => {
        if (artist.albums)
            return artist.albums.map(album => {
                return (
                    <div key={album.albumId}>
                        <NavLink to={`/albums/${artist.id}`}>
                            <img src={`/albums/${album.cover}.jpg`} className={"img-album"}
                                 alt={"album image"}/>
                        </NavLink>
                    </div>
                )
            })
        else
            return (
                <h1>Loading.....</h1>
            )
    }

    // ComponentDidMount
    useEffect(() => {
        artistSerivce.getById(setArtist, setError, id);
    }, []);

    return (
        <div>
            {renderArtist()}
        </div>
    )
}
export default ArtistDetailsComponent;
