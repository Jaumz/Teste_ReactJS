import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {
  return (
    <div className="container-button">
        <Link to="/home">
            <button>Entrar</button>
        </Link>
    </div>
  );
}

export default Landing;
