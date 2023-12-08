import "../App.css";
import Technologies from "./Technologies";

const HeroSection = () => {
  return (
    <section className="heroSec">
      <div className="infoText">
        <div>
          <h1>
            Hello world I'm <span> Luck Sharma </span>
          </h1>
          <p>I love to design interactive and efficient web applications</p>
          <a href="#projects" className="button">
            See my work
          </a>

          <div className="techStack">
            <Technologies />
          </div>
        </div>
      </div>

      <div className="contacts">
        <a href="https://github.com/mayank0274" target="_blank">
          <i class="fab fa-github-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/luck-sharma" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://t.me/mayank0274" target="_blank">
          <i class="fab fa-telegram"></i>
        </a>
        <a href="#contact">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
