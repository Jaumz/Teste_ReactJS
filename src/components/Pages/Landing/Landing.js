import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
        <Link to="/home">
            <button>Entrar</button>
        </Link>
    </div>
  );
}

export default Landing;
