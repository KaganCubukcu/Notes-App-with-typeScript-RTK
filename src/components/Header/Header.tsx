import { useEffect, useState } from "react";
import "./header.css";
import GithubIcon from "../../assets/github.png";
import LinkedInIcon from "../../assets/linkedin.png";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const element = "Discover";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText((prevText) => prevText + element[i]);
      i++;
      if (i >= element.length) {
        clearInterval(timer);
      }
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <nav>
        <div>
          <h3>Notes App</h3>
        </div>

        <ul>
          <li>
            <a href="https://www.linkedin.com/in/kagancubukcu/" target="_blank">
              <img src={LinkedInIcon} alt="Linkedin_icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/KaganCubukcu" target="_blank">
              <img src={GithubIcon} alt="github_icon" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="content-container">
        <h1>
          Completely free and open for anyone to use.
          <p>Discover, Use, Share!</p>
        </h1>
        <p>
          Notes app is a great tool for anyone looking to stay organized and on
          top of their tasks. Whether you're a student, business professional,
          or just looking for a simple way to take notes, our app has you
          covered with features like writing, coloring, and filtering.
        </p>
        <Link to="/notes-app" className="header-button">
          Start Now
        </Link>
      </div>
    </div>
  );
};
export default Header;
