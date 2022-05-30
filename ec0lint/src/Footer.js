import { banner } from './text';
import { Link } from "react-router-dom";
// import github from './images/github.svg';
// import linkedin from './images/linkedin.svg';

function Footer() {
  return (
    <div className="footer">
        <div className="sectionText">
          <h2 className="logo">{banner.logo}</h2>
          <span className="logo">
            <h4 className="footerName">{banner.name}</h4>
            <h5 className="footerContact">Contact: {banner.email}</h5>
          </span>
        </div>
        <div className="footerLinks">
          <h5 className="footerElement">&copy; ec0lint 2022</h5>
          <h5 className="footerElement"><Link to="/privacy-policy"className="footerLink">
            Privacy Policy</Link>
          </h5>
          <h5 className="footerElement">
            <Link to="/terms-of-conditions" className="footerLink">
            Terms of Conditions</Link>
          </h5>
          {/* <span> */}
            {/* <img src={github} alt="github"/> */}
            {/* <img src={linkedin} alt="linkedin"/> */}
          {/* </span> */}
        </div>
    </div>
  );
}

export default Footer;
