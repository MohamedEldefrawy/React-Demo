import {NavLink} from "react-router-dom";

let ArtistSummaryComponent = () => {
    return (
        <div>
            <div className={"row text-center"}>
                <NavLink to={"/"} className={"btn-app full-height full-width"}>Home</NavLink>
            </div>
            <div className={"row"}>
                <div className={"col-sm-12 col-md-3 col-lg-3"}>
                    <div className="card">
                        <img src="/public/raw/06-Johnny-Cash.jpg" className={"card-img-top"} alt="artist-image"/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk
                                of
                                the
                                card's content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistSummaryComponent;