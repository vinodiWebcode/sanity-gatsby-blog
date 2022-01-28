/* eslint-disable import/no-unresolved */
import React, { ReactNode } from "react";
import Header from "./header";

import "../styles/layout.css";
import * as styles from "./layout.module.css";
import { Link } from "gatsby";

type AppProps = {
  children: ReactNode;
  onHideNav: string;
  onShowNav: string;
  showNav: string;
  siteTitle: string;
};
const Layout = ({
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
}: AppProps) => (
  <>
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <div className={styles.content}>{children}</div>
    {/* <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Built with{" "}
          <Link to="https://www.sanity.io">Sanity</Link> &amp;{" "}
          <Link to="https://www.gatsbyjs.org">Gatsby</Link>
        </div>
      </div>
    </footer> */}

    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="logo">
                <Link to="#">
                  Read<span>it</span>.
                </Link>
              </h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate fadeInUp ftco-animated">
                  <Link to="#">
                    <span className="icon-twitter">
                      <i className="bi bi-twitter"></i>
                    </span>
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
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">latest News</h2>
              <div className="block-21 mb-4 d-flex">
                <Link to="#" className="img mr-4 rounded newsbgImg2"></Link>
                <div className="text">
                  <h3 className="heading">
                    <Link to="#">
                      Even the all-powerful Pointing has no control about
                    </Link>
                  </h3>
                  <div className="meta d-flex">
                    <div>
                      <Link to="#"> Oct. 16, 2019</Link>
                    </div>
                    <div>
                      <Link to="#"> Admin</Link>
                    </div>
                    <div>
                      <Link to="#"> 19</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <Link to="#" className="img mr-4 rounded newsbgImg"></Link>
                <div className="text">
                  <h3 className="heading">
                    <Link to="#">
                      Even the all-powerful Pointing has no control about
                    </Link>
                  </h3>
                  <div className="meta d-flex">
                    <div>
                      <Link to="#"> Oct. 16, 2019</Link>
                    </div>
                    <div>
                      <Link to="#"> Admin</Link>
                    </div>
                    <div>
                      <Link to="#"> 19</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Information</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="#" className="py-1 d-block">
                    <span className="ion-ios-arrow-forward mr-3">&#62;</span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#" className="py-1 d-block">
                    <span className="ion-ios-arrow-forward mr-3">&#62;</span>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className="py-1 d-block">
                    <span className="ion-ios-arrow-forward mr-3">&#62;</span>
                    Articles
                  </Link>
                </li>
                <li>
                  <Link to="#" className="py-1 d-block">
                    <span className="ion-ios-arrow-forward mr-3">&#62;</span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker">&#9742;</span>
                    <span className="text">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="icon icon-phone">&#9742;</span>
                      <span className="text">+2 392 3929 210</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="icon icon-envelope">&#9990;</span>
                      <span className="text">info@yourdomain.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright ©
              <script>document.write(new Date().getFullYear());</script>2022 All
              rights reserved | This template is made with{" "}
              <i className="icon-heart color-danger" aria-hidden="true"></i> by{" "}
              <Link to="https://colorlib.com" target="_blank" rel="noreferrer">
                Colorlib
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
