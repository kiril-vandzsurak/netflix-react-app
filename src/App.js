import "./App.css";
import NetflixNavbar from "./components/NetflixNavbar";
import FirstCarousel from "./components/FirstCarousel";
import SecondCarousel from "./components/SecondCarousel";
import ThirdCarousel from "./components/ThirdCarousel";

function App() {
  return (
    <div className="App">
      <NetflixNavbar />
      <FirstCarousel />
      <SecondCarousel />
      <ThirdCarousel />
    </div>
  );
}

export default App;
