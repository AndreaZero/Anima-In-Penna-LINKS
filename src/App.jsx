
import './App.scss';
import insta from "../src/media/icons/insta.png";
import spotify from "../src/media/icons/spotify.png";
import youtube from "../src/media/icons/youtube.png";
import cover from  "../src/media/cover.png";
import animalogo from "../src/media/anima.png";
import post from "../src/media/post.png";

function App() {
  return (
    <div className="App">
      <center>
      <div className="App-logo">
      <div className='App-title'>
          <div className='animalogo'>
            <img src={animalogo} alt="anima"></img>
          </div>
          <h3>Il nuovo album di Frank La Tanica <br></br>fuori il 9 settembre 2022.<br></br>
          Segui i link qui sotto per preordinare la tua copia fisica<br></br>
          e ascoltare in anteprima il singolo estratto "Quello che conta".</h3>
        </div>
        <br></br>
        </div>
        <br></br>
        <div className="App-link-container">
          <br></br>
          <div className='anima-preorder'>
          <div className='App-titlelink'>
            <h3>Anima in Penna - ALBUM<br></br>👇 PREORDER 👇</h3>
          </div>
          <div className='link1'>
          ➡️<a href="https://wall.cdclick-europe.com/projects/Anima_in_Penna" alt="cdclick">Acquista su CD Click</a>
          <img src={cover} alt="cover"></img>
          </div>
          <br></br>
          <div className='cover2'>
          <a href="https://wall.cdclick-europe.com/projects/Anima_in_Penna" alt="cdclick"><img src={cover} alt="cover"></img></a></div>
          </div>
          <br></br>
          <div className='instapost'>
            <a href="https://www.instagram.com/p/CiCxyr0opbk/"><img src={post} alt="post"></img></a>
          </div>
          <br></br>
          <div className='singoli'>
          <div className='App-titlelink'>
            <h3>🎵 Quello che conta 🎵 <br></br>Singolo anteprima</h3>
          </div>
          <div className='link2'>
          ➡️ <a href="https://open.spotify.com/track/6UbHyH0kiMOcXAqwkjqVag?si=634f81cb31ca4633" alt="SPOTI">Ascolta su Spotify</a>
          <img src={spotify} alt="cover"></img>
          </div>
          <br></br>
          <iframe title="Spotify" src="https://open.spotify.com/embed/track/6UbHyH0kiMOcXAqwkjqVag?utm_source=generator&theme=0" width="300px" height="80px" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe><br></br>
          <br></br>
          <div className='link3'>
          ➡️ <a href="https://www.youtube.com/watch?v=3ryhGGVXfDs&ab_channel=FrankLaTanicaOfficial" alt="video">Guarda il visual video</a>
            <img src={youtube} alt="youtube"></img>
          </div>
          <br></br>
          <div className='video'>
          <iframe width="100" height="80" src="https://www.youtube.com/embed/3ryhGGVXfDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          </div>
          <br></br>
        </div>
        <br></br>
        <div className='helpbox'>
    Segui Frank La Tanica <br></br> <a href='https://www.instagram.com/franklatanica.rap/'> <img src={insta} alt="link"></img>
    <a href='https://www.youtube.com/channel/UC4UfQ40ZudglVxfoYnmZ0pQ'> <img src={youtube} alt="link"></img></a></a>
</div>
        </center>
    </div>
  );
}

export default App;
