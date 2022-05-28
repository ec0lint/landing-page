import React from 'react';
import { impactSection } from './text';

function ImpactSection() {
  const [cardDisplayed, setCardDisplayed] = React.useState(0);

  const onButtonClick = (index) => {

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
        </div>
    </span>
  );
}

export default ImpactSection;
