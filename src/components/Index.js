import logo from '../logo.svg';
import '../App.css';


function Index() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a <code>React JS</code> project
        </p>
        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer">
          GoGo React
        </a>
      </header>
    </div>
  );
}
export default Index;