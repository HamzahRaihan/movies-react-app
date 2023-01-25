import { NavigationBar } from "./components/NavigationBar";
import "./assets/style.css";
import { Route, Routes } from "react-router-dom";
import { TrendingMovie } from "./pages/TrendingMovie";
import { LandingPage } from "./pages/LandingPage";
import { Detail } from "./pages/Detail";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <div className="background-landing">
        <div className="overlay">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/detail/">
            <Route path=":movie_id" element={<Detail />} />
          </Route>
          <Route path="/trending" element={<TrendingMovie />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
