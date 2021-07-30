import "./App.css";
import { GrMail } from "react-icons/gr";
import { FaMobileAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import OANavbar from "./components/navbar/Navbar";
import ContactUs from "./components/contactus/ContactUs";
import AUS from "./components/contactus/au.png";
import UAS from "./components/contactus/us.png";

function App() {
  return (
    <div className="App">
      <div className="nitifi-sty">
        <div className="static-nav">
          <div className="branch">
            <a href="" className="contact-link">
              <img src={UAS} alt="" width="30" /> <GrMail className="icons" />{" "}
              test@gmail.com
            </a>
            <a href="" className="contact-link">
              {" "}
              <FaMobileAlt className="icons" /> +1 (614) 632-9349
            </a>
          </div>
          <div className="branch">
            <img src={AUS} alt="" width="30" />
            <a href="" className="contact-link">
              {" "}
              <GrMail className="icons" /> test@gmail.com
            </a>
            <a href="" className="contact-link">
              {" "}
              <FaMobileAlt className="icons" /> +61432782592
            </a>
          </div>
        </div>
      </div>
      <OANavbar />
      {/* <ContactUs /> */}
    </div>
  );
}

export default App;
