import AlbumDetailComponent from "./AlbumDetailComponent";
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
                    <div className={"col-sm-12 col-md-4 col-lg-3 mb-5"}>
                        <AlbumDetailComponent key={album.albumId} albumDetail={album}/>
                    </div>
                )
            });
        else
            return (<div>
                <h1>error</h1>
            </div>)
    }

    return (
        <div className={"row"}>
            {renderAlbums()}
        </div>
    )
}

export default AlbumsComponent;