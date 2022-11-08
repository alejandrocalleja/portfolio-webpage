import "./App.css";
import brand from "./images/brand.svg";
import logo from "./images/AC.svg";
import perfil from "./images/perfil.svg";
import MotivWord from "./components/motivWord";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={brand} className="App-brand" alt="brand" />
        <p>
          The portfolio of a{" "}
          <span className="highlight">Computer Engineering</span> student.
        </p>
      </header>
      <div className="App-motiv">
        <MotivWord word="attitude." />
      </div>
      <div className="App-about">
        <p className="App-about-left">
          Dear reader, my name is{" "}
          <span className="highlight">Alejandro Calleja Herrador</span> and this
          is my portfolio. I consider myself a hard-working and involved person,
          with great facility to adapt to different environments. <br />
          <br /> At the moment I am working at AEG Power Solutions Ibérica S.A
          while I am studying a degree in Computer Engineering at Mondragon
          Unibertsitatea. In the future I would like to continue my professional
          development in data analysis or web development.
        </p>
        {/* <img src={perfil} className="App-perfil" alt="perfil" /> */}
      </div>
      <div className="App-motiv">
        <MotivWord word="effort." />
      </div>
      <div className="App-motiv">
        <MotivWord word="dedication." />
      </div>
      <footer>
        <img src={logo} alt="logo" className="logo" />
      </footer>
    </div>
  );
}

export default App;

