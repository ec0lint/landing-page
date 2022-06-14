import React from "react";
import { blog } from '../text';
import { Link } from "react-router-dom";

export default function BlogPage() {
  return (
    <div className="secondPage">
        <h3 className="sectionTitle" style={{ textAlign: 'left', marginBottom: '40px' }}>
          {blog.title}
        </h3>
        {blog.posts.map((x) => {
          return <div className="circleBlog">
            <Link to={`/blog/${x.url}`} className="navLinkBlack" onClick={() => window.scrollTo(0, 0)}><div className="circleLink">
              <h5 style={{ marginTop: '75px' }}>{x.title}</h5>
            </div></Link>
          </div>;
        })}
    </div>
  );
}
