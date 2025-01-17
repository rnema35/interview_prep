import './App.css';
//import Canvas from './components/Canvas.js';
//import RandomRooms from './components/randomRooms.js';
import Header from './components/header/header';
import AboutMe from './components/aboutMe/aboutMe';

function App() {
  return (
    <div className="App">
      {/* <h1>Map Generator</h1>
      <Canvas width={800} height={700} tile_size={10}></Canvas>
      <RandomRooms></RandomRooms> */}
      <Header></Header>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;
