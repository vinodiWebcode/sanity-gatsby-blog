import * as styles from "./blog-post-preview-list.module.css";
import BlogPostPreview from "./blog-post-preview";
import { Link } from "gatsby";
import React from "react";

function BlogPostPreviewGrid(props) {
  return (
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
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostPreviewGrid;

// import { Link } from "gatsby";
// import React from "react";

// const Blog = () => {
//   return (
//     <div>
//       <section className="ftco-section">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="case">
//                 <div className="row">
//                   <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
//                     <Link
//                       to="blog-single.html"
//                       className="img w-100 mb-3 mb-md-0"
//                       // style="background-image:url(images/ximage_1.jpg.pagespeed.ic.ndb4JOHu-q.webp)"
//                     ></Link>
//                   </div>
//                   <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
//                     <div className="text w-100 pl-md-3">
//                       <span className="subheading">Illustration</span>
//                       <h2>
//                         <Link to="blog-single.html">
//                           Build a website in minutes with Adobe Templates
//                         </Link>
//                       </h2>
//                       <ul className="media-social list-unstyled">
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-twitter"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-facebook"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-instagram"></span>
//                           </Link>
//                         </li>
//                       </ul>
//                       <div className="meta">
//                         <p className="mb-0">
//                           <Link to="#">11/13/2019</Link> |{" "}
//                           <Link to="#">12 min read</Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="case">
//                 <div className="row">
//                   <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
//                     <Link
//                       to="blog-single.html"
//                       className="img w-100 mb-3 mb-md-0"
//                       // style="background-image:url(images/ximage_2.jpg.pagespeed.ic.pkTf90Znlu.webp)"
//                     ></Link>
//                   </div>
//                   <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
//                     <div className="text w-100 pl-md-3">
//                       <span className="subheading">Application</span>
//                       <h2>
//                         <Link to="blog-single.html">
//                           Build a website in minutes with Adobe Templates
//                         </Link>
//                       </h2>
//                       <ul className="media-social list-unstyled">
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-twitter"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-facebook"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-instagram"></span>
//                           </Link>
//                         </li>
//                       </ul>
//                       <div className="meta">
//                         <p className="mb-0">
//                           <Link to="#">11/13/2019</Link> |{" "}
//                           <Link to="#">12 min read</Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="case">
//                 <div className="row">
//                   <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
//                     <Link
//                       to="blog-single.html"
//                       className="img w-100 mb-3 mb-md-0"
//                       // style="background-image:url(images/ximage_3.jpg.pagespeed.ic.rARWmZ5Gcd.webp)"
//                     ></Link>
//                   </div>
//                   <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
//                     <div className="text w-100 pl-md-3">
//                       <span className="subheading">Design</span>
//                       <h2>
//                         <Link to="blog-single.html">
//                           Build a website in minutes with Adobe Templates
//                         </Link>
//                       </h2>
//                       <ul className="media-social list-unstyled">
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-twitter"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-facebook"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-instagram"></span>
//                           </Link>
//                         </li>
//                       </ul>
//                       <div className="meta">
//                         <p className="mb-0">
//                           <Link to="#">11/13/2019</Link> |{" "}
//                           <Link to="#">12 min read</Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="case">
//                 <div className="row">
//                   <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
//                     <Link
//                       to="blog-single.html"
//                       className="img w-100 mb-3 mb-md-0"
//                       // style="background-image:url(images/ximage_4.jpg.pagespeed.ic.yg5yuZN2F7.webp)"
//                     ></Link>
//                   </div>
//                   <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
//                     <div className="text w-100 pl-md-3">
//                       <span className="subheading">Illustration</span>
//                       <h2>
//                         <Link to="blog-single.html">
//                           Build a website in minutes with Adobe Templates
//                         </Link>
//                       </h2>
//                       <ul className="media-social list-unstyled">
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-twitter"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-facebook"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-instagram"></span>
//                           </Link>
//                         </li>
//                       </ul>
//                       <div className="meta">
//                         <p className="mb-0">
//                           <Link to="#">11/13/2019</Link> |{" "}
//                           <Link to="#">12 min read</Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="case">
//                 <div className="row">
//                   <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
//                     <Link
//                       to="blog-single.html"
//                       className="img w-100 mb-3 mb-md-0"
//                       // style="background-image:url(images/ximage_5.jpg.pagespeed.ic.QdXddGFXSM.webp)"
//                     ></Link>
//                   </div>
//                   <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
//                     <div className="text w-100 pl-md-3">
//                       <span className="subheading">Illustration</span>
//                       <h2>
//                         <Link to="blog-single.html">
//                           Build a website in minutes with Adobe Templates
//                         </Link>
//                       </h2>
//                       <ul className="media-social list-unstyled">
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-twitter"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-facebook"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-instagram"></span>
//                           </Link>
//                         </li>
//                       </ul>
//                       <div className="meta">
//                         <p className="mb-0">
//                           <Link to="#">11/13/2019</Link> |{" "}
//                           <Link to="#">12 min read</Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="case">
//                 <div className="row">
//                   <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
//                     <Link
//                       to="blog-single.html"
//                       className="img w-100 mb-3 mb-md-0"
//                       // style="background-image:url(images/ximage_6.jpg.pagespeed.ic.RuUDoMGkgx.webp)"
//                     ></Link>
//                   </div>
//                   <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
//                     <div className="text w-100 pl-md-3">
//                       <span className="subheading">Illustration</span>
//                       <h2>
//                         <Link to="blog-single.html">
//                           Build a website in minutes with Adobe Templates
//                         </Link>
//                       </h2>
//                       <ul className="media-social list-unstyled">
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-twitter"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-facebook"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-instagram"></span>
//                           </Link>
//                         </li>
//                       </ul>
//                       <div className="meta">
//                         <p className="mb-0">
//                           <Link to="#">11/13/2019</Link> |{" "}
//                           <Link to="#">12 min read</Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="case">
//                 <div className="row">
//                   <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
//                     <Link
//                       to="blog-single.html"
//                       className="img w-100 mb-3 mb-md-0"
//                       style="background-image:url(images/ximage_7.jpg.pagespeed.ic.Ttuk3_PSqA.webp)"
//                     ></Link>
//                   </div>
//                   <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
//                     <div className="text w-100 pl-md-3">
//                       <span className="subheading">Illustration</span>
//                       <h2>
//                         <Link to="blog-single.html">
//                           Build a website in minutes with Adobe Templates
//                         </Link>
//                       </h2>
//                       <ul className="media-social list-unstyled">
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-twitter"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-facebook"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-instagram"></span>
//                           </Link>
//                         </li>
//                       </ul>
//                       <div className="meta">
//                         <p className="mb-0">
//                           <Link to="#">11/13/2019</Link> |{" "}
//                           <Link to="#">12 min read</Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="case">
//                 <div className="row">
//                   <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
//                     <Link
//                       to="blog-single.html"
//                       className="img w-100 mb-3 mb-md-0"
//                       // style="background-image:url(images/ximage_8.jpg.pagespeed.ic.fjkF9m4QOe.webp)"
//                     ></Link>
//                   </div>
//                   <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
//                     <div className="text w-100 pl-md-3">
//                       <span className="subheading">Illustration</span>
//                       <h2>
//                         <Link to="blog-single.html">
//                           Build a website in minutes with Adobe Templates
//                         </Link>
//                       </h2>
//                       <ul className="media-social list-unstyled">
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-twitter"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-facebook"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-instagram"></span>
//                           </Link>
//                         </li>
//                       </ul>
//                       <div className="meta">
//                         <p className="mb-0">
//                           <Link to="#">11/13/2019</Link> |{" "}
//                           <Link to="#">12 min read</Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="case">
//                 <div className="row">
//                   <div className="col-md-6 col-lg-6 col-xl-8 d-flex">
//                     <Link
//                       to="blog-single.html"
//                       className="img w-100 mb-3 mb-md-0"
//                       // style="background-image:url(images/ximage_9.jpg.pagespeed.ic.mcymwVF5NF.webp)"
//                     ></Link>
//                   </div>
//                   <div className="col-md-6 col-lg-6 col-xl-4 d-flex">
//                     <div className="text w-100 pl-md-3">
//                       <span className="subheading">Illustration</span>
//                       <h2>
//                         <Link to="blog-single.html">
//                           Build a website in minutes with Adobe Templates
//                         </Link>
//                       </h2>
//                       <ul className="media-social list-unstyled">
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-twitter"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-facebook"></span>
//                           </Link>
//                         </li>
//                         <li className="ftco-animate fadeInUp ftco-animated">
//                           <Link to="#">
//                             <span className="icon-instagram"></span>
//                           </Link>
//                         </li>
//                       </ul>
//                       <div className="meta">
//                         <p className="mb-0">
//                           <Link to="#">11/13/2019</Link> |{" "}
//                           <Link to="#">12 min read</Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row mt-5">
//             <div className="col text-center">
//               <div className="block-27">
//                 <ul>
//                   <li>
//                     <Link to="#">&lt;</Link>
//                   </li>
//                   <li className="active">
//                     <span>1</span>
//                   </li>
//                   <li>
//                     <Link to="#">2</Link>
//                   </li>
//                   <li>
//                     <Link to="#">3</Link>
//                   </li>
//                   <li>
//                     <Link to="#">4</Link>
//                   </li>
//                   <li>
//                     <Link to="#">5</Link>
//                   </li>
//                   <li>
//                     <Link to="#">&gt;</Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Blog;
