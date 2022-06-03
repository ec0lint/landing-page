import React from 'react';
import { team } from '../text';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

export default function TeamPage() {
  return (
    <div className="secondPage">
        <h3 className="sectionTitle" style={{ marginBottom: '40px' }}>
          {team.title1}
        </h3>
        {team.committee.map((x) => {
          return <span className="photo">
            {x.photo}
            <h5 style={{ marginBottom: '10px' }}>{x.name}</h5>
            <span>
              <a href={x.linkedin} target="_blank" rel="noreferrer">
                <img src={linkedin} alt={x.linkedin} className="icon"/>
              </a>
              {x.github && <a href={x.github} target="_blank" rel="noreferrer">
                <img src={github} alt={x.github} className="icon"/>
              </a>}
            </span>
          </span>;
        })}
        <h6 className="sectionText">{team.intro}</h6>
        <h3 className="sectionTitle" style={{ marginBottom: '40px' }}>
          {team.title2}
        </h3>
        {team.contributors.map((x) => {
          return <span className="photo">
            {x.photo}
            <h5 style={{ marginBottom: '10px' }}>{x.name}</h5>
            <span>
              {x.linkedin && <a href={x.linkedin} target="_blank" rel="noreferrer">
                <img src={linkedin} alt={x.linkedin} className="icon"/>
              </a>}
              {x.github && <a href={x.github} target="_blank" rel="noreferrer">
                <img src={github} alt={x.github} className="icon"/>
              </a>}
            </span>
          </span>;
        })}
        <span className="photo" style={{ marginLeft: '40px' }}>
          <div className="emptyPhoto">
            <h4 style={{ marginTop: '63px' }}>You?</h4>
          </div>
          <h5 style={{ color: "#8ECCEA" }}>Do you want to</h5>
          <h5 style={{ color: "#8ECCEA" }}>join us?</h5>
        </span>
        <h6 className="sectionText" style={{ marginBottom: '60px', color: '#8ECCEA' }}>{team.footer}</h6>
    </div>
  );
}
