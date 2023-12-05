import "../styles/Home.css";
import icon from "../assets/kathryn-icon.png";
import paint from "../assets/paint.png";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-auto">
          <img src={icon} id="icon"></img>
        </div>
        <div className="col-md-auto">
          <img src={paint} id="paint"></img>
          <p>I'm Kathryn. Creative Designer and Teacher. 
            <br></br>Elevating Experiences through Innovative Design</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
