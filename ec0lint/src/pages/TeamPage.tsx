import { team } from '../text';
import github from '../resources/github.svg';
import linkedin from '../resources/linkedin.svg';
import React from "react";

export default function TeamPage() {
  return (
    <div className="secondPage">
      <h3 className="sectionTitle" style={{ marginBottom: '40px' }}>
        {team.title1}
      </h3>
      {team.committee.map((x) => {
        return <span className="teamPhoto">
          {x.photo}
          <h5 style={{ marginBottom: '10px' }}>{x.name}</h5>
          <span>
            <a href={x.linkedin} target="_blank" rel="noreferrer">
              <img src={linkedin} alt={x.linkedin} className="icon" />
            </a>
            {x.github && <a href={x.github} target="_blank" rel="noreferrer">
              <img src={github} alt={x.github} className="icon" />
            </a>}
          </span>
        </span>;
      })}
      <h6 className="sectionText">{team.intro}</h6>
      <h3 className="sectionTitle" style={{ marginBottom: '40px' }}>
        {team.title2}
      </h3>
      <div className='contributorsSection'>
        {team.contributors.map((x) => {
          return <span className="teamPhoto">
            {x.photo}
            <h5 style={{ marginBottom: '10px' }}>{x.name}</h5>
            <span>
              {x.linkedin && <a href={x.linkedin} target="_blank" rel="noreferrer">
                <img src={linkedin} alt={x.linkedin} className="icon" />
              </a>}
              {x.github && <a href={x.github} target="_blank" rel="noreferrer">
                <img src={github} alt={x.github} className="icon" />
              </a>}
            </span>
          </span>;
        })}
      </div>
      <h3 className="sectionTitle" style={{ marginBottom: '40px' }}>
        {team.title3}
      </h3>
      {team.comitters.map((x) => {
        return <span className="teamPhoto">
          {x.photo}
          <h5 style={{ marginBottom: '10px' }}>{x.name}</h5>
          <span>
            {x.linkedin && <a href={x.linkedin} target="_blank" rel="noreferrer">
              <img src={linkedin} alt={x.linkedin} className="icon" />
            </a>}
            {x.github && <a href={x.github} target="_blank" rel="noreferrer">
              <img src={github} alt={x.github} className="icon" />
            </a>}
          </span>
        </span>;
      })}
      <span>
        <div className="emptyPhoto">
          <h4 style={{ marginTop: '63px' }}>You?</h4>
        </div>
        <h5 style={{ color: "#8ECCEA", marginTop: '-20px' }}>Do you want to</h5>
        <h5 style={{ color: "#8ECCEA", marginBottom: '50px' }}>join us?</h5>
      </span>
      <h6 className="sectionText" style={{ marginBottom: '60px', color: '#8ECCEA' }}>{team.footer}</h6>
    </div>
  );
}
