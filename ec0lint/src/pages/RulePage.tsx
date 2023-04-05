import React from "react";
import { IRuleObj } from "../interfaces";
// import { Link } from "react-router-dom";

export default function RulePage(data: IRuleObj) {
  return (
    <div className="secondPage">
      {/* <h5 className="sectionText">
        <Link to="/features" className="navLinkBlue"><i>{"<- Go back to all features"}</i></Link>
      </h5> */}
      <h3 className="sectionTitle" style={{ textAlign: 'left' }}>
        {data.data.name}
      </h3>
      <h6 className="sectionText" style={{ whiteSpace: 'pre-wrap' }}>{data.data.overview}</h6>
      <h4 className="sectionTitle" style={{ textAlign: 'left', color: '#8ECCEA' }}>
        {data.data.CO2 ? "CO2 reduction" : ""}
      </h4>
      <h6 className="sectionText" style={{ whiteSpace: 'pre-wrap' }}>{data.data.CO2}</h6>
      <h4 className="sectionTitle" style={{ textAlign: 'left', color: '#8ECCEA' }}>
        Examples
      </h4>
      <h6 className="sectionText" style={{ whiteSpace: 'pre-wrap', marginBottom: '50px' }}>{data.data.examples}</h6>
      {/* <h5 className="sectionText" style={{ marginBottom: '50px' }}>
        <Link to="/features" className="navLinkBlue"><i>{"<- Go back to all features"}</i></Link>
      </h5> */}
    </div>
  );
}
