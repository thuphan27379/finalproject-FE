import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";

import "../assets/css/main.css";
import "../assets/css/body.css";
import "../assets/css/footer.css";

// Outlet (Company) all about company
const HomePage = () => {
  const { domainsForSale, domainForStartup, isLoading } = useSelector(
    (state) => state.home,
    shallowEqual
  );
  // console.log("domain list", domainsForSale);

  //
  return (
    <>
      <Container
        sx={{
          width: "750px",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 0,
          marginLeft: "-24px",
        }}
      >
        <Grid marginTop={"68px"} marginX={"auto"}>
          <div className="homepage">
            {/* <!-- 1 Welcome --> */}
            <div className="homepage-hero">
              <section>
                <h1 style={{ marginLeft: "24px" }}>
                  All about Domains and Startup
                </h1>
                <h3
                  style={{
                    marginLeft: "24px",
                    color: "#0A3161",
                    fontWeight: 700,
                    fontSize: 27,
                  }}
                >
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
            <section className="featured-articles">
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
                    VNWP.COM is the place to start your Startup. A place the
                    fishing rod is given, not the fish. A place to give you the
                    Brand Name, platform and method to start your Startup, the
                    choice is up to you. A place that will accompany you and
                    more.
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
            </section>

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
                    <Button
                      size="small"
                      component={RouterLink}
                      to={`/contact`}
                      className="request-date"
                    >
                      Contact
                    </Button>
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
                    <Button
                      size="small"
                      component={RouterLink}
                      to={`/contact`}
                      className="request-date"
                    >
                      Contact
                    </Button>
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
                    <Button
                      size="small"
                      component={RouterLink}
                      to={`/contact`}
                      className="request-date"
                    >
                      Contact
                    </Button>
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
                    <Button
                      size="small"
                      component={RouterLink}
                      to={`/contact`}
                      className="request-date"
                    >
                      Contact
                    </Button>
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
                    <Button
                      size="small"
                      component={RouterLink}
                      to={`/contact`}
                      className="request-date"
                    >
                      Contact
                    </Button>
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
                    <Button
                      size="small"
                      component={RouterLink}
                      to={`/contact`}
                      className="request-date"
                    >
                      Contact
                    </Button>
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
                    <Button
                      size="small"
                      component={RouterLink}
                      to={`/contact`}
                      className="request-date"
                    >
                      Contact
                    </Button>
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
                    <Button
                      size="small"
                      component={RouterLink}
                      to={`/contact`}
                      className="request-date"
                    >
                      Contact
                    </Button>
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
                    <Button
                      size="small"
                      component={RouterLink}
                      to={`/contact`}
                      className="request-date"
                    >
                      Contact
                    </Button>
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
                    <Button
                      size="small"
                      component={RouterLink}
                      to={`/contact`}
                      className="request-date"
                    >
                      Contact
                    </Button>
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
                    A global nonprofit organization responsible for coordinating
                    the maintenance and procedures of several databases related
                    to the namespaces and numerical spaces of the Internet.
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
                    other statistics. Leading provider of web presence
                    solutions.
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

                  {/*  */}
                  <svg
                    color="#fff"
                    width="50px"
                    height="50px"
                    id="Layer_2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 348.5 351.1"
                  >
                    <defs>
                      <style>
                        .cls-1[fill: "#fff"] .cls-2[fill: "#fff"] .cls-3[fill:
                        "#fff"]
                      </style>
                    </defs>
                    <g id="Layer_1-2">
                      <g>
                        <g>
                          <path
                            class="cls-2"
                            d="m294.6,175.5c0-28.8-10.2-53.3-30.7-73.9-16.7-16.9-36.6-26.8-59.2-29.7-4.8-.5-9.7-.9-14.5-.9h-.2l-24.5,2.6c-.5.2-1,.4-1.5.5-11.2,2.8-21.6,7.2-31.2,13.8-5,2.1-9.7,4.7-14.3,7.6-.3.2-.7.3-1,.7-1.6.9-2.9,1.9-4.5,3.1-.2,0-.2.2-.3.3-.5.2-1,.5-1.4,1-.5.3-1,.7-1.5,1-3.3,2.8-6.4,5.7-9.5,8.6-5.4,5.2-9.8,10.9-13.6,16.6h0c-4.7,6.9-8.3,14.2-11.1,21.8-1.6,4.7-2.9,9.3-3.8,14.3-1.4,6.7-2.1,13.8-2.1,21.2s.2,4.2.2,6.4c6.7-1.7,13.5-3.6,20-5.9-.3-3.6-.7-7.6-.7-11.4,0-22.5,6.2-42.3,18.6-59.6v-.2c.4-.7.9-1.4,1.2-1.9h0c1.5-1.9,3.1-3.8,4.8-5.7,9.3,52.1,29.2,101,59.2,146.9,3.8,5.7,7.6,11.2,11.6,16.7.7,1,1.4,2.1,2.2,2.9,5.2.9,11.9.9,19.7-.3-.7-.9-1.6-1.7-2.4-2.6-5-5.3-9.8-11-14.5-16.7-6-7.3-11.7-14.7-17.1-22.3,16.2-6.6,31.9-14.8,47.1-24.5-1.9-5.2-4-10.4-6-15.4-15.2,11.6-31.2,21.4-48.2,29.5-7.8-11.9-14.9-24.3-21.4-37.1,9.1-3.6,18-7.8,26.6-12.4,8.6-4.8,17.3-10.2,25.4-15.9-2.9-5.3-5.9-10.5-9.2-15.9-15.2,12.4-31.2,23-47.8,31.8-.4,0-.5.2-.7.3-9.7-20.7-17.6-42.8-23.8-65.9.9-1.2,1.9-2.2,3.1-3.5.2-.3.5-.7.9-.9.5-.3.9-1,1.4-1.4,3.8-4,7.9-7.4,12.1-10.5.5-.3,1-.5,1.7-.7l12.1-3.6c.3-.2.7-.2,1-.4.3,0,.5,0,.9-.2h.3c.7-.2,1.4-.3,2.2-.5,44.7,50.8,75.1,108.1,91,172.1,6-6.2,9.3-11.2,9.7-14.8-5-15.9-10.9-30.7-17.4-44.2,10.7-7.8,21.4-16.4,31.6-25.9.7-.7,3-2.7,3.5-3.4-.3-7.7-1.7-13.9-6.5-21.9-7.6,9-16.6,17.5-24.9,25.2-3.8,3.6-7.8,7.1-11.6,10.4-6.4-11.4-12.9-22.4-20.2-33.2,12.6-9.7,24.5-20.7,36.1-33-4.1-5.9-9.2-10.5-15.4-13.6-10,11.4-20.7,21.9-31.6,31.4-13.3-17.6-27.8-34-43.9-49.2,4.5-.9,8.8-1.4,13.5-1.6h0c2.2-.2,4.3-.2,6.6-.2h0c12.1,0,23.5,1.7,34,5.4.7.2,1.4.5,2.1.7,14,5,26.4,13.1,37.8,24.5,20.4,20.4,30.6,45.1,30.6,73.9s-8.6,49.5-26.1,69.1c-1.6,1.6-2.9,3.1-4.5,4.7-4,4-8.1,7.6-12.4,10.7-11.7,4.7-24.5,7.1-38.3,7.1s-18-1-26.2-3.1c-15-3.8-28.8-10.9-41.1-21.4-2.2-2.1-4.5-4-6.6-6.2-.3-.2-.7-.5-.9-.9,13.1-2.4,25.9-5.7,38.5-10-1.9-3.1-3.8-6.6-5.7-9.8-39.2,16.2-82.5,23.3-130,21.4,24.3,3.3,48.2,4,71,2.1,1,1,1.9,2.2,2.9,3.5,1.6,1.5,2.9,3.1,4.5,4.7,11.9,11.9,25,20.2,39.7,25.2q.2.2.3.2c8.6,2.9,17.8,4.7,27.3,5.2,2.2,0,4.5.2,6.6.2,12.1,0,23.3-1.9,33.8-5.3.2,0,.3,0,.3-.2,8.1-2.8,15.9-6.6,23-11.4,9.5-4,18.1-9.5,26.3-16.4,2.2-2.1,4.5-4,6.5-6.2,20.6-20.4,30.7-44.9,30.7-73.7Z"
                          />
                          <path
                            class="cls-2"
                            d="m75.3,219.7c2.6,7.1,5.9,13.8,10,20.2,7.9-1.5,15.7-3.3,23.5-5.2-8.3-11.2-14-23.5-16.9-36.6,13.8-2.6,27.3-6,40.2-10.5-1.6-3.6-3.1-7.4-4.7-11.1-31.2,14.7-65.1,23.1-101.3,25.7,15.4.5,30.2.2,44.5-1.4.3,1.6.5,3.1.9,4.7.9,4.8,2.2,9.7,3.8,14.2Z"
                          />
                        </g>
                        <path
                          class="cls-3"
                          d="m263.3,57c7.7-10.8,29.3-22.1,44.6-27.2l3,2.3-19.5,29-41.8,70.3-26.9,54.7-6.2,14.4c-.8,2.3-1.8,5.1-4.2,7.1-3.3,2.3-11.8,5.2-15.7,6.5-9,3-11,3.7-13.3,3.4-3.3-.3-5.5-2.5-8.4-4.4-9-6.4-26.2-21.2-29.3-30.4-1-3.1,1.3-5.6,4.4-8.4,5-4.7,12.4-10.7,19.8-13.1,5.6-1.9,7.3,1.1,9.9,3.4l8.5,6.8c1.3,1.2,5.6,5.5,8.7,4.5,2.8-.9,4.8-6.3,5.5-8l44.1-85,16.8-25.9Z"
                        />
                        <path
                          class="cls-1"
                          d="m49.4,163.9l.5,31.4h-8.6c0,.1-.1-8.2-.1-8.2l-32.1.5v8.4c.1,0-8.5.1-8.5.1l-.5-31.4h8.6c0-.1.1,8.2.1,8.2l32.1-.5v-8.4c-.1,0,8.5-.1,8.5-.1Z"
                        />
                        <path
                          class="cls-1"
                          d="m61.3,128.2c-3.3,8.1-8.1,13.7-14.2,16.7-6.1,3-12.9,3-20.4,0-7.2-3-12-7.8-14.4-14.3-2.3-6.6-1.8-13.9,1.5-22,.9-2.1,1.8-4,2.7-5.7.9-1.6,1.9-3.2,2.9-4.6.8-1.1,1.8-2.3,2.9-3.5,1.1-1.2,2.1-2.2,2.8-2.9l10.9,4.5-.6,1.4c-.8.4-1.7,1-2.8,1.7-1.1.7-2.2,1.6-3.3,2.6-1.2,1-2.3,2.2-3.4,3.5-1.1,1.3-2,2.8-2.6,4.5-.8,2-1.3,3.9-1.4,5.7-.2,1.8,0,3.8.8,5.8.6,1.8,1.7,3.6,3.3,5.3,1.6,1.7,3.8,3.1,6.5,4.2,2.8,1.2,5.4,1.7,7.7,1.6,2.3,0,4.3-.6,6.1-1.6,1.7-.9,3.2-2.1,4.4-3.7,1.2-1.5,2.2-3.1,2.9-4.9.7-1.8,1.2-3.6,1.4-5.4.2-1.8.2-3.4,0-4.8-.1-1.5-.3-2.8-.6-4-.3-1.2-.5-2.2-.7-3.1l.5-1.2,10.8,4.5c0,1.2,0,2.5,0,4,0,1.5-.2,3-.4,4.6-.3,1.9-.7,3.6-1,5.1-.4,1.6-1.1,3.6-2.2,6.2Z"
                        />
                        <path
                          class="cls-1"
                          d="m73.3,76.7l-6.7-16.5,15.8,8.3-9.1,8.2Zm7.7,18.7l-4-9.8,13.9-12.6,9.4,5,11.1-10-47.8-23.3-11.9,10.8,18.6,49.8,10.8-9.8Z"
                        />
                        <path
                          class="cls-1"
                          d="m166.8,49.8l-13.5,4.1-31.7-26.3,10,32.9-12.8,3.9-14.4-47.2,17.2-5.3,26.2,21.6-8.3-27.1,12.8-3.9,14.4,47.2Z"
                        />
                        <path
                          class="cls-1"
                          d="m230.4,56.2l-13.9-2.1-17.4-37.3-5,34-13.2-2L188,0l17.8,2.6,14.4,30.8,4.1-28,13.2,2-7.2,48.8Z"
                        />
                        <path
                          class="cls-1"
                          d="m60.5,280.7l11.1-3.8-5.8,10.3-5.3-6.5Zm3.6,22.7l15-28.3-4.2-5.1-30.4,9.5,4.2,5.1,6.8-2.3,7.8,9.5-3.5,6.3,4.3,5.2Z"
                        />
                        <path
                          class="cls-1"
                          d="m89.2,305.6c.7-1.3,1.2-3.4-1-5.2-3.8-3-6.9.9-7.8,1.9-2.8,3.5-3.2,6.4-.5,8.5,2.7,2.2,4.9.3,5.9-.5l3.9,4.4c-4.3,3.3-8.5,3.1-12.9-.5-7.1-5.8-3.5-12.6-1.3-15.4,3.1-3.9,8.9-7.2,15.4-1.9,5.5,4.4,4.6,8.8,3.4,11.5l-5.1-2.9Z"
                        />
                        <path
                          class="cls-1"
                          d="m110.2,318.9c.5-1.4.6-3.5-1.9-4.9-4.2-2.4-6.7,2-7.3,3.2-2.2,4-2.1,6.8.9,8.5,3,1.7,4.9-.5,5.7-1.5l4.6,3.7c-3.7,4-7.9,4.4-12.8,1.7-8-4.5-5.6-11.9-3.8-15,2.4-4.3,7.5-8.6,14.9-4.4,6.2,3.5,5.9,7.9,5.3,10.8l-5.5-2Z"
                        />
                        <path
                          class="cls-1"
                          d="m114.8,336.6l7.9-19.9,5.1,2-1.1,2.8h0c1.9-1.4,3.6-2.3,6-1.4,1.2.5,2.5,1.5,3.2,2.4l-3.5,3.9c-.3-.4-1.2-1.4-2.2-1.9-3.5-1.4-5.2,2.5-7.4,8l-2.4,6.1-5.5-2.2Z"
                        />
                        <path
                          class="cls-1"
                          d="m140.5,332.4c.6-2.7,2.8-4.4,5.5-3.8.9.2,4,1.3,3,5.9l-8.5-2.1Zm6.8,7.6c-.5.9-1.7,2.6-4.3,2-3.2-.8-4-3.8-3.4-6.3l14.3,3.6c1.7-6.1,1-12.9-7.1-15-6.8-1.7-11.2,2.9-12.6,8.5-.4,1.7-.6,3.8-.1,6.1,1.1,5.3,6,6.8,7.9,7.2,7.2,1.8,10.2-2.7,10.9-3.8l-5.5-2.3Z"
                        />
                        <path
                          class="cls-1"
                          d="m175,339.5c-.3,3.1-1,4.6-2.5,5.8-1.2.9-2.5,1-3.3.9-2-.2-4.5-1.8-4.1-7,.2-2.4,1.1-6.8,5.5-6.4,2.7.2,4.7,2.4,4.4,6.7Zm4.9,11.6l2.5-29.4-5.9-.5-.9,10.6c-.8-1-2.6-3.2-6.2-3.5-4.9-.4-9.6,2.6-10.3,10.1-.7,7.6,3.5,11.7,8.3,12.1,1.3.1,4.6,0,7.1-3h0s-.3,3.1-.3,3.1l5.5.5Z"
                        />
                        <path
                          class="cls-1"
                          d="m187.2,329.6l5.9-.2.7,21.4-5.9.2-.7-21.4Zm-.3-8.2l5.9-.2.2,5.2-5.9.2-.2-5.2Z"
                        />
                        <path
                          class="cls-1"
                          d="m209.7,332.3l-4,.5,1,8.6c.3,3,.5,4,2.1,3.8.8,0,1.4-.4,2.1-.7h.2c0,0,1,4.2,1,4.2-1.8,1-3.9,1.3-4.5,1.4-1.8.2-4.2-.1-5.2-1.6-.9-1.2-1.1-2.5-1.5-5.7l-1.1-9.3-2.7.3-.5-4.5,2.7-.3-.5-4.2,5.5-4,.9,7.5,4-.5.5,4.5Z"
                        />
                        <path
                          class="cls-1"
                          d="m219.6,334.9c-.7-2.7.4-5.2,3.1-5.9.9-.2,4.2-.7,5.4,3.8l-8.6,2Zm9.6,3.6c0,1-.3,3.1-2.9,3.8-3.3.8-5.3-1.5-5.9-4l14.4-3.4c-1.3-6.2-5.1-11.9-13.2-10-6.8,1.6-8.6,7.7-7.3,13.4.4,1.7,1.2,3.7,2.7,5.5,3.4,4.2,8.5,3.2,10.4,2.8,7.2-1.7,7.8-7,8-8.4l-5.9.4Z"
                        />
                        <path
                          class="cls-1"
                          d="m253.5,325.2c1.2,2.9,1.3,4.5.5,6.3-.6,1.3-1.7,2-2.5,2.3-1.9.8-4.8.6-6.9-4.3-.9-2.2-2.2-6.6,1.8-8.2,2.5-1.1,5.3,0,7,3.9Zm9.7,8l-11.5-27.2-5.4,2.3,4.1,9.8c-1.2-.5-3.8-1.6-7.1-.2-4.5,1.9-7.3,6.8-4.4,13.7,3,7.1,8.6,8.7,13,6.9,1.2-.5,4-2.2,4.9-6h0s1.2,2.9,1.2,2.9l5.1-2.1Z"
                        />
                        <path
                          class="cls-1"
                          d="m273,298.4l3.8-3c3.2-2.6,3.8-3.1,5.2-3.3,1.3-.2,2.4.4,3.1,1.4.5.7,1.6,2.3.3,4.2-.6,1-2.6,2.6-4.1,3.8l-3.6,2.9-4.7-5.9Zm10.6,23l4.8-3.9-7.7-9.6,1-.8c3.2-2.6,3.9-2.4,10.1-.6l7.5,2.2,5.8-4.6-6.5-2.2c-5.4-1.8-7-1.8-9.9-1.3h0c.9-.9,1.6-1.9,2.1-2.9,1.6-2.8,1.1-6.1-.9-8.6-1.8-2.3-5.1-4-8.6-2.7-.9.4-2.4,1-5.9,3.8l-10.2,8.2,18.5,23Z"
                        />
                        <path
                          class="cls-1"
                          d="m303.1,287.1c-2.2-1.8-2.8-4.4-1-6.6.6-.7,3-3.1,6.6-.2l-5.6,6.8Zm9.8-2.9c.6.9,1.7,2.7,0,4.8-2.1,2.6-5.1,2-7.1.4l9.4-11.4c-4.8-4.1-11.2-6.5-16.6,0-4.5,5.4-2.3,11.4,2.2,15.1,1.4,1.1,3.2,2.2,5.4,2.8,5.3,1.3,8.7-2.5,10-4,4.7-5.7,2-10.3,1.3-11.5l-4.5,3.9Z"
                        />
                        <path
                          class="cls-1"
                          d="m319.3,267.3c-1.4-.8-5.5-3.4-3.3-7.3,1.9-3.6,5.7-2.7,8.1-1.4,4.9,2.6,3.9,6.2,3.2,7.6-1.8,3.3-5.4,2.5-8,1.1Zm8.6,10.6c5.2,3.1,8.9-1.2,11.3-5.7,4.6-8.5.7-11.6-4.6-14.4l-16.9-9.1-2.6,4.8,2.6,1.4h0c-1.1.2-4.3.7-6.2,4.4-1.7,3.2-2.5,9.3,5.3,13.5,5.3,2.9,11.2,2,13.9-3,1.3-2.3,1.2-5.1,0-7.4h0c0,0,2.8,1.4,2.8,1.4,2.2,1.2,4.1,2.2,1.8,6.5-.7,1.3-1.4,1.9-1.6,2-1,.5-1.7,0-1.9,0l-3.9,5.6Z"
                        />
                        <path
                          class="cls-1"
                          d="m319.5,243.3l1.9-5.6,20.2,7-1.9,5.6-20.2-7Zm-7.7-2.7l1.9-5.6,5,1.7-1.9,5.6-5-1.7Z"
                        />
                        <path
                          class="cls-1"
                          d="m338.3,230.3c2.9-.2,3.9-2.2,4.2-4.1,0-.5.7-4.2-1.6-4.6-1.2-.2-1.7.7-2.2,2-2.6,6.4-4.5,11-9.5,10.2-4.8-.9-5.6-5.8-4.8-10.4.9-5.2,2.9-8.2,7.3-8.7v5.7c-2.6.3-3.1,2.6-3.3,3.6-.2,1-.7,4,1,4.3.6.1,1.1-.3,1.5-.9.6-1,1.6-3.3,2.2-4.7,1.6-3.7,3.5-7.9,8.1-7.1,3.3.6,6.6,4,5.3,11.2-.4,2.1-1.4,5.6-4,7.7-1.7,1.4-3.5,1.6-4.4,1.6l.2-5.9Z"
                        />
                        <path
                          class="cls-1"
                          d="m331.2,198.6v4s8.6,0,8.6,0c3.1,0,4,0,4.1-1.6,0-.8-.2-1.5-.5-2.2v-.2s4.3-.5,4.3-.5c.8,1.9.8,4,.8,4.6,0,1.8-.6,4.1-2.2,5-1.3.7-2.6.8-5.9.8h-9.3c0-.1,0,2.6,0,2.6h-4.5s0-2.8,0-2.8h-4.2s-3.3-6-3.3-6h7.6c0,0,0-3.9,0-3.9h4.5Z"
                        />
                        <path
                          class="cls-1"
                          d="m347.6,192.1l-21.2,2.6-.7-5.4,3-.4h0c-2.2-1.1-3.8-2.1-4.1-4.6-.2-1.3.1-2.9.5-4l5.1,1.2c-.2.5-.7,1.7-.6,2.8.5,3.8,4.7,3.4,10.6,2.7l6.5-.8.7,5.8Z"
                        />
                        <path
                          class="cls-1"
                          d="m332.2,162.9c1.9-.6,3.2-1,4.5,0,1,.6,1.9,1.6,2.3,2.9.7,2.2-.7,3.6-1.8,4-1.9.6-3.1-1.5-3.7-2.5-.2-.2-.9-1.5-1-1.8-.7-1.2-1-1.7-1.4-2.2l1.1-.3Zm-3.1,9.2c-1.1,0-2.9-.1-3.7-2.9-1.2-3.9.3-4.3,1.7-4.7l.6-.2c.8,1,1.5,2.1,3,5,1.5,2.8,3.9,7.3,8.9,5.7,3.5-1.1,5.2-4.7,3.8-8.9-1.1-3.4-3.4-5-4.8-5.8l1-.7c.5-.3.8-.6,1-.8l-1.7-5.5c-1.4,1.3-2.3,1.9-4.9,2.9-1.1.4-6.7,2-7.9,2.4-3.7,1.1-7.7,2.4-4.9,11.4,2,6.3,5.1,7.5,8.6,7.4l-.7-5.4Z"
                        />
                        <path
                          class="cls-1"
                          d="m335.5,146.4l-19,9.7-2.5-4.9,2.7-1.4h0c-2.4-.2-4.3-.7-5.4-3-.6-1.1-.9-2.7-.8-3.9l5.2-.6c0,.6,0,1.9.4,2.9,1.7,3.4,5.6,1.6,10.9-1.1l5.9-3,2.7,5.2Z"
                        />
                      </g>
                    </g>
                  </svg>
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
