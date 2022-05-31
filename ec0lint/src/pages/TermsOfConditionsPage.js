import React from 'react';
import { termsOfConditions } from "../text";

export default function TermsOfConditionsPage() {
  return (
    <div className="secondPage">
        <h3 className="sectionTitle" style={{ textAlign: 'left' }}>
          {termsOfConditions.title}
        </h3>
        <h6 className="sectionText" style={{ marginBottom: '40px' }}>{termsOfConditions.text}</h6>
    </div>
  );
}
