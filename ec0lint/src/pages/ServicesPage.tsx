import React from "react";
import {servicesPage} from "../text";

export default function ServicesPage() {

    return (
        <div className="secondPage">
      <span>
        <h4 className="sectionTitle" style={{marginBottom: '40px'}}>{servicesPage.text[0]}</h4>
        <h6 className="sectionText" style={{marginBottom: '60px'}}>{servicesPage.text[1]}</h6>
      </span>
            <span>
        <h4 className="sectionTitle" style={{marginBottom: '40px'}}>{servicesPage.text[2]}</h4>
          <span className='serviceCircles'>
          {servicesPage.services.map((x) => {
              return <div className="circleBlog">
                  <div className="circleLink">
                      <h5 style={{marginTop: '15px', marginBottom: '15px'}}>{x.title}</h5>
                      <span style={{fontSize: '14px'}}>{x.text}</span>
                  </div>
              </div>;
          })}
        </span>
      </span>
            <span>
        <h4 className="sectionTitle" style={{marginBottom: '40px'}}>{servicesPage.text[3]}</h4>
          <div>
          <a href={""} target="_blank" rel="noreferrer">
            <button className="mainButton">Book a free <br/>consultation</button>
          </a>
        </div>
      </span>
            <span>
        <h4 className="sectionTitle" style={{marginBottom: '40px'}}>{servicesPage.text[4]}</h4>
           <div className="meetUs">
               {servicesPage.meetUs.map((x: JSX.Element) => {
                   return <span className="supportCompany">
                {x}
              </span>
               })}
          </div>
      </span>
        </div>
    );
}