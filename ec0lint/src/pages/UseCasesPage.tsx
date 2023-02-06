import { useCases } from "../text";
import References from '../sections/References';
import React from "react";
import ModalForm from "../sections/ModalForm";

export default function UseCasesPage() {

  const [modal, setModal] = React.useState(false);
  const Toggle = () => setModal(!modal);


  return (
    <div className="secondPage">
      <h3 className="sectionTitle" style={{ textAlign: 'center', color: '#8ECCEA', marginBottom: '30px' }}>
        Coming soon
      </h3>
      <h5 className="sectionText">We are working on the first use case with Perspektywy Women in Tech. If you would like us to create a greener version of your website please contact us.</h5>
      <button className="mainButton" style={{ margin: '40px auto' }} onClick={() => Toggle()}>GET A USE CASE</button>
      {modal === true && <div className="modal">
        <div className="modal-content">
          <div className="modal-main-text">
            <div className="modal-title">Use Case</div>
            <div className="modal-text">If you want to remodel your site in ecological way, please let us contact.</div>
            <ModalForm />
          </div>
          <span className="close-button" onClick={() => setModal(false)}>&times;</span>
        </div>
      </div>}
      <h4 className="sectionTitle" style={{ marginBottom: '30px', marginTop: '30px', textAlign: 'left' }}>{useCases.title}</h4>
      <h6 className="sectionText"><ul>{useCases.bulletPoints.map((x, i) => {
        return <span>
          <li><h5 style={{ margin: '20px 0' }}>{x.title}</h5></li>
          {x.text}
        </span>
      })}
      </ul></h6>
      <h6 className="sectionText" style={{ marginBottom: '40px', marginTop: '40px' }}>{useCases.footer}</h6>
      <References data={useCases.references} />
    </div>
  );
}
