/* eslint-disable import/no-unresolved */
import * as styles from "./blog-post-preview-grid.module.css";
import BlogPostPreview from "./blog-post-preview";
import { Link } from "gatsby";
import React from "react";

function BlogPostPreviewGrid(props: {
  title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
  nodes: any[];
  browseMoreHref: string;
}) {
  return (
    <>
      <div className={styles.root}>
        {props.title && <h2 className={styles.headline}>{props.title}</h2>}
        <ul className={styles.grid}>
          {props.nodes &&
            props.nodes.map((node: { id: React.Key }) => (
              <li key={node.id}>
                <BlogPostPreview {...node} />
              </li>
            ))}
        </ul>
        {props.browseMoreHref && (
          <div className={styles.browseMoreNav}>
            <Link to={props.browseMoreHref}>Browse more</Link>
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
