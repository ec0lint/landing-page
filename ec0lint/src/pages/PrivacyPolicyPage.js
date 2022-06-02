import React from 'react';
import { privacyPolicy } from "../text";

export default function PrivacyPolicyPage() {
  return (
    <div className="secondPage">
        <h3 className="sectionTitle">
          {privacyPolicy.title}
        </h3>
        <h6 className="sectionText" style={{ marginBottom: '40px', whiteSpace: 'pre-wrap' }}>{privacyPolicy.text}</h6>
    </div>
  );
}
