/* eslint-disable import/no-unresolved */
import * as styles from "./blog-post-preview.module.css";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
// import PortableText from "./portableText";
import React from "react";
// import { format } from "date-fns";
import { imageUrlFor } from "../lib/image-url";

// import { responsiveTitle3 } from "./typography.module.css";

function BlogPostPreview(props) {
  return (
    <>
      <div className={styles.gridListdiv}>
        <Link
          className={props.isInList ? styles.inList : styles.inGrid}
          to={getBlogUrl(props.publishedAt, props.slug.current)}
        >
          <div className={styles.gridList}>
            {props.mainImage && props.mainImage.asset && (
              <img
                src={imageUrlFor(buildImageObj(props.mainImage))
                  .width(600)
                  .height(Math.floor((9 / 16) * 600))
                  .auto("format")
                  .url()}
                alt={props.mainImage.alt}
              />
            )}
          </div>
          {/* <div className={styles.text}>
    <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
    {props._rawExcerpt && (
      <div className={styles.excerpt}>
        <PortableText blocks={props._rawExcerpt} />
      </div>
    )}
    <div className={styles.date}>
      {format(new Date(props.publishedAt), "MMMM Mo, yyyy")}
    </div>
  </div> */}
        </Link>
        <div className={styles.gridList}>
          <div className="text w-100 pl-md-3">
            <span className={styles.subheading}>Illustration</span>
            <h2 className={styles.subh}>
              <Link to="blog-single.html">
                Build a website in minutes with Adobe Templates
              </Link>
            </h2>
            <ul className={"${styles.listunstyled} ${styles.mediasocial}"}>
              <li className="ftco-animate fadeInUp ftco-animated">
                <Link to="#">
                  <span className="icon-twitter"></span>
                </Link>
              </li>
              <li className="ftco-animate fadeInUp ftco-animated">
                <Link to="#">
                  <span className="icon-facebook"></span>
                </Link>
              </li>
              <li className="ftco-animate fadeInUp ftco-animated">
                <Link to="#">
                  <span className="icon-instagram"></span>
                </Link>
              </li>
            </ul>
            <div className={styles.meta}>
              <p className="mb-0">
                <Link to="#">11/13/2019</Link> | <Link to="#">12 min read</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostPreview;
