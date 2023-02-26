import React from "react";
import { whySection, ec0lintIsSection, gitHubUrl, donateSection, references, donateUrl, forBusinessSection, servicesPage } from '../text';
import prototype from '../resources/prototype.webp';
import ImpactSection from '../sections/ImpactSection';
import SupportSection from '../sections/InitiativesSection';
import { banner } from '../text';
import References from '../sections/References';

function MainPage() {

  return (
    <div>
      <div>
        <h1 className="logo">{banner.logo}</h1>
        <span className="logo">
          <h6 className="intro">{banner.goal}</h6>
          <h2 className="introEc0lint">{banner.name}</h2>
        </span>
      </div>
      <h3 className="firstHeader">{whySection.title}</h3>
      <h6 className="sectionText">{whySection.text[0]}<u>{whySection.text[1]}</u>{whySection.text[2]}</h6>
      <h3 className="sectionTitle" style={{ marginTop: '100px' }}>{ec0lintIsSection.title}</h3>
      <h4 className="sectionTitle" style={{ marginTop: '40px' }}>{ec0lintIsSection.subtitle}</h4>
      <h6 className="sectionText">{ec0lintIsSection.text}</h6>
      <img src={prototype} alt="prototype" className="prototype" />
      <div>
        <a href={gitHubUrl} target="_blank" rel="noreferrer">
          <button className="mainButton">DOWNLOAD</button>
        </a>
      </div>

      <h3 className="sectionTitle" style={{ marginTop: '80px' }}>{forBusinessSection.title}</h3>
      <h4 className="sectionTitle" style={{ marginTop: '30px' }}>{forBusinessSection.subtitle}</h4>
      <div className="serviceSection">
        {servicesPage.services.map((x) => {
          return <span className="serviceItem">
            <h4 style={{padding: '0 10px'}}>{x.title}</h4>
          </span>
        })}
      </div>
      <div>
        {/* TODO Ten przycisk powinien przenosić do zakłądki Services */}
          <button className="mainButton">SERVICES</button>
      </div>


      <ImpactSection />
      <h3 className="sectionTitle" style={{ marginTop: '80px' }}>{donateSection.title}</h3>
      <h6 className="sectionText" style={{ paddingTop: '30px' }}>{donateSection.text}</h6>
      <div>
        <a href={donateUrl} target="_blank" rel="noreferrer">
          <button className="mainButton">{"DONATE"}</button>
        </a>
      </div>
      <SupportSection />
      <h4>Used by</h4>
      <div className="circle"><h3>You?</h3></div>
      <References data={references} />
        </div>
        <h3 className="firstHeader">{whySection.title}</h3>
        <h6 className="sectionText">{whySection.text[0]}<u>{whySection.text[1]}</u>{whySection.text[2]}</h6>
        <h3 className="sectionTitle" style={{ marginTop: '80px' }}>{ec0lintIsSection.title}</h3>
        <h6 className="sectionText">{ec0lintIsSection.text}</h6>
        <img src={prototype} alt="prototype" className="prototype" />
        <div>
          <a href={gitHubUrl} target="_blank" rel="noreferrer">
            <button className="mainButton">DOWNLOAD</button>
          </a>
        </div>
        <ImpactSection/>
        <h6 className="sectionText" style={{ paddingTop: '70px' }}>{donateSection}</h6>
        <div>
          <a href={donateUrl} target="_blank" rel="noreferrer">
            <button className="mainButton">{"DONATE"}</button>
          </a>
        </div>
        <SupportSection/>
        <h4>Used by</h4>
        <div className="baseCircle"><h3>You?</h3></div>
        <References data={references} />
    </div>
  );
}

export default MainPage;
