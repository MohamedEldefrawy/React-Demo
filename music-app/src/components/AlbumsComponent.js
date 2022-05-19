import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ArtistService} from "../services/ArtistService";

let AlbumsComponent = () => {

    let [artist, setArtist] = useState([]);
    let [error, setError] = useState([]);
    let {id} = useParams();
    let artistSerivce = new ArtistService();

    useEffect(() => {
        artistSerivce.getById(setArtist, setError, id);
    }, []);

    let renderAlbums = () => {
        if (artist.albums)
            return artist.albums.map(album => {
                return (
                    <div key={album.albumId} className={"col-sm-12 col-md-4 col-lg-3 m-1"}>
                        <div className="card card-shadow flip-card">
                            <div className={"flip-card-inner"}>
                                <div className={"flip-card-front full-height"}>
                                    <img src={`/albums/${album.cover}.jpg`} className={"card-img-top"}
                                         alt="artist-image"/>
                                    <div>
                                        Price: ${album.price}
                                    </div>
                                    <div>
                                        Year: ${album.year}
                                    </div>
                                    <div className="card-body">
                                        <h2 className="card-text text-center">
                                            {album.title}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
    }

    return (<div className={"d-flex flex-row flex-wrap justify-content-around align-items-center"}>
        {renderAlbums()}
    </div>)
}

export default AlbumsComponent;