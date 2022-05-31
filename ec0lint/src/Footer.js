import { banner } from './text';
import { Link } from "react-router-dom";
// import github from './images/github.svg';
// import linkedin from './images/linkedin.svg';

export default function Footer() {
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
          <h6 className="footerElement">&copy; ec0lint 2022</h6>
          <h6 className="footerElement">
            <Link to="/privacy-policy"className="navLink">
              Privacy Policy
            </Link>
          </h6>
          <h6 className="footerElement">
            <Link to="/terms-of-conditions" className="navLink">
              Terms of Conditions
            </Link>
          </h6>
          {/* <span> */}
            {/* <img src={github} alt="github"/> */}
            {/* <img src={linkedin} alt="linkedin"/> */}
          {/* </span> */}
        </div>
    </div>
  );
}
