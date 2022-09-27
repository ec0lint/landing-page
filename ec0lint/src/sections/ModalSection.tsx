import React from 'react';
import { initiativesSection } from '../text';
import iec from '../resources/iec.webp';
import helsinki1 from '../resources/helsinki1.webp';
import helsinki2 from '../resources/helsinki2.webp';
import perspektywy from '../resources/perspektywy.webp';
import ing from '../resources/ing.webp';
import reactIndia from '../resources/reactindia.webp';
import weAreDevelopers from '../resources/wearedevelopers.webp';

export default function ModalSection() {

    const toggleModal = () => {
        const modal = document.getElementsByClassName("modal")[0];
        modal.classList.toggle("show-modal");
      }
      
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-main-content">
                    <div className="modal-image"></div>
                    <div className="modal-main-text">
                        <div className="modal-title"></div>
                        <div className="modal-text"></div>
                        <div className='modal-link'></div>
                    </div>
                </div>
                <span className="close-button" onClick={() => toggleModal()}>&times;</span>
            </div>
        </div>
    );
}

function getImageHtml(id: string) {
    switch(id) {
        case "iec":
            return `<img src=${iec}></img>`
        case "helsinki":
            return `<img src=${helsinki1} style="padding-right:10px;"></img><img src=${helsinki2}></img>`
        case "weAreDevelopers":
            return `<img src=${weAreDevelopers}></img>`
        case "perspektywy":
            return `<img src=${perspektywy}></img>`
        case "reactIndia":
            return `<img src=${reactIndia}></img>`
        case "ing":
            return `<img src=${ing}></img>`
        default:
            return "";
    }
}

export function toggleModal(modalId?: string) {
    const modal = document.getElementsByClassName("modal")[0];
    if (modalId) {
      const modalTitle = document.getElementsByClassName("modal-title")[0];
      const modalText = document.getElementsByClassName("modal-text")[0];
      const modalLink = document.getElementsByClassName("modal-link")[0];
      const modalImage = document.getElementsByClassName("modal-image")[0];
      modalTitle.innerHTML = initiativesSection.modal.getTitle(modalId);
      modalText.innerHTML = initiativesSection.modal.getText(modalId);
      modalLink.innerHTML = initiativesSection.modal.getLink(modalId);
      modalImage.innerHTML = getImageHtml(modalId);
    }
    modal.classList.toggle("show-modal");
}