import './App.css';
import {Route, Routes} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import ArtistsComponent from "./components/ArtistsComponent";
import ArtistDetailsComponent from "./components/ArtistDetailsComponent";
import NotFoundComponent from "./components/NotFound";

function App() {
    return (
        <div className={"cover-img d-flex justify-content-center align-content-center"}>
            <Routes>
                <Route path='/home' element={<HomeComponent/>}/>
                <Route path="/" element={<HomeComponent/>}/>
                <Route path="/artists" element={<ArtistsComponent/>}/>
                <Route path="/artists/:id" element={<ArtistDetailsComponent/>}/>
                <Route path="*" element={<NotFoundComponent/>}/>
            </Routes>
        </div>
    );
}

export default App;
