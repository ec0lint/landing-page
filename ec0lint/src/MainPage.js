import { whySection, ec0lintIsSection, gitHubUrl, donateSection, donateUrl } from './text';
import prototype from './prototype.webp';
import ImpactSection from './ImpactSection';

function MainPage() {

  return (
    <div>
        <h3 className="firstHeader">{whySection.title}</h3>
        <h6 className="sectionText">{whySection.text[0]}<u>{whySection.text[1]}</u>{whySection.text[2]}</h6>
        <h3>{ec0lintIsSection.title}</h3>
        <h6 className="sectionText">{ec0lintIsSection.text}</h6>
        <img src={prototype} alt="prototype" className="prototype" />
        <div>
          <a href={gitHubUrl} target="_blank" rel="noreferrer">
            <button className="mainButton">DOWNLOAD</button>
          </a>
        </div>
        <ImpactSection/>
        <h6 className="sectionText">{donateSection}</h6>
        <div>
          <a href={donateUrl} target="_blank" rel="noreferrer">
            <button className="mainButton">DONATE</button>
          </a>
        </div>
    </div>
  );
}

export default MainPage;
