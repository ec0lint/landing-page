import React from "react";
import { getStartedForUsers, gitHubUrl, donateSection, donateUrl } from "../text";

export default function GetStartedPage() {

  return (
    <div className="secondPage">
      <div>
        <h4 className="sectionTitle">
          For users
        </h4>
        <div className="getStarted sectionText">
          <h6 style={{ whiteSpace: 'pre-wrap' }}>{getStartedForUsers}</h6>
          <h6 style={{ whiteSpace: 'pre-wrap' }}>{"\n\n\n\n\n\n\n\nIn a nutshell: \n"}
            {"\n1) Make sure you have Node installed "}
            {"\n2) Download ec0lint: \n"}<h6 style={{ color: '#8ECCEA' }}>npm i ec0lint ec0lint-css ec0lint-css-config-recommended</h6>
            {"3) Configure your project: \n"}<h6 style={{ color: '#8ECCEA' }}>npm init @ec0lint/config</h6>
            {"4) Create a .ec0lint-cssrc.json configuration file in the root of your project with the following content: \n"}<h6 style={{ color: '#8ECCEA' }}>
              {"{ \n \"extends\": \"ec0lint-css-config-recommended\" \n}\""}
            </h6>
            {"5) Split your terminal and run: \n"}<h6 style={{ color: '#8ECCEA' }}>npx ec0lint-css "**/*.css"  npx ec0lint .</h6>
            {"6) Let's build an eco-friendly website!"}
          </h6>
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
        <div className="getStarted sectionText">
          <h6>And once more, please visit <a target="_blank" rel="noreferrer"
            href="https://eslint.org/docs/developer-guide/contributing/" className="link">this site.</a>
          </h6>
          <h6 style={{ whiteSpace: 'pre-wrap' }}>{"\nYou'll find the documentation "}<a target="_blank" rel="noreferrer"
            href="https://www.npmjs.com/package/ec0lint" className="link">here.</a>
          </h6>
          <h6 style={{ whiteSpace: 'pre-wrap' }}>{"\n\n\n\nRules:"}
            {"\n2) Clone ec0lint "}<a target="_blank" rel="noreferrer"
            href="https://github.com/ec0lint/ec0lint" className="link">repository</a>
            {"\n3) Install dependencies"}
            <h6 style={{ color: '#8ECCEA' }}>   cd ec0lint</h6>
            <h6 style={{ color: '#8ECCEA' }}>   npm install</h6>
            {"4) Start contributing!"}</h6>
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
            <button className="blueSectionButton">{"DONATE"}</button>
          </a>
        </div>
      </div>
    </div>
  );
}
