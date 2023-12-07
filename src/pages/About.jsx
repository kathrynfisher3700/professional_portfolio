import "../styles/About.css";
import "bootstrap/dist/css/bootstrap.css";

function About() {
  return (
    <div>
      <div>
        <div className="aboutMe">
          <h1>Kathryn Dougherty</h1>
          <h2>Education</h2>
          <ul>
            <li>Full Stack Web Development 2023</li>
            <li>Bachelor of Arts: Criminal Justice and Corrections</li>
          </ul>
          <h2>Background</h2>
        </div>
      </div>
      <div className="buttonHolder">
        <button className="button custom-btn btn-4">Resume</button>

        <button className="button custom-btn btn-4">GitHub</button>

        <button className="button custom-btn btn-4">LinkedIn</button>
      </div>
      <div></div>
    </div>
  );
}

export default About;
