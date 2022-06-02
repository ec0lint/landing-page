import React from 'react';
import { CO2Calculation } from "../text";
import References from './References';

export default function CO2Section() {

  return (
    <div className="secondPage">
      <h3 className="sectionTitle" style={{ textAlign: 'left' }}>
          {CO2Calculation.title}
      </h3>
      <h6 className="sectionText">{CO2Calculation.intro}</h6>

      <div className="CO2Formula">
        <h4 className="sectionTitle">{CO2Calculation.formula.title}</h4>
        <h6 className="sectionText" style={{ textAlign: 'center', marginBottom: '20px' }}><i>{CO2Calculation.formula.equasion}</i></h6>
        <h6 className="sectionText">{CO2Calculation.formula.description.intro}</h6>
        <ul className="sectionText">
          {CO2Calculation.formula.description.points.map((x, i) => {
            return <li><h6 className="sectionText"><i>{x.name}</i> = {x.description}</h6></li>
          })}
        </ul>
        <h6 className="sectionText">{CO2Calculation.formula.footNote}</h6>
      </div>

      <h5 className="sectionTitle">{CO2Calculation.assumptions.title}</h5>
      <ul className="sectionText">
        {CO2Calculation.assumptions.bulletPoints.map((x, i) => {
          return <li><h6 className="sectionText">{x}</h6></li>
        })}
      </ul>
      <h4 className="sectionTitle">{CO2Calculation.finalRemarks.title}</h4>
      <h6 className="sectionText">{CO2Calculation.finalRemarks.text}</h6>
      <References data={CO2Calculation.references} />
    </div>
  );
}
