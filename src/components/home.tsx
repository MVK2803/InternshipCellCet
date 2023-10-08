import { Link } from "react-router-dom";
import Feature from "../assets/feature-7.jpg"
import testImg from "../assets/testImageCopied.svg"
const Home = () => {
  return (
    <div className="home-page">
      <div className="center-section">
        <img src={testImg}></img>
        <h4>Welcome to Internship Cell CET</h4>
        <button className="login-btn">
          <Link to={"/login"}>Login</Link>
        </button>
      </div>
      <div className="text-box">
          <div className="text-content">
            <h3>Internship cell</h3>
            <p>
              "The placement cell operates round the year to facilitate contacts
              between companies and graduates. The number of students placed
              through the campus interviews is continuously rising. The
              Placement Cell plays a crucial role in locating job opportunities
              for under graduates and post graduates passing out from the
              college by keeping in touch with reputed firms and industrial
              establishments.
            </p>
          </div>
          <img src={Feature}></img>
        </div>
    </div>
  );
};

export default Home;