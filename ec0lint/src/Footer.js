import { banner, gitHubUrl, linkedInUrl, krystalUrl } from './text';
import { Link, useLocation } from "react-router-dom";
import github from './resources/github.svg';
import linkedin from './resources/linkedin.svg';
import krystal from './resources/krystal-badge.svg';
import Carbonbadge from "react-carbonbadge";

export default function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="footer">
        <div className="sectionText" style={{ marginBottom: '30px' }}>
          <h3 className="logo">{banner.logo}</h3>
          <span className="logo">
            <h5 className="footerName" style={{ fontSize: '1.8em' }}>{banner.name}</h5>
            <h5 className="footerContact">Contact: {banner.email}</h5>
          </span>
          <a href={krystalUrl} target="_blank" rel="noreferrer">
            <img src={krystal} alt="krystal" className="badge"/>
          </a>
        </div>
        <div className="footerLinks">
          <h6 className="footerElement">&copy; ec0lint 2022</h6>
          <h6 className="footerElement">
            <Link to="/privacy-policy" className={currentPath === "/privacy-policy" ? "navLinkBlue" : "navLinkPurple"} onClick={() => window.scrollTo(0, 0)}>
              Privacy Policy
            </Link>
          </h6>
          <h6 className="footerElement">
            <Link to="/terms-of-conditions" className={currentPath === "/terms-of-conditions" ? "navLinkBlue" : "navLinkPurple"} onClick={() => window.scrollTo(0, 0)}>
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
        <Carbonbadge darkMode={true} style={{ float: 'right' }}/>
    </div>
  );
}
