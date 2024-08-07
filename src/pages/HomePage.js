import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Container, Grid } from "@mui/material";
// import { makeStyles } from "@mui/styles/makeStyles"; // npm install @mui/styles --force
// import { StylesProvider } from "@mui/styles";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

import "../assets/css/main.css";
import "../assets/css/body.css";
import "../assets/css/footer.css";

// Outlet (Company) all about company

// const theme = createTheme();
// const useStyles = makeStyles((theme) => ({
//   pageFooter: { // name of the class, trong html
//     borderColor: theme.palette.primary.main, // value, trong body.css
//   },
// }));

// function AppContent(props) {
//   const classes = useStyles();
//   return <Card className={classes.root}>...</Card>;
// }

// In the root of your app
// function App(props) {
//   return (
//     <ThemeProvider theme={theme}>
//       <Component {...props} />
//     </ThemeProvider>
//   );
// }

const HomePage = () => {
  // const classes = useStyles(); // className={classes.pageFooter}

  const { domainsForSale, domainForStartup, isLoading } = useSelector(
    (state) => state.home,
    shallowEqual
  );
  // console.log("domain list", domainsForSale);

  // let arrDomainForSale = domainsForSale.domains;
  // let arrDomainForStartup = domainForStartup.startups;
  // .shuffle()
  // (Math.floor(Math.random())
  // for (let i = 0; i < arrDomain.length; i++) {}
  // let randomDomain = Math.floor(Math.random() * arrDomain.length);
  // randomDomain = arrDomain.splice(0, 5);
  // console.log("splice", randomDomain);

  //
  return (
    <>
      {/* <StylesProvider injectFirst> */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          maxWidth: "850px", // unset!important ?
          marginTop: 0,
          width: "95%",
          // backgroundColor: "#000",
          // color: "#fff",
        }}
      >
        {/* maxWidth={"60vw"} */}
        <Grid marginTop={"68px"} marginX={"auto"}>
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
                  In the digital era, Domain Name is the Brand Name for a
                  product or service (subdomains can also be used instead).
                  There are global brands and regional brands depending on the
                  scope of operations, but it is necessary to standardize for
                  the future if there is development.
                  <br />
                  <br />
                  <br /> VNWP.COM is the place to start your career. A place
                  that gives you the fishing rod, not the fish. A place that
                  gives you the brand name, platform, and method to start your
                  career; the choice is up to you. A place that will accompany
                  you (if needed) and more.
                  <br />
                  <br />
                </p>
              </section>
            </div>

            {/* <!-- 2 Projects --> */}
            {/* link to /project */}
            <div className="featured-articles">
              <h2>
                <a href="/project">Our Projects --- to be our partner</a>
              </h2>
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
                    Freedom is not free! Journalism and Media Social Network,
                    bring real news and information even knowledge to people.
                    Say no with fake news and brainwashed. Make Vietnam Great
                    Again!
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
                    Value Name for Web Project - Value Name for World Project.
                    VNWP.COM is the place to start your Startup. A place the
                    fishing rod is given, not the fish. A place to give you the
                    Brand Name, platform and method to start your Startup, the
                    choice is up to you. A place that will accompany you (if
                    needed) and more.
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
                    Community Network for Ideas and Startup whoever or whatever
                    you are and want to become an Entrepreneur. Don't be afraid!
                    Let's build your dream together and bright up us. "If you're
                    good at something, never do it for free" - Joker.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- 3 Domains for Startup --> */}
            {/* link to /startup */}
            {/*  */}
            <section className="latest-news">
              <h2>
                <a href="/startup">
                  Domains for Startup --- Our Domain Your Startup
                </a>
              </h2>

              <ul className="news-list">
                <li className="news-item">
                  <p className="news-title">
                    {/* <!-- domain name --> */}
                    <span>
                      <p>www.vnfamily.com</p>
                    </span>
                    {/* <!-- idea --> */}
                    <span>
                      <p className="news-source">Vietnam Family</p>
                    </span>
                  </p>
                  {/* <!-- build your startup --> */}
                  <p>
                    <span className="news-date">$1000</span>
                    <a href="/contact" className="request-date">
                      Contact
                    </a>
                  </p>
                </li>

                <li className="news-item">
                  <p className="news-title">
                    {/* <!-- domain name --> */}
                    <span>
                      <p>www.ictcafe.com</p>
                    </span>
                    {/* <!-- idea --> */}
                    <span>
                      <p className="news-source">
                        Information and Communication Technology Cafe
                      </p>
                    </span>
                  </p>
                  {/* <!-- build your startup --> */}
                  <p>
                    <span className="news-date">$1000</span>
                    <a href="/contact" className="request-date">
                      Contact
                    </a>
                  </p>{" "}
                </li>

                <li className="news-item">
                  <p className="news-title">
                    {/* <!-- domain name --> */}
                    <span>
                      <p>www.09az.com</p>
                    </span>
                    {/* <!-- idea --> */}
                    <span>
                      <p className="news-source">0 to 9 & A to Z</p>
                    </span>
                  </p>
                  {/* <!-- build your startup --> */}
                  <p>
                    <span className="news-date">$1000</span>
                    <a href="/contact" className="request-date">
                      Contact
                    </a>
                  </p>{" "}
                </li>

                <li className="news-item">
                  <p className="news-title">
                    {/* <!-- domain name --> */}
                    <span>
                      <p>www.vnkids.com</p>
                    </span>
                    {/* <!-- idea --> */}
                    <span>
                      <p className="news-source">Vietnam Kids</p>
                    </span>
                  </p>
                  {/* <!-- build your startup --> */}
                  <p>
                    <span className="news-date">$1000</span>
                    <a href="/contact" className="request-date">
                      Contact
                    </a>
                  </p>{" "}
                </li>

                <li className="news-item">
                  <p className="news-title">
                    {/* <!-- domain name --> */}
                    <span>
                      <p>www.vietedu.com</p>
                    </span>
                    {/* <!-- idea --> */}
                    <span>
                      <p className="news-source">Vietnam Education</p>
                    </span>
                  </p>
                  {/* <!-- build your startup --> */}
                  <p>
                    <span className="news-date">$1000</span>
                    <a href="/contact" className="request-date">
                      Contact
                    </a>
                  </p>{" "}
                </li>
              </ul>
            </section>

            {/* <!-- 4 Domains for sale --> */}
            {/* link to /domain */}
            <section className="recent-contributions">
              <h2>
                <a href="/domain">Domains for Sale and much more </a>
              </h2>

              <ul className="contribution-list">
                <li className="request-item">
                  <p className="request-title">
                    {/* <!-- domain name --> */}
                    <p>www.hungthinh.com</p>
                    {/* <!-- description --> */}
                    <span>
                      <p className="request-repo">Hung Thinh</p>
                    </span>
                  </p>
                  {/* <!-- price --> */}
                  <p>
                    <span className="news-date">$1000</span>
                    <a href="/contact" className="request-date">
                      Contact
                    </a>
                  </p>{" "}
                </li>

                <li className="request-item">
                  <p className="request-title">
                    {/* <!-- domain name --> */}
                    <p>www.ngocsuong.com</p>
                    {/* <!-- description --> */}
                    <span>
                      <p className="request-repo">Ngoc Suong</p>
                    </span>
                  </p>
                  {/* <!-- price --> */}
                  <p>
                    <span className="news-date">$1000</span>
                    <a href="/contact" className="request-date">
                      Contact
                    </a>
                  </p>{" "}
                </li>

                <li className="request-item">
                  <p className="request-title">
                    {/* <!-- domain name --> */}
                    <p>www.hongduc.com</p>
                    {/* <!-- description --> */}
                    <span>
                      <p className="request-repo">Hong Duc</p>
                    </span>
                  </p>
                  {/* <!-- price --> */}
                  <p>
                    <span className="news-date">$1000</span>
                    <a href="/contact" className="request-date">
                      Contact
                    </a>
                  </p>{" "}
                </li>

                <li className="request-item">
                  <p className="request-title">
                    {/* <!-- domain name --> */}
                    <p>www.ngocle.com</p>
                    {/* <!-- description --> */}
                    <span>
                      <p className="request-repo">Ngoc Le</p>
                    </span>
                  </p>
                  {/* <!-- price --> */}
                  <p>
                    <span className="news-date">$1000</span>
                    <a href="/contact" className="request-date">
                      Contact
                    </a>
                  </p>{" "}
                </li>

                <li className="request-item">
                  <p className="request-title">
                    {/* <!-- domain name --> */}
                    <p>www.dailoc.com</p>
                    {/* <!-- description --> */}
                    <span>
                      <p className="request-repo">Dai Loc</p>
                    </span>
                  </p>
                  {/* <!-- price --> */}
                  <p>
                    <span className="news-date">$1000</span>
                    <a href="/contact" className="request-date">
                      Contact
                    </a>
                  </p>{" "}
                </li>
              </ul>
            </section>

            {/* <!-- 5 Cooperation --> */}
            <div className="featured-articles">
              <h2>Cooperation and Partners</h2>
              <div className="tile-container">
                <div className="article-tile">
                  <p className="tile-tag">ICANN</p>
                  <h3 className="tile-title">
                    <a className="title" href="https://www.icann.org/">
                      https://www.icann.org/
                    </a>
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
      {/* </StylesProvider> */}
    </>
  );
};

export default HomePage;
