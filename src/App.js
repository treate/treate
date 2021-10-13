import conceptLockup from './assets/images/treate_concept.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={conceptLockup}
          className="App-logo"
          alt="Treate - Connect. Coach. Create."
        />
        <h1 className="App-title">TREATE INNOVATIVE SOLUTIONS LIMITED</h1>
        <p className="App-description">Connect. Coach. Create.</p>
        <a
          className="App-link"
          href="mailto:info@treate.ng"
        >
          Contact us
        </a>
      </header>
    </div>
  );
}

export default App;