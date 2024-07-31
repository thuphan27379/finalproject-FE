import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Container, Grid, Stack } from "@mui/material";

import { getDomainForSale } from "../features/home/homeSlice";

// import "../assets/css/main.css";
// import "../assets/css/reset.css";
import "../assets/css/body.css";
import "../assets/css/footer.css";

// Outlet (Company) all about company
// link to /about, /project, /startup, /domain
const HomePage = () => {
  const { domainsForSale, domainForStartup, isLoading } = useSelector(
    (state) => state.home,
    shallowEqual
  );
  // console.log("domain list", domainsForSale);

  // let arrDomainForSale = domainsForSale.domains;
  // let arrDomainForStartup = domainsForStartup.startups;
  // // .shuffle()
  // // (Math.floor(Math.random())
  // for (let i = 0; i < arrDomain.length; i++) {}
  // let randomDomain = Math.floor(Math.random() * arrDomain.length);
  // randomDomain = arrDomain.slice(0, 5);
  // console.log("slice", randomDomain);

  //
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          maxWidth: "unset!important",
          marginTop: 0,
          backgroundColor: "#000",
          color: "white",
          width: "95%",
        }}
      >
        <Grid marginTop={"68px"} maxWidth={"60vw"} marginX={"auto"}>
          <div className="homepage">
            {/* <!-- 1 Welcome --> */}
            <div className="homepage-hero dark">
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
                  <br /> Name - Brand Name is a necessary condition to start a
                  startup, and a sufficient condition is a platform and a
                  method. There are many platforms, many methods, but the Name
                  and Brand Name are only one.
                  <br />
                  <br />
                  <br /> In the digital era, Domain Name is the Brand Name for a
                  product or service (subdomain can also be used instead). There
                  are global brands and regional brands depending on the scope
                  of operations, but it is necessary to standardize for the
                  future if there is development.
                  <br />
                  <br />
                  <br /> The Domain Name must be short, easy to understand, easy
                  to remember, easy to recognize, and easy to express.
                  <br />
                  <br />
                  <br /> VNWP.COM is the place to start your Startup. A place
                  the fishing rod is given, not the fish. A place to give you
                  the Brand Name, platform and method to start your Startup, the
                  choice is up to you. A place that will accompany you (if
                  needed) and more...
                  <br />
                  <br />
                  <br /> VNWP.COM has the following main activities: <br />
                  <br /> - Some typical Startup projects of VNWP.COM. You can
                  own it or cooperate.
                  <br /> - Brand Names and Startup ideas for you.
                  <br /> - Domain Names as Brand Names for you to choose.
                  <br />
                  <br />
                  <br /> How VNWP.COM works: <br />
                  <br /> - For typical Startup projects, VNWP.COM will give many
                  incentives to partners who want to transfer ownership or
                  invest in development cooperation. Each project has its own
                  plan. VNWP.COM will inform and discuss to achieve the best
                  results for VNWP.COM partners.
                  <br /> - For brand Domain Names and Startup ideas, VNWP.COM
                  has specific information about domain name value and the best
                  ideas, including information sources about the market and
                  development direction for you.
                  <br /> - For Domain Names as Brand Names for you to choose,
                  VNWP.COM has specific information about domain name value and
                  preferential policies for you. VNWP.COM uses the highly
                  reputable and guaranteed Escrow.com and SEDO.COM as a partner
                  for payment and transfer domain name.
                  <br />
                  <br />
                  Our ESCROW: worlddetail@gmail.com
                  <br />
                  <br />
                  <br /> Agreement of use: When you enter into an economic
                  transaction contract with VNWP.COM, you automatically agree to
                  VNWP.COM way of operating. Any disputes, if any, will be
                  resolved according to VNWP.COM way of operating and according
                  to customary practices.
                </p>
              </section>
            </div>

            {/* <!-- 2 Projects --> */}
            {/* link to /project */}
            <div className="featured-articles">
              <h2>Our Projects --- to be our partner</h2>
              <div className="tile-container">
                <div className="article-tile">
                  {/* <!-- domain.com --> */}
                  <a href="/" className="tile-tag">
                    www.OVOP.com .org .net
                  </a>
                  {/* <!-- description --> */}
                  <h3 className="tile-title">
                    <p>One Village One Product</p>
                  </h3>
                  {/* <!-- idea --> */}
                  <p>
                    All about local special product and service, famous and
                    unique scenic and sightseeing of Vietnam, Asia and around
                    the world. The best source for you to visit and experiencing
                    in your next travel plan.
                  </p>
                </div>

                <div className="article-tile">
                  <a href="/" className="tile-tag">
                    www.SeeChannel.com .org
                  </a>
                  <h3 className="tile-title">
                    <p>The truth way you see the world</p>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Expedita ab officia vel distinctio dicta tempore temporibus
                    molestiae natus quod, praesentium accusamus, consequuntur
                    perferendis pariatur magni quaerat provident similique.
                    Quasi, sapiente.
                  </p>
                </div>

                <div className="article-tile">
                  <a href="/" className="tile-tag">
                    www.Glonet.com .org
                  </a>
                  <h3 className="tile-title">
                    <p>Global networking for everyone</p>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Culpa hic exercitationem possimus necessitatibus quas
                    repellat quisquam aperiam. Adipisci, quaerat consequuntur
                    eius molestias, deleniti natus ullam explicabo sint nesciunt
                    sequi facilis.
                  </p>
                </div>

                <div className="article-tile">
                  <a href="/" className="tile-tag">
                    www.VNWP.com
                  </a>
                  <h3 className="tile-title">
                    <p>Vietnam Web Portal</p>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit, omnis numquam. Perspiciatis ad error nobis officia
                    laudantium. Porro rem magni excepturi iure illo esse
                    molestiae reiciendis ipsa, qui quae nisi.
                  </p>
                </div>

                <div className="article-tile">
                  <a href="/" className="tile-tag">
                    www.VNStar.com
                  </a>
                  <h3 className="tile-title">
                    <p>Startup Community</p>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Culpa hic exercitationem possimus necessitatibus quas
                    repellat quisquam aperiam. Adipisci, quaerat consequuntur
                    eius molestias, deleniti natus ullam explicabo sint nesciunt
                    sequi facilis.
                  </p>
                </div>

                <div className="article-tile">
                  <a href="/" className="tile-tag">
                    www.DotSponsor.com
                  </a>
                  <h3 className="tile-title">
                    <p>Chuong trinh Tai tro Ten Mien cho Startup</p>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Culpa hic exercitationem possimus necessitatibus quas
                    repellat quisquam aperiam. Adipisci, quaerat consequuntur
                    eius molestias, deleniti natus ullam explicabo sint nesciunt
                    sequi facilis.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- 3 Domains for Startup --> */}
            {/* link to /startup */}
            {/*  */}
            <section className="latest-news">
              <h2>Domains for Startup --- Our Domain Your Startup</h2>

              <ul className="news-list">
                {/* domainForStartup.splice(0, 5) */}
                <li className="news-item">
                  {/* <!-- idea --> */}
                  <p className="news-title">
                    <span>
                      <a href="/">Lift-off: The Curriculum launch</a>
                    </span>
                    {/* <!-- domain name --> */}
                    <span>
                      <a className="news-source" href="/">
                        developer.mozilla.org
                      </a>
                    </span>
                  </p>
                  {/* <!-- build your startup --> */}
                  <span className="news-date">$ $ $</span>
                </li>

                <li className="news-item">
                  <p className="news-title">
                    <span>
                      <a href="/">Baseline &#x27;s evolution on</a>
                    </span>
                    <span>
                      <a className="news-source" href="/">
                        developer.mozilla.org
                      </a>
                    </span>
                  </p>
                  <span className="news-date">$ $ $</span>
                </li>

                <li className="news-item">
                  <p className="news-title">
                    <span>
                      <a href="/">
                        Introducing the Playground: Bring your code to life!
                      </a>
                    </span>
                    <span>
                      <a className="news-source" href="/">
                        developer.mozilla.org
                      </a>
                    </span>
                  </p>
                  <span className="news-date">$ $ $</span>
                </li>

                <li className="news-item">
                  <p className="news-title">
                    <span>
                      <a href="/">Lift-off: The Curriculum launch</a>
                    </span>
                    <span>
                      <a className="news-source" href="/">
                        developer.mozilla.org
                      </a>
                    </span>
                  </p>
                  <span className="news-date">$ $ $</span>
                </li>

                <li className="news-item">
                  <p className="news-title">
                    <span>
                      <a href="/">Baseline &#x27;s evolution on</a>
                    </span>
                    <span>
                      <a className="news-source" href="/">
                        developer.mozilla.org
                      </a>
                    </span>
                  </p>
                  <span className="news-date">$ $ $</span>
                </li>
              </ul>
            </section>

            {/* <!-- 4 Domains for sale --> */}
            {/* link to /domain */}
            <section className="recent-contributions">
              <h2>Domains for Sale and much more</h2>

              <ul className="contribution-list">
                {/* .splice(0, 5) */}
                <li className="request-item">
                  <p className="request-title">
                    {/* <!-- domain name --> */}
                    <a href="/">Fix indexOf() and lastIndexOf()</a>
                    {/* <!-- description --> */}
                    <span>
                      <a className="request-repo" href="/">
                        hello
                      </a>
                    </span>
                  </p>
                  {/* <!-- price --> */}
                  <span className="request-date">$ $ $</span>
                </li>

                <li className="request-item">
                  <p className="request-title">
                    <a href="/">
                      Redirect pathway to Curriculum and remove links to it
                    </a>
                    <span>
                      <a className="request-repo" href="/">
                        hello
                      </a>
                    </span>
                  </p>
                  <span className="request-date">$ $ $</span>
                </li>

                <li className="request-item">
                  <p className="request-title">
                    <a href="/">Web/Performance/Speculative_loading</a>
                    <span>
                      <a className="request-repo" href="/">
                        hello
                      </a>
                    </span>
                  </p>
                  <span className="request-date">$ $ $</span>
                </li>

                <li className="request-item">
                  <p className="request-title">
                    <a href="/">Fix of stylesheet load events example</a>
                    <span>
                      <a className="request-repo" href="/">
                        hello
                      </a>
                    </span>
                  </p>
                  <span className="request-date">$ $ $</span>
                </li>

                <li className="request-item">
                  <p className="request-title">
                    <a href="/">chore(zh-cn): sync translate content</a>
                    <span>
                      <a className="request-repo" href="/">
                        hello
                      </a>
                    </span>
                  </p>
                  <span className="request-date">$ $ $</span>
                </li>
              </ul>
            </section>

            {/* <!-- 5 Cooperation --> */}
            {/* link to /about */}
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
                    With Escrow.com you can buy and sell anything safely without
                    the risk of chargebacks. Truly secure payments.
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
                    The world's leading platform for domain buyers and sellers.
                    The first address for your online success.
                  </p>
                </div>
              </div>
            </div>

            {/* footer menu */}
            {/* link to /about */}
            <footer id="nav-footer" className="page-footer">
              <div className="page-footer-grid">
                {/* <!-- logo --> */}
                <div className="page-footer-logo-col">
                  <div className="mainlogo">
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

export default HomePage;
