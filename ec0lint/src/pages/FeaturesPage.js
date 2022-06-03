import React from 'react';
import { featuresPage } from "../text";
import CO2Section from '../sections/CO2Section';

export default function FeaturesPage() {
  const [cardDisplayed, setCardDisplayed] = React.useState("0");

  const onButtonClick = (event) => {
    const index = event.target.value;
    setCardDisplayed(index);
  };

  return (
    <div className="secondPage">
      <span>
        <h3 className="sectionTitle">
          {featuresPage.title}
        </h3>
        <h6 className="sectionText" style={{ marginBottom: '40px' }}>{featuresPage.text[0]}</h6>
        <div className="blueSection">
          <div className="blueSwitchTextCO2">
            <h5 style={{ marginTop: '20px' }}>{featuresPage.mainFeatures[cardDisplayed].title}</h5>
            <h6 className="blueSectionText">
              {featuresPage.mainFeatures[cardDisplayed].text}
            </h6>
          </div>
          {["0", "1", "2"].map((i) => {
            return <button className={cardDisplayed === i ? "switchButtonClicked" : "switchButton"}
              value={i} key={i} onClick={onButtonClick}>
            </button>
          })}
        </div>
        <h6 className="sectionText" style={{ marginTop: '40px', marginBottom: '120px' }}>{featuresPage.text[1]}</h6>
      </span>
      <CO2Section/>
    </div>
  );
}
