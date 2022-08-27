
import './App.scss';
import insta from "../src/media/icons/insta.png";
import spotify from "../src/media/icons/spotify.png";
import youtube from "../src/media/icons/youtube.png";
import cover from  "../src/media/cover.png";

function App() {
  return (
    <div className="App">
      <center>
      <div className="App-logo">
      <div className='App-title'>
          <div className='coverimg'>
          <img src={cover} alt="cover"></img>
          </div>
          <h1>Anima in Penna</h1>
          <h3>il nuovo album di Frank La Tanica. <br></br>Fuori il 9 settembre 2022<br></br>
          Segui i link qui sotto per preordinare la tua copia fisica<br></br>
          e ascoltare in anteprima il singolo estratto "Quello che conta".</h3>
        </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="App-link-container">
          <br></br>
          <div className='App-titlelink'>
            <h5>👇 Anima in Penna - PREORDER 👇</h5>
          </div>
          <div className='link1'>
          ➡️<a href="https://wall.cdclick-europe.com/projects/Anima_in_Penna" alt="cdclick">Acquista su CD Click</a>
          <img src={cover} alt="cover"></img>
          </div>
          <br></br>
          <div className='App-titlelink'>
            <h5>🎵 Quello che conta - Singolo anteprima 🎵</h5>
          </div>
          <div className='link2'>
          ➡️ <a href="https://open.spotify.com/track/6UbHyH0kiMOcXAqwkjqVag?si=634f81cb31ca4633" alt="SPOTI">Ascolta su Spotify</a>
          <img src={spotify} alt="cover"></img>
          </div>
          <br></br>
          <div className='link3'>
          ➡️ <a href="https://www.youtube.com/watch?v=3ryhGGVXfDs&ab_channel=FrankLaTanicaOfficial" alt="video">Guarda il visual video</a>
            <img src={youtube} alt="youtube"></img>
          </div>
          <br></br>
          <br></br>
          <div className='helpbox'>
            Segui Frank La Tanica sui social<br></br>
          </div>
          <br></br>
          <div className="app-socialicon">
          <a href='https://www.instagram.com/franklatanica.rap/'> <img src={insta} alt="link"></img></a>
          <a href='https://www.youtube.com/channel/UC4UfQ40ZudglVxfoYnmZ0pQ'> <img src={youtube} alt="link"></img></a>
        </div>
        <br></br>
          <br></br>
        </div>
        <br></br><br></br>
        </center>
    </div>
  );
}

export default App;
