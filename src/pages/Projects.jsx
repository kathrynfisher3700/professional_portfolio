
import "../styles/Project.css";
import "bootstrap/dist/css/bootstrap.css";

import petPic from "../assets/pet_connect_deployed.png";
import songSafari from "../assets/songSafari2.png";
import portfolio from "../assets/portfolio.png";
import koi from "../assets/logo1.png";
import computer from "../assets/computer.png"
import note from "../assets/notetaker.png"

function Projects() {
  return (
    <div className="holder">
        <div className="row align-items-center">
    <div className="d-inline-flex col">
      <div className="card ">
        <img src={songSafari} className="card-img-top" alt=""></img>
        <div className="card-body">
          <h5 className="card-title">SongSafari</h5>
          <p className="card-text">
            Team Project - HTML/CSS/JS
          </p>
          <a href="https://github.com/kathrynfisher3700/songSafari" target="_blank" className="btn btn-primary">
            View on Github
          </a>
        </div>
      </div>
    </div>
    <div className="d-inline-flex col">
      <div className="card">
        <img src={petPic} className="card-img-top" alt=""></img>
        <div className="card-body">
          <h5 className="card-title">PetConnect</h5>
          <p className="card-text">
            Team Project - JS/Express
          </p>
          <a href="https://github.com/AlexLenson/PetConnect" target="_blank" className="btn btn-primary">
            View on Github
          </a>
        </div>
      </div>
    </div>
    <div className="d-inline-flex col">
      <div className="card" >
        <img src={portfolio} className="card-img-top" alt=""></img>
        <div className="card-body">
          <h5 className="card-title">Portfolio</h5>
          <p className="card-text">
            Personal Project - React.js
          </p>
          <a href="https://github.com/kathrynfisher3700/professional_portfolio" target="_blank" className="btn btn-primary">
            View on Github
          </a>
        </div>
      </div>
    </div>
    </div>
    <div className="row align-items-center">
    <div className="d-inline-flex col p-3">
      <div className="card">
        <img src={koi} className="card-img-top" alt=""></img>
        <div className="card-body">
          <h5 className="card-title">KOI Invoicing</h5>
          <p className="card-text">
            Team Project - MERN fullstack
          </p>
          <a href="https://github.com/jradmorrison/koi-invoicing" target="_blank" className="btn btn-primary">
            View on Github
          </a>
        </div>
      </div>
    </div>
    <div className="d-inline-flex col">
      <div className="card">
        <img src={computer} className="card-img-top" alt=""></img>
        <div className="card-body">
          <h5 className="card-title">Employee Tracker</h5>
          <p className="card-text">
            Personal Project - SQL
          </p>
          <a href="https://github.com/kathrynfisher3700/Employee_Tracker_SQL" target="_blank" className="btn btn-primary">
            View on Github
          </a>
        </div>
      </div>
    </div>
    <div className="d-inline-flex col">
      <div className="card">
        <img src={note} className="card-img-top" alt=""></img>
        <div className="card-body">
          <h5 className="card-title">Notetaker</h5>
          <p className="card-text">
            Personal Project - Express.js
          </p>
          <a href="https://github.com/kathrynfisher3700/NoteTaker_Express.js" target="_blank" className="btn btn-primary">
            View on Github
          </a>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Projects;
