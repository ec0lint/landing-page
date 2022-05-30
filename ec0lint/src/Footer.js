import { banner } from './text';

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
          <h5 style={{  }}>&copy; ec0lint 2022</h5>
          <h5 className="footerLink" onClick={() => console.log("a")}>Privacy Policy</h5>
          <h5 className="footerLink" onClick={() => console.log("a")}>Terms of Conditions</h5>
        </div>
    </div>
  );
}

export default Footer;
