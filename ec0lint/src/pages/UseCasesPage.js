import React from 'react';
import { useCases } from "../text";
import References from '../sections/References';

export default function UseCasesPage() {
  return (
    <div className="secondPage">
        <h3 className="sectionTitle" style={{ textAlign: 'center', color: '#8ECCEA' }}>
          Comming soon
        </h3>
        <h4 className="sectionTitle" style={{ marginBottom: '30px', marginTop: '80px' }}>{useCases.title}</h4>
        {useCases.bulletPoints.map((x, i) => {
          return <span>
              <ul><h5 className="sectionText">{x.title}</h5></ul>
              <h6 className="sectionText">{x.text}</h6>
            </span>
        })}
        <h6 className="sectionText" style={{ marginBottom: '40px', marginTop: '40px' }}>{useCases.footer}</h6>
        <References data={useCases.references} />
    </div>
  );
}
