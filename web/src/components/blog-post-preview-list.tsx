import * as styles from "./blog-post-preview-list.module.css";
import BlogPostPreview from "./blog-post-preview";
import { Link } from "gatsby";
import React from "react";

function BlogPostPreviewGrid(props) {
  return (
    <>
      <div className={styles.root}>
        {props.title && <h2 className={styles.headline}>{props.title}</h2>}
        <ul className={styles.grid}>
          {props.nodes &&
            props.nodes.map((node) => (
              <li key={node.id}>
                <BlogPostPreview {...node} isInList />
              </li>
            ))}
        </ul>

        {props.browseMoreHref && (
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <Link to="#">&lt;</Link>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">3</Link>
                  </li>
                  <li>
                    <Link to="#">4</Link>
                  </li>
                  <li>
                    <Link to="#">5</Link>
                  </li>
                  <li>
                    <Link to="#">&gt;</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostPreviewGrid;
