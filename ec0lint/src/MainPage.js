import { whySection, ec0lintIsSection, gitHubUrl, donateSection, donateUrl,
references } from './text';
import prototype from './images/prototype.webp';
import ImpactSection from './sections/ImpactSection';
import SupportSection from './sections/SupportSection';
import { banner } from './text';

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
            <button className="mainButton">DONATE</button>
          </a>
        </div>
        <SupportSection/>
        <h4>Used by</h4>
        <div className="circle"><h3>You?</h3></div>
        <h5 className="sectionText">References</h5>
        <div style={{ paddingBottom: '100px' }}>
          {references.map((x, i) => {
            return (<div>
              <h6 className="sectionText" key={i}>{`[${i+1}]`} <a href={x.url} target="_blank" rel="noreferrer">
              {x.name}</a> Accessed {x.date}</h6>
            </div>);
          })}
        </div>
    </div>
  );
}

export default MainPage;
