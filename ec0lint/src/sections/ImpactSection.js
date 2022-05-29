import React from 'react';
import { impactSection } from '../text';

function ImpactSection() {
  const [cardDisplayed, setCardDisplayed] = React.useState("0");

  const onButtonClick = (event) => {
    const index = event.target.value;
    setCardDisplayed(index);
  };
  
  return (
      <span>
        <h3 className="sectionTitle" style={{ color: '#8ECCEA' }}>{impactSection.title}</h3>
        <div className="blueSection">
          <div className="blueSwitchText">
            <h6 className="blueSectionText">{impactSection.cards[cardDisplayed][0]}
              <u>{impactSection.cards[cardDisplayed][1]}</u>
            {impactSection.cards[cardDisplayed][2]}</h6>
          </div>
          {["0", "1", "2"].map((i) => {
            return <button className={cardDisplayed === i ? "switchButtonClicked" : "switchButton"}
              value={i} key={i} onClick={onButtonClick}>
            </button>
          })}
        </div>
    </span>
  );
}

export default ImpactSection;
