import React from "react";
import { initiativesSection } from '../text';

export default function InitiativesSection() {
  const [cardDisplayed, setCardDisplayed] = React.useState(0);

  const [modalId, setModalId] = React.useState<number | undefined>();

  const onButtonClick = (event: any) => {
    const index = event.target.value;
    setCardDisplayed(parseInt(index));
  };

  const onArrowClickLeft = () => {
    var x = cardDisplayed;
    x -= 1;
    setCardDisplayed(x);
  };

  const onArrowClickRight = () => {
    var x = cardDisplayed;
    x += 1;
    setCardDisplayed(x);
  };

  const toggleModal = (modalId?: number) => {

    if (modalId !== undefined) {
        setModalId(modalId);
    }
    else {
      setModalId(undefined);
    }
  }
  
  return (
      <span>
        <h3 className="sectionTitle" style={{ color: '#8ECCEA' }}>{initiativesSection.title}</h3>
        <div className="blueSection">
          <div className="blueSwitchInitiatives">
            {cardDisplayed !== 0 && <button onClick={onArrowClickLeft} className="arrowButton arrowButtonInititives arrowButtonInititivesLeft">
              <h4>{"<"}</h4>
            </button>}
            {initiativesSection.cards[cardDisplayed].map((x: JSX.Element) => {
              return <span className="supportCompany" onClick={() => toggleModal(Number(x.props.id))}>
                {x}
              </span>
            })}
          {cardDisplayed !== 3 && <button onClick={onArrowClickRight} className="arrowButton arrowButtonInititives arrowButtonInititivesRight">
            <h4>{">"}</h4>
          </button>}
          </div>
          {[0, 1, 2, 3].map((i) => {
            return <button className={cardDisplayed === i ? "switchButtonClicked" : "switchButton"}
              value={i} key={i} onClick={onButtonClick}>
            </button>
          })}
        </div>
      {modalId !== undefined && <div className="modal">
        <div className="modal-content">
          <div className="modal-main-content">
            <div className="modal-image">{initiativesSection.modal[modalId].image}</div>
            <div className="modal-main-text">
                <div className="modal-title">{initiativesSection.modal[modalId].title}</div>
                <div className="modal-text">{initiativesSection.modal[modalId].text}</div>
                <div className='modal-link'>{initiativesSection.modal[modalId].link}</div>
            </div>
        </div>
        <span className="close-button" onClick={() => toggleModal()}>&times;</span>
      </div>
      </div>}
    </span>
  );
}
