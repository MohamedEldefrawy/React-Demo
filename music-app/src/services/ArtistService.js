export class ArtistService {
    url = "http://localhost:3500/artists/";

    getAll(setArtists, setError) {
        fetch(this.url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setArtists(data);
            })
            .catch((err) => {
                setError(err);
            })
    }

    getById(setArtist, setError, id) {
        fetch(this.url + id)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setArtist(data);
            })
            .catch((err) => {
                setError(err);
            })
    }
}