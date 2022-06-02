import React from 'react';
import References from '../sections/References';

export default function BlogPostPage(data) {
  return (
    <div className="secondPage">
      <h3 className="sectionTitle">
        {data.data.title}
      </h3>
      <div style={{ marginBottom: '50px' }}>
        {data.data.text.map((x) => {
          return <h6 className="sectionText" style={{ marginBottom: '20px' }}>{x}</h6>;
        })}
      </div>
      <References data={data.data.references} />
    </div>
  );
}
