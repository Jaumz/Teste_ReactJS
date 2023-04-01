import '../Header/Header.css';
import Back from "../../images/back.png";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img src={Back}></img>
        </Link>
        <p>Teste ReactJS - SaibWeb</p>
      </div>
      <div className="sub-header"></div>
    </div>
  );
}

export default Header;
