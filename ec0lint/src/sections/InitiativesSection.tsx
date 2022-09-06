import React from "react";
import { initiativesSection } from '../text';

export default function InitiativesSection() {
  const [cardDisplayed, setCardDisplayed] = React.useState(0);

  const onButtonClick = (event: any) => {
    const index = event.target.value;
    setCardDisplayed(parseInt(index));
  };

  const onArrowClickLeft = () => {
    setCardDisplayed(0);
  };

  const onArrowClickRight = () => {
    setCardDisplayed(1);
  };
  
  return (
      <span>
        <h3 className="sectionTitle" style={{ color: '#8ECCEA' }}>{initiativesSection.title}</h3>
        <div className="blueSection">
          <div className="blueSwitchInitiatives">
            {cardDisplayed === 1 && <button onClick={onArrowClickLeft} className="arrowButton arrowButtonInititives arrowButtonInititivesLeft">
              <h4>{"<"}</h4>
            </button>}
            {initiativesSection.cards[cardDisplayed].map((x: JSX.Element) => {
              return <span className="supportCompany">
                {x}
              </span>
            })}
            {cardDisplayed === 0 && <button onClick={onArrowClickRight} className="arrowButton arrowButtonInititives arrowButtonInititivesRight">
              <h4>{">"}</h4>
            </button>}
          </div>
          {[0, 1].map((i) => {
            return <button className={cardDisplayed === i ? "switchButtonClicked" : "switchButton"}
              value={i} key={i} onClick={onButtonClick}>
            </button>
          })}
        </div>
    </span>
  );
}
