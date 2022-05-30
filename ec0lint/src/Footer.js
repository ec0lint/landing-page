import { banner } from './text';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
        <div className="sectionText">
          <h2 className="logo">{banner.logo}</h2>
          <span className="logo">
            <h4 className="footerName">{banner.name}</h4>
            <h5 className="footerContact">Contact: {banner.email}</h5>
          </span>
        </div>
        <div>
          <h5>&copy; ec0lint 2022</h5>
          <Link to="/privacy-policy" style={{ textDecoration: 'none' }}>
            <h5 className="footerLink">Privacy Policy</h5>
          </Link>
          <Link to="/terms-of-conditions" style={{ textDecoration: 'none' }}>
            <h5 className="footerLink">Terms of Conditions</h5>
          </Link>
        </div>
    </div>
  );
}

export default Footer;
