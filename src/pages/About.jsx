import "../styles/About.css";
import "bootstrap/dist/css/bootstrap.css";

function About() {
  return (
    <div>
      <div>
        <div className="aboutMe">
          <h1>Kathryn Dougherty</h1>
          <ul>
            <li>Full Stack Web Development 2023</li>
            <li>Bachelor of Arts: Criminal Justice and Corrections</li>
          </ul>
          <p>
            I grew up in Florida's Friendliest Hometown; a retirement community
            called The Villages. This unique environment provided me
            opportunities to lead in technology education and development. I am
            credited with being the "Queen" of the CRM program at my last
            company. In 2018 I earned my B.A. in Criminal Justice at the
            University of Central Florida. I also graduated with certificates in
            Crime Scene Investigation and Criminal Profiling. From there I went
            to explore a variety of positions such as a 911 emergency operator,
            summer camp director, Real Estate agent, and more. Thankfully, my
            true passion has emerged and I am now working towards a Full-Stack
            certification from my alma mater.
          </p>
        </div>
      </div>
      <div className="buttonHolder">
        <button className="custom-btn btn-4">
          <a
            href="https://www.dropbox.com/scl/fi/rh11t7kecwr6gnzy018dz/Resume-Kathryn-Dougherty-Fisher.pdf?rlkey=vd4dmfiw0dm2ro8uzlpi1bq6d&dl=0"
            target="_blank"
          >
            Resume
          </a>
        </button>

        <button className="button custom-btn btn-4">
          <a
            href="https://www.linkedin.com/in/kathryn-dougherty-fisher/"
            target="_blank"
          >
            LinkedIn
          </a>
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default About;
