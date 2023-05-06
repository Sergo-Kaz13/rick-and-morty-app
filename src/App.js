import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Characters from "./components/Characters/Characters";
import Location from "./components/Location/Location";
import { Header } from "./components/Header/Header";
import Episodes from "./components/Episode/Episode";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/location" element={<Location />} />
            <Route path="/episode" element={<Episodes />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
