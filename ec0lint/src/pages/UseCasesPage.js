import React from 'react';
import { useCases } from "../text";

export default function UseCasesPage() {
  return (
    <div className="secondPage">
        <h3 className="sectionTitle" style={{ textAlign: 'center', color: '#8ECCEA' }}>
          Comming soon
        </h3>
        <h4>{useCases.title}</h4>
        {/* <h6 className="sectionText" style={{ marginBottom: '40px' }}>{privacyPolicy.text}</h6> */}
    </div>
  );
}
