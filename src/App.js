import logo from './logo.png';
import './App.css';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <div className="navigation">
          <img src={logo} className="logo" alt="logo image" />
          <div className="navigation-sub">
          
            <Link to="/" className="item">Projects</Link>
            <Link to="/" className="item">Articles</Link>
            <Link to="/" className="item">About</Link>

          </div>
        </div>


        <Route exact path="/" component={Projects} />
        <Route exact path="/" component={Articles} />
        <Route exact path="/" component={About} />

      </div>
    </BrowserRouter>
  );
}

export default App;
