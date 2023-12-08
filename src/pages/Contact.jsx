import "../styles/Contact.css";
import "bootstrap/dist/css/bootstrap.css";


function Contact() {
  return (
    <div>
      <div className="contactInfo">
        <h2>Send me a message!</h2>
        <div className="p-3">
          <label for="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="First and Last Name"
          ></input>
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="p-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Your Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
