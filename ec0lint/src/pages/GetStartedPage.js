import { getStartedForUsers, getStartedInANutshell, gitHubUrl,
  donateSection, donateUrl } from "../text";

export default function GetStartedPage() {

  return (
    <div className="secondPage">
      <div>
        <h4 className="sectionTitle">
          For users
        </h4>
        <div className="getStarted">
          <h6 className="sectionText">{getStartedForUsers}</h6>
          <h6 className="sectionText">{getStartedInANutshell}</h6>
        </div>
      </div>
      <div>
          <a href={gitHubUrl} target="_blank" rel="noreferrer">
            <button className="mainButton">DOWNLOAD</button>
          </a>
      </div>
      <div>
        <h4 className="sectionTitle">
          For developers
        </h4>
        <div className="getStarted">
          <h6 className="sectionText">And once more, please visit <a target="_blank" rel="noreferrer"
            href="https://eslint.org/docs/developer-guide/contributing/" className="link">this site.</a>
          </h6>
          <h6 className="sectionText">You'll find the documentation <a target="_blank" rel="noreferrer"
            href="https://www.npmjs.com/package/ec0lint" className="link">here.</a>
          </h6>
          <h6 className="sectionText">Rules:
            {"2) Clone ec0lint "}<a target="_blank" rel="noreferrer"
            href="https://github.com/ec0lint/ec0lint" className="link">repository</a>
            {"3) Install dependencies"}
            cd ec0lint
            npm installe
            {"4) Fork our repository and start contributing!"}</h6>
        </div>
        <div>
          <a href={gitHubUrl} target="_blank" rel="noreferrer">
            <button className="mainButton">DOWNLOAD</button>
          </a>
        </div>
      </div>
      <div className="blueSection" style={{ marginBottom: '80px' }}>
        <h6 className="blueSectionText">{donateSection}</h6>
        <div>
          <a href={donateUrl} target="_blank" rel="noreferrer">
            <button className="blueSectionButton">DONATE</button>
          </a>
        </div>
      </div>
    </div>
  );
}
