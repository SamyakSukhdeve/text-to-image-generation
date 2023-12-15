import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/create");
  };
  return (
    <div className="home-div">
      <div className="text-div">
        <h1 className="home-title">TEXT TO AI-IMAGE GENERATION </h1>
        <h3 className="home-tagline">
          Experience The Power of AI to Create Images Beyond Imagination.
        </h3>

        <button onClick={handelClick} className="home-btn">
          CREATE
        </button>
      </div>
      <img className="img-div" src="/src/assets/art.png" alt="Art" />
    </div>
  );
};

export default Home;
