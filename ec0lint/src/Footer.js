import { banner, gitHubUrl, linkedInUrl } from './text';
import { Link, useLocation } from "react-router-dom";
import github from './resources/github.svg';
import linkedin from './resources/linkedin.svg';

export default function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

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
            <Link to="/privacy-policy" className={currentPath === "/privacy-policy" ? "navLinkBlue" : "navLinkPurple"}>
              Privacy Policy
            </Link>
          </h6>
          <h6 className="footerElement">
            <Link to="/terms-of-conditions" className={currentPath === "/terms-of-conditions" ? "navLinkBlue" : "navLinkPurple"}>
              Terms of Conditions
            </Link>
          </h6>
          <span>
            <a href={gitHubUrl} target="_blank" rel="noreferrer">
              <img src={github} alt="github" className="icon"/>
            </a>
            <a href={linkedInUrl} target="_blank" rel="noreferrer">
              <img src={linkedin} alt="linkedin" className="icon"/>
            </a>
          </span>
        </div>
    </div>
  );
}
