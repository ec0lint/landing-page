import React from "react";
import { whySection, ec0lintIsSection, gitHubUrl, donateSection, references, donateUrl, initiativesSection } from '../text';
import prototype from '../resources/prototype.webp';
import ImpactSection from '../sections/ImpactSection';
import SupportSection from '../sections/InitiativesSection';
import { banner } from '../text';
import References from '../sections/References';

function MainPage() {

  return (
    <div>
        <div>
          <h1 className="logo">{banner.logo}</h1>
          <span className="logo">
            <h6 className="intro">{banner.goal}</h6>
            <h2 className="introEc0lint">{banner.name}</h2>
          </span>
        </div>
        <h3 className="firstHeader">{whySection.title}</h3>
        <h6 className="sectionText">{whySection.text[0]}<u>{whySection.text[1]}</u>{whySection.text[2]}</h6>
        <h3 className="sectionTitle" style={{ marginTop: '80px' }}>{ec0lintIsSection.title}</h3>
        <h6 className="sectionText">{ec0lintIsSection.text}</h6>
        <img src={prototype} alt="prototype" className="prototype" />
        <div>
          <a href={gitHubUrl} target="_blank" rel="noreferrer">
            <button className="mainButton">DOWNLOAD</button>
          </a>
        </div>
        <ImpactSection/>
        <h6 className="sectionText" style={{ paddingTop: '70px' }}>{donateSection}</h6>
        <div>
          <a href={donateUrl} target="_blank" rel="noreferrer">
            <button className="mainButton">{"DONATE [soon]"}</button>
          </a>
        </div>
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => toggleModal()}>&times;</span>
            <h3 className="modal-title"></h3>
            <span className="modal-text"></span>
          </div>
        </div>
        <SupportSection/>
        <h4>Used by</h4>
        <div className="circle"><h3>You?</h3></div>
        <References data={references} />
    </div>
  );
}

export function toggleModal(modalId?: string) {
  const modal = document.getElementsByClassName("modal")[0];
  if (modalId) {
    const modalTitle = document.getElementsByClassName("modal-title")[0];
    const modalText = document.getElementsByClassName("modal-text")[0];
    modalTitle.innerHTML = initiativesSection.modal.iec.title;
    modalText.innerHTML = initiativesSection.modal.iec.text;
  }
  modal.classList.toggle("show-modal");
}

export default MainPage;
