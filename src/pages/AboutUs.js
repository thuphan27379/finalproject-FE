import React from "react";
import { Container, Grid } from "@mui/material";

import "../assets/css/main.css";
import "../assets/css/body.css";
import "../assets/css/footer.css";

// /about: about us, contact, cooperation, donate...
const Aboutus = () => {
  //
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          maxWidth: "850px", // "unset!important",
          marginTop: 0,
          width: "95%",
          // backgroundColor: "#000",
          // color: "#fff",
        }}
      >
        <Grid marginTop={"68px"} maxWidth={"60vw"} marginX={"auto"}>
          <div className="homepage">
            {/* <!-- 1 Welcome --> */}
            <div className="homepage-hero">
              <section>
                <h1>All about Domains and Startup</h1>
                <h3 style={{ color: "#0A3161", fontWeight: 700, fontSize: 27 }}>
                  Welcome Entrepreneur!
                </h3>
                {/* ??? */}
                <img
                  // style={{ backgroundColor: "white", width: "500px" }}
                  // backgroundColor="white"
                  src="C:/Users/Public/finalproject-frontend/src/assets/img/domain.png"
                  alt=""
                  width="500px"
                />
                <p>
                  WWW.VNWP.COM
                  <br />
                  <br />
                  Value Name for Web Project
                  <br /> Value Name for World Project
                  <br />
                  <br />
                  A country has a national brand.
                  <br />
                  An individual has a personal brand.
                  <br />
                  A business has a business brand.
                  <br />
                  There are product-service brands.
                  <br />
                  <br />
                  <br /> Name - Brand Name is a necessary condition to start a
                  career, and a sufficient condition is a platform and a method.
                  There are many platforms, many methods, but there is only one
                  name and one brand.
                  <br />
                  <br />
                  <br /> In the digital era, Domain Name is the Brand Name for a
                  product or service (subdomains can also be used instead).
                  There are global brands and regional brands depending on the
                  scope of operations, but it is necessary to standardize for
                  the future if there is development.
                  <br />
                  <br />
                  <br /> A Domain Name must be short, easy to understand, easy
                  to remember, easy to recognize, and easy to express.
                  <br />
                  <br />
                  <br /> VNWP.COM is the place to start your career. A place
                  that gives you the fishing rod, not the fish. A place that
                  gives you the brand name, platform, and method to start your
                  career; the choice is up to you. A place that will accompany
                  you (if needed) and more.
                  <br />
                  <br />
                  <br /> VNWP.COM has the following main activities: <br />
                  <br /> - Some typical Startup projects of VNWP.COM. You can
                  own them or cooperate.
                  <br /> - Brand Names and Startup ideas for you.
                  <br /> - Domain Names as Brand Names for you to choose from.
                  <br />
                  <br />
                  <br /> How VNWP.COM works: <br />
                  <br /> - For typical Startup projects, VNWP.COM will give many
                  incentives to partners who want to transfer ownership or
                  invest in development cooperation. Each Project has its own
                  plan. VNWP.COM will inform and discuss to achieve the best
                  results for VNWP.COM partners.
                  <br /> - For Brand Names and Startup ideas, VNWP.COM has
                  specific information about the value of domain names and the
                  best ideas, including information sources about the market and
                  development direction for you.
                  <br /> - For Domain Names as Brand Names for you to choose
                  from, VNWP.COM has specific information about domain name
                  value and preferential policies for you.
                  <br /> - VNWP.COM uses the highly reputable and guaranteed
                  Escrow.com as a partner for payment and transfer. <br />
                  <br />
                  Our ESCROW: worlddetail@gmail.com
                  <br />
                  <br />
                  <br /> When you enter into a business transaction contract
                  with VNWP.COM, you automatically agree to VNWP.COM's way of
                  operating. Any disputes, if any, will be resolved according to
                  VNWP.COM's way of operating and according to customary
                  practices.
                </p>
              </section>
            </div>

            {/* Mission - vision */}

            {/* <!-- 5 Cooperation --> */}
            <div className="featured-articles">
              <h2>Cooperation and Partners</h2>
              <div className="tile-container">
                <div className="article-tile">
                  <p className="tile-tag">ICANN</p>
                  <h3 className="tile-title">
                    <a href="https://www.icann.org/">https://www.icann.org/</a>
                  </h3>
                  <p>
                    The ICANN80 Policy Forum is now live and taking place in
                    Kigali, Rwanda from 10-13 June 2024. You must be registered
                    and logged in to view the schedule.
                  </p>
                </div>

                <div className="article-tile">
                  <p className="tile-tag">SEDO</p>
                  <h3 className="tile-title">
                    <a href="https://www.sedo.com/">https://www.sedo.com/</a>
                  </h3>
                  <p>
                    Find the perfect web address, or earn money with domains you
                    already own, on the world's largest domain name marketplace.
                    The first address for your online success.
                  </p>
                </div>

                <div className="article-tile">
                  <p className="tile-tag">ONLINENIC</p>
                  <h3 className="tile-title">
                    <a href="https://onlinenic.com/en/">
                      https://onlinenic.com/en/
                    </a>
                  </h3>
                  <p>
                    New gTLDS With hundreds of new gTLDS available, now we have
                    a lot more options to get the right name that fits your
                    business or service. Its more memorable, more meaningful and
                    more relevant.
                  </p>
                </div>

                <div className="article-tile">
                  <p className="tile-tag">ESCROW</p>
                  <h3 className="tile-title">
                    <a href="https://www.escrow.com/">
                      https://www.escrow.com/
                    </a>
                  </h3>
                  <p>
                    Escrow.com is the world's most secure payment method from a
                    counter party risk perspective - safeguarding both buyer and
                    seller, all funds transacted using escrow are kept in trust.
                    Truly secure payments.
                  </p>
                </div>

                <div className="article-tile">
                  <p className="tile-tag">WHOIS</p>
                  <h3 className="tile-title">
                    <a href="https://who.is/">https://who.is/</a>
                  </h3>
                  <p>
                    See Website Information Search the whois database, look up
                    domain and IP owner information, and check out dozens of
                    other statistics.
                  </p>
                </div>

                <div className="article-tile">
                  <p className="tile-tag">DOMAIN APPRAISALS</p>
                  <h3 className="tile-title">
                    <a href="https://sedo.com">https://sedo.com</a>
                  </h3>
                  <p>
                    The question both buyers and sellers ask us is: How much can
                    a domain cost? Our scientifically sound, expert appraisals -
                    for both individual domains and domain portfolios.
                  </p>
                </div>
              </div>
            </div>

            {/* footer menu */}
            <footer id="nav-footer" className="page-footer">
              <div className="page-footer-grid">
                {/* <!-- logo --> */}
                <div className="page-footer-logo-col">
                  <div className="main-logo">
                    <a href="/">
                      <img src="./huongsac-logo.png" alt="" />
                    </a>
                  </div>
                  {/* <!-- slogan --> */}
                  <p>World Wide Web For All</p>
                </div>
                {/* <!-- category footer --> */}
                <div className="page-footer-nav-col-1">
                  <h2 className="footer-nav-heading">Biz Holding</h2>
                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <a href="/">About</a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="/">Blog</a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="/" target="_blank" rel="noopener noreferrer">
                        Careers
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="/">Advertise with us</a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="/">Sitemap</a>
                    </li>
                  </ul>
                </div>
                {/* <!--  --> */}
                <div className="page-footer-nav-col-2">
                  <h2 className="footer-nav-heading">Support</h2>
                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <a className="footer-nav-link" href="/">
                        Business Development
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a className="footer-nav-link" href="/">
                        Online Marketplaces
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a className="footer-nav-link" href="/">
                        Email
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a className="footer-nav-link" href="/">
                        Subdomain
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--  --> */}
                <div className="page-footer-nav-col-3">
                  <h2 className="footer-nav-heading">Communities</h2>
                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <a className="footer-nav-link" href="/">
                        Our community
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a
                        className="footer-nav-link"
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiliates
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a
                        className="footer-nav-link"
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Support
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a
                        className="footer-nav-link"
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chat
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a
                        className="footer-nav-link"
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Social network
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--  --> */}
                <div className="page-footer-nav-col-4">
                  <h2 className="footer-nav-heading">Developers</h2>
                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <a className="footer-nav-link" href="/">
                        Web Technologies
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a className="footer-nav-link" href="/">
                        eCommerce
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a className="footer-nav-link" href="/">
                        IT Project Management
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="/" target="_blank" rel="noopener noreferrer">
                        Programming & Code
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
        </Grid>
      </Container>
    </>
  );
};

export default Aboutus;
