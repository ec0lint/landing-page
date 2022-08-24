import React from "react";
import { featuresPage, features } from "../text";
import CO2Section from '../sections/CO2Section';
import { Link } from "react-router-dom";

export default function FeaturesPage() {
  const [cardDisplayed, setCardDisplayed] = React.useState(0);

  const onButtonClick = (event: any) => {
    const index = parseInt(event.target.value);
    setCardDisplayed(index);
  };

  const onArrowClickLeft = () => {
    onArrowClick(2);
  };

  const onArrowClickRight = () => {
    onArrowClick(1);
  };

  const onArrowClick = (shift: number) => {
    const currentIndex = cardDisplayed;
    const nextIndex = (currentIndex + shift) % 3;
    setCardDisplayed(nextIndex);
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
            <button onClick={onArrowClickLeft} className="arrowButton arrowButtonLeftCO2"><h4>{"<"}</h4></button>
            <h5 style={{ marginTop: '20px' }}>{featuresPage.mainFeatures[cardDisplayed].title}</h5>
            <h6 className="blueSectionText">
              {featuresPage.mainFeatures[cardDisplayed].text}
            </h6>
            <button onClick={onArrowClickRight} className="arrowButton"><h4>{">"}</h4></button>
            <div>
              <Link to={`/features${featuresPage.mainFeatures[cardDisplayed].url}`}>
                <button className="docsButton" onClick={() => window.scrollTo(0, 0)}>DOCUMENTATION</button>
              </Link>
            </div>
          </div>
          {[0, 1, 2].map((i) => {
            return <button className={cardDisplayed === i ? "switchButtonClicked" : "switchButton"}
              value={i} key={i} onClick={onButtonClick}>
            </button>
          })}
        </div>
        <h6 className="sectionText" style={{ marginTop: '40px', marginBottom: '120px' }}>{featuresPage.text[1]}</h6>
        <h3 className="sectionTitle">{featuresPage.allFeaturesTitle}</h3>
        <h6 className="sectionText"><ul>
          {features.map(x => <li style={{ paddingTop: '10px' }}>
            <Link to={`${x.name}`} className="link">{x.name}</Link>
          </li>)}
        </ul></h6>
      </span>
      <CO2Section/>
    </div>
  );
}
