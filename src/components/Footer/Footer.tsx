import "./footer.css";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <ul>
        <button className="footer-button">
          <a href="https://www.linkedin.com/in/kagancubukcu/" target="_blank">
            About me
          </a>
        </button>
        <button className="footer-button">
          <Link to="/notes-app" style={{ color: "white" }}>
            Start now
          </Link>
        </button>
      </ul>
      <p>Coded by Kağan Çubukçu</p>
    </div>
  );
};
export default Footer;
