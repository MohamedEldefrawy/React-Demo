import './App.css';
import {Route, Routes} from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import ArtistsComponent from "./components/ArtistsComponent";
import ArtistDetailsComponent from "./components/ArtistDetailsComponent";
import NotFoundComponent from "./components/NotFound";
import Navbar from "./components/Navbar";
import HomeComponent from "./components/HomeComponent";

function App() {
    return (
        <div>
            <Navbar/>
            <div className={"cover-img d-flex justify-content-center align-content-center"}>
                <Routes>
                    <Route path='/home' element={<HomeComponent/>}/>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/artists" element={<ArtistsComponent/>}/>
                    <Route path="/artists/:id" element={<ArtistDetailsComponent/>}/>
                    <Route path="*" element={<NotFoundComponent/>}/>
                </Routes>
            </div>
            <FooterComponent/>
        </div>
    );
}

export default App;
