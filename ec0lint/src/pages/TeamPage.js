import React from 'react';
import { team } from '../text';

export default function TeamPage() {
  return (
    <div className="secondPage">
        <h3 className="sectionTitle" style={{ marginBottom: '40px' }}>
          {team.title1}
        </h3>
        {team.committee.map((x) => {
          return <span className="photo">
            {x.photo}
            <h5>{x.name}</h5>
          </span>;
        })}
        <h6 className="sectionText">{team.intro}</h6>
        <h3 className="sectionTitle" style={{ marginBottom: '40px' }}>
          {team.title2}
        </h3>
        {team.contributors.map((x) => {
          return <span className="photo">
            {x.photo}
            <h5>{x.name}</h5>
          </span>;
        })}
        <span className="photo">
            <div className="emptyPhoto">
              <h4>You?</h4>
            </div>
            <h5 style={{ color: "#8ECCEA" }}>Do you want to join us?</h5>
          </span>
        <h6 className="sectionText">{team.footer}</h6>
    </div>
  );
}
