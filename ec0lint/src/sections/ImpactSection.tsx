import { impactSection } from '../text';
import React from "react";

export default function ImpactSection() {
  const [cardDisplayed, setCardDisplayed] = React.useState(0);

  const onButtonClick = (event: any) => {
    const index = event.target.value;
    setCardDisplayed(parseInt(index));
  };

  const onArrowClickLeft = () => {
    const currentIndex = cardDisplayed;
    const nextIndex = (currentIndex + 2) % 3;
    setCardDisplayed(nextIndex);
  };

  const onArrowClickRight = () => {
    const currentIndex = cardDisplayed;
    const nextIndex = (currentIndex + 1) % 3;
    setCardDisplayed(nextIndex);
  };
  
  return (
      <span>
        <h3 className="sectionTitle" style={{ color: '#8ECCEA' }}>{impactSection.title}</h3>
        <div className="blueSection">
          <div className="blueSwitchTextImpact">
            <button onClick={onArrowClickLeft} className="arrowButton"><h4>{"<"}</h4></button>
            <h6 className="blueSectionText">{impactSection.cards[cardDisplayed][0]}
              <u>{impactSection.cards[cardDisplayed][1]}</u>
            {impactSection.cards[cardDisplayed][2]}</h6>
            <button onClick={onArrowClickRight} className="arrowButton"><h4>{">"}</h4></button>
          </div>
          {[0, 1, 2].map((i) => {
            return <button className={cardDisplayed === i ? "switchButtonClicked" : "switchButton"}
              value={i} key={i} onClick={onButtonClick}>
            </button>
          })}
        </div>
    </span>
  );
}
