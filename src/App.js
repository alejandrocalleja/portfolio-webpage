import "./App.css";
import brand from "./images/brand.svg";
import logo from "./images/AC.svg";
import MotivWord from "./components/motivWord";
import Card from "./components/card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={brand} className="App-brand" alt="brand" />
        <p>
          The portfolio of a{" "}
          <span className="highlight">Computer Engineer</span>.
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
          <br /> At the moment, I am working on my Bachelor's degree Final Project about Machine Learning at{" "} 
          <span className="highlight">Infineon Technologies AG</span>. In the future, I would like to continue my professional
          development with a Master in data analysis or maybe give a try to web development.
        </p>
      </div>
      <div className="App-motiv">
        <MotivWord word="effort." />
      </div>
      <div className="App-card-container">
        <div className="App-card-grid">
            <Card link='https://github.com/gorkalertxundi/ecrop' 
                imgUrl='url("https://i.ibb.co/bKTwVWh/ecrop-example.png")'
                category='Project Based Learning' 
                heading='eCrop'/>
            <Card link='https://github.com/alejandrocalleja/PBL5' 
                imgUrl='url("https://pbs.twimg.com/profile_images/1468968799114174467/uzCgWxzP_400x400.jpg")'
                category='Project Based Learning' 
                heading='DeckLearn'/>
            <Card link='https://github.com/alejandrocalleja/Robot-Mugikor-Autonomoa' 
                imgUrl='url("https://www.conveyco.com/wp-content/uploads/2019/11/AMR-product-line.jpg")'
                category='Project Based Learning' 
                heading='Simulated Autonomous Mobile Robot (AMR)'/>
        </div>
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

