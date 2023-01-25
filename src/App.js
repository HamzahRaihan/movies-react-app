import { NavigationBar } from "./components/NavigationBar";
import "./assets/style.css";
import { Route, Routes } from "react-router-dom";
import { TrendingMovie } from "./pages/TrendingMovie";
import { LandingPage } from "./pages/LandingPage";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <div className="background-landing">
        <div className="overlay">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/trending" element={<TrendingMovie />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
