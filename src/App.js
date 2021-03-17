import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import NavBar from './components/NavBar';

import './App.scss';
import { useState } from 'react';
import About from './Pages/About';
import PortfoliosPage from './Pages/PortfoliosPage';
import ContactPage from './Pages/ContactPage';

const App = () => {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };
  return (
    <Router>
      <div className="App">
        <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
          <NavBar />
        </div>
        <div className="nav-btn" onClick={navClick}>
          <div className="lines-1"></div>
          <div className="lines-2"></div>
          <div className="lines-3"></div>
        </div>

        <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/portfolios" exact>
                <PortfoliosPage />
              </Route>
              <Route path="/contact" exact>
                <ContactPage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
