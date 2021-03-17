import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Chousin Rahit</span>
        </h1>
        <p className="h-sub-text">
          A Self-taught Web developer looking for a challenging role where I can
          use my capabilities through sincere dedication and hard work for the
          development of organisation.
        </p>
        <div className="icons">
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon ln" />
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faTwitter} className="icon tw" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
