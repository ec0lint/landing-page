import React from 'react';
import iec from '../resources/iec.webp';
import helsinki1 from '../resources/helsinki1.webp';
import helsinki2 from '../resources/helsinki2.webp';
import perspektywy from '../resources/perspektywy.webp';

function SupportSection() {
  
  return (
    <div className="blueSection">
      <h4 style={{ margin: '20px 0' }}>Supported by</h4>
      <div>
        <span className="supportCompany">
          <img src={iec} alt="iec"/>
          <h6>Digital Ecology</h6>
          <h6>Institute</h6>
        </span>
        <span className="supportCompany">
        <img src={helsinki1} alt="helsinki think company" style={{ paddingRight: 0 }}/>
        <img src={helsinki2} alt="think company fund"style={{ paddingLeft: '10px' }}/>
          <div style={{ paddingTop: '10px' }}><h6>{"Helsinki Think Company &"}</h6>
          <h6>Think Company Fund</h6></div>
        </span>
        <span className="supportCompany">
        <img src={perspektywy} alt="perspektywy women in tech"/>
          <h6>Perspektywy</h6>
          <h6>Women in Tech</h6>
        </span>
      </div>
    </div>
  );
}

export default SupportSection;
