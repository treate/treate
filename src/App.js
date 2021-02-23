import conceptImage from './assets/images/treate_concept.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={conceptImage} className="App-logo" alt="logo" />
        <p>
          Technological Creations (<code>Treate</code>)<br></br>
          <small>Connect. Coach. Create.</small>
        </p>
      </header>
    </div>
  );
}

export default App;