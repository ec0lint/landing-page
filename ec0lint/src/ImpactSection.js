import React from 'react';
import { impactSection } from './text';

function ImpactSection() {
  const [cardDisplayed, setCardDisplayed] = React.useState(0);

  const onButtonClick = (event) => {
    const index = event.target.value;
    setCardDisplayed(index);
  };

  const onArrowClick = (direction) => {

  };

  return (
      <span>
        <h3>{impactSection.title}</h3>
        <div className="blueSection">
            <h6 className="blueSectionText">{impactSection.cards[0]}
                <u>{impactSection.cards[1]}</u>
            {impactSection.cards[2]}</h6>
            {["0", "1", "2"].map((i) => {
              return <button className={cardDisplayed === i ? "switchButtonClicked" : "switchButton"}
                value={i} onClick={onButtonClick}></button>
            })}
        </div>
    </span>
  );
}

export default ImpactSection;
