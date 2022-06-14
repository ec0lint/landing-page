import React from "react";
import { IRuleObj } from "../interfaces";

export default function RulePage(data: IRuleObj) {
  return (
    <div className="secondPage">
      <h3 className="sectionTitle" style={{ textAlign: 'left' }}>
        {data.data.name}
      </h3>
      <h6 className="sectionText" style={{ whiteSpace: 'pre-wrap' }}>{data.data.overview}</h6>
      <h4 className="sectionTitle" style={{ textAlign: 'left', color: '#8ECCEA' }}>
        CO2 reduction
      </h4>
      <h6 className="sectionText" style={{ whiteSpace: 'pre-wrap' }}>{data.data.CO2}</h6>
      <h4 className="sectionTitle" style={{ textAlign: 'left', color: '#8ECCEA' }}>
        Examples
      </h4>
      <h6 className="sectionText" style={{ whiteSpace: 'pre-wrap', marginBottom: '50px' }}>{data.data.examples}</h6>
    </div>
  );
}
