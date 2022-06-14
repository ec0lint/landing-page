import React from "react";
import { Link } from "react-router-dom";
import References from '../sections/References';
import { IBlogObj } from "../interfaces";

export default function BlogPostPage(data: IBlogObj) {
  return (
    <div className="secondPage">
      <h5 className="sectionText">
        <Link to="/blog" className="navLinkBlue"><i>{"<- Go back to all posts"}</i></Link>
      </h5>
      <h3 className="sectionTitle" style={{ textAlign: 'left' }}>
        {data.data.title}
      </h3>
      <div style={{ marginBottom: '50px' }}>
        {data.data.text.map((x) => {
          return <h6 className="sectionText" style={{ marginBottom: '20px' }}>{x}</h6>;
        })}
      </div>
      <h5 className="sectionText" style={{ marginBottom: '50px' }}>
        <Link to="/blog" className="navLinkBlue"><i>{"<- Go back to all posts"}</i></Link>
      </h5>
      {data.data.references && <References data={data.data.references} />}
    </div>
  );
}
