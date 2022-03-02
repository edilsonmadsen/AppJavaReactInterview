import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContent">
        <p className="mainLabel">
          HOP<span className="point">.</span>
        </p>
        <p className="secondaryLabel">Aqui você encontra o que precisa!</p>
        <div>
          <Link to="/products" className="threeLabel">House of Products</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
