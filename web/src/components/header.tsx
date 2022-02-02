import { Link } from "gatsby";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Icon from "./icon";
// import { cn } from "../lib/helpers";
// import * as styles from "./header.module.css";
// const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
const Header: React.FC = () => {
  return (
    <>
      <section className="bgImage hero-wrap">
        {/* <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link to="/">{siteTitle}</Link>
        </div>

        <button
          className={styles.toggleNavButton}
          onClick={showNav ? onHideNav : onShowNav}
        >
          <Icon symbol="hamburger" />
        </button>

        <nav className={cn(styles.nav, showNav && styles.showNav)}>
          <ul>
            <li>
              <Link to="/archive/">Archive</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div> */}
        <nav className="autohide navbar navbar-expand-lg bg-transparent">
          <div className="container">
            <Link className="navbar-brand" to="#">
              Read
              <i>it</i>.
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    {" "}
                    Articles{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    {" "}
                    Team{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    {" "}
                    Contact{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="js-fullheight">
          <div className="overlay"></div>
          <div className="container mt-5">
            <div
              className="row no-gutters slider-text js-fullheight align-items-center justify-content-start"
              data-scrollax-parent="true"
            >
              <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                <h2 className="subheading">Hello! Welcome to</h2>
                <h1 className="mb-4 mb-md-0">Readit blog</h1>
                <div className="row">
                  <div className="col-md-7">
                    <div className="text">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                      <div className="down-arrow">
                        {/* <Link to="#" className="mouse-icon">
                      <div className="mouse-wheel">
                        <span className="ion-ios-arrow-round-down"></span>
                      </div>
                    </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
