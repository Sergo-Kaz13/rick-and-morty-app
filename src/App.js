import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Characters from "./components/Characters/Characters";
import Location from "./components/Location/Location";
import { Header } from "./components/Header/Header";
import Episodes from "./components/Episode/Episode";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import Character from "./components/Character/Character";
import EpisodeItem from "./components/EpisodeItem/EpisodeItem";
import LocationItem from "./components/LocationItem/LocationItem";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/:id" element={<Character />} />
            <Route path="/location" element={<Location />} />
            <Route path="/location/:id" element={<LocationItem />} />
            <Route path="/episode" element={<Episodes />} />
            <Route path="/episode/:id" element={<EpisodeItem />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
