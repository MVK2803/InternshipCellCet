import { Link } from "react-router-dom";
import Feature from "../assets/feature-7.jpg"
import testImg from "../assets/testImageCopied.svg"
const Home = () => {
  return (
    <div className="home-page">
      <div className="center-section">
        <img src={testImg}></img>
        <h4>Register yourself to Internship Cell CET</h4>
        <button className="login-btn">
          <Link to={"/login"}>Login</Link>
        </button>
      </div>
      <div className="text-box">
          <div className="text-content">
            <h3>Internship cell</h3>
            <p>
            The Internship Cell is here to help you gain real-world experience while you're still studying. We connect 
            students with opportunities to work in actual companies or organizations. Our goal is to match you with internships that
            match your interests and what you're learning in class.
            </p>
          </div>
          <img src={Feature}></img>
        </div>
    </div>
  );
};

export default Home;