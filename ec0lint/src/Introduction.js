import { whySection, ec0lintIsSection, gitHubUrl, impactSection } from './text';
import prototype from './prototype.webp';

function Introduction() {

  return (
    <div>
        <h3 className="firstHeader">{whySection.title}</h3>
        <h6 className="section">{whySection.text[0]}<u>{whySection.text[1]}</u>{whySection.text[2]}</h6>
        <h3>{ec0lintIsSection.title}</h3>
        <h6 className="section">{ec0lintIsSection.text}</h6>
        <img src={prototype} alt="prototype" className="prototype" />
        <div>
          <a href={gitHubUrl} target="_blank" rel="noreferrer">
            <button className="downloadButton">DOWNLOAD</button>
          </a>
        </div>
        <h3>{impactSection.title}</h3>
        <ImpactSection/>
    </div>
  );
}

export default Introduction;
