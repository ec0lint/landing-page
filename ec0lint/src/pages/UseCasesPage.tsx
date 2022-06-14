import { useCases } from "../text";
import References from '../sections/References';
import React from "react";

export default function UseCasesPage() {
  return (
    <div className="secondPage">
        <h3 className="sectionTitle" style={{ textAlign: 'center', color: '#8ECCEA' }}>
          Coming soon
        </h3>
        <h4 className="sectionTitle" style={{ marginBottom: '30px', marginTop: '80px', textAlign: 'left' }}>{useCases.title}</h4>
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
