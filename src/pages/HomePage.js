import React from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

import "../assets/css/mainbody.css";
import "../assets/css/main.css";
import "../assets/css/reset.css";
import "../assets/css/footer.css";

// Outlet (company)
const HomePage = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          maxWidth: "unset!important",
          marginTop: 0,
          backgroundColor: "black",
          color: "white",
          width: "95%",
        }}
      >
        <Grid marginTop={"68px"} maxWidth={"60vw"} marginX={"auto"}>
          <div class="homepage">
            {/* <!-- 1 Welcome --> */}
            <div class="homepage-hero dark">
              <section>
                <h1>Domains and Startup</h1>
                <h3>Welcome!</h3>
                {/* <img
                  style={{ backgroundColor: "white", width: "500px" }}
                  backgroundColor="white"
                  src="C:/Users/Public/finalproject-frontend/src/assets/img/domain.png"
                  alt=""
                  width="500px"
                /> */}
                <p>
                  WWW.VNWP.COM
                  <br />
                  <br />
                  Value Name for Web Project
                  <br /> Value Name for World Project
                  <br />
                  <br /> Name - Brand Name is a necessary condition to start a
                  startup, and a sufficient condition is a platform and a
                  method. There are many platforms, many methods, but the Name
                  and Brand Name are only one.
                  <br />
                  <br /> In the digital era, Domain Name is the Brand Name for a
                  product or service (subdomain can also be used instead). There
                  are global brands and regional brands depending on the scope
                  of operations, but it is necessary to standardize for the
                  future if there is development.
                  <br />
                  <br /> The Domain Name must be short, easy to understand, easy
                  to remember, easy to recognize, and easy to express.
                  <br />
                  <br /> VNWP.COM is the place to start your Startup. A place
                  the fishing rod is given, not the fish. A place to give you
                  the Brand Name, platform and method to start your Startup, the
                  choice is up to you. A place that will accompany you (if
                  needed) and more...
                  <br />
                  <br /> VNWP.COM has the following main activities:
                  <br /> - Some typical Startup projects of VNWP.COM. You can
                  own it or cooperate.
                  <br /> - Brand Names and Startup ideas for you.
                  <br /> - Domain Names as Brand Names for you to choose from.
                  <br />
                  <br /> How VNWP.COM works:
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
                  <br /> Agreement of use: When you enter into an economic
                  transaction contract with VNWP.COM, you automatically agree to
                  VNWP.COM way of operating. Any disputes, if any, will be
                  resolved according to VNWP.COM way of operating and according
                  to customary practices.
                </p>
              </section>
            </div>

            {/* <!-- 2 Projects --> */}
            <div class="featured-articles">
              <h2>Our Projects --- to be our partner</h2>
              <div class="tile-container">
                <div class="article-tile">
                  {/* <!-- domain.com --> */}
                  <a href="/" class="tile-tag">
                    OVOP.com
                  </a>
                  {/* <!-- description --> */}
                  <h3 class="tile-title">
                    <a href="/">One Village One Product</a>
                  </h3>
                  {/* <!-- idea --> */}
                  <p>
                    All about local special product and service, famous and
                    unique scenic and sightseeing of Vietnam, Asia and around
                    the world. The best source for you to visit and experiencing
                    in your next travel plan.
                  </p>
                </div>
                <div class="article-tile">
                  <a href="/" class="tile-tag">
                    SeeChannel.com
                  </a>
                  <h3 class="tile-title">
                    <a href="/">The truth way you see the world</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Expedita ab officia vel distinctio dicta tempore temporibus
                    molestiae natus quod, praesentium accusamus, consequuntur
                    perferendis pariatur magni quaerat provident similique.
                    Quasi, sapiente.
                  </p>
                </div>
                <div class="article-tile">
                  <a href="/" class="tile-tag">
                    Glonet.com
                  </a>
                  <h3 class="tile-title">
                    <a href="/">Global networking for everyone</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Culpa hic exercitationem possimus necessitatibus quas
                    repellat quisquam aperiam. Adipisci, quaerat consequuntur
                    eius molestias, deleniti natus ullam explicabo sint nesciunt
                    sequi facilis.
                  </p>
                </div>
                <div class="article-tile">
                  <a href="/" class="tile-tag">
                    VNWP.com
                  </a>
                  <h3 class="tile-title">
                    <a href="/">Vietnam Web Portal</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit, omnis numquam. Perspiciatis ad error nobis officia
                    laudantium. Porro rem magni excepturi iure illo esse
                    molestiae reiciendis ipsa, qui quae nisi.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- 3 Domains for Startup --> */}
            <section class="latest-news">
              <h2>Domains for Startup --- Our Domain Your Startup</h2>
              <ul class="news-list">
                <li class="news-item">
                  {/* <!-- idea --> */}
                  <p class="news-title">
                    <span>
                      <a href="/">Lift-off: The Curriculum launch</a>
                    </span>
                    {/* <!-- domain name --> */}
                    <span>
                      <a class="news-source" href="/">
                        developer.mozilla.org
                      </a>
                    </span>
                  </p>
                  {/* <!-- build your startup --> */}
                  <span class="news-date">$ $ $</span>
                </li>

                <li class="news-item">
                  <p class="news-title">
                    <span>
                      <a href="/">Baseline &#x27;s evolution on</a>
                    </span>
                    <span>
                      <a class="news-source" href="/">
                        developer.mozilla.org
                      </a>
                    </span>
                  </p>
                  <span class="news-date">$ $ $</span>
                </li>

                <li class="news-item">
                  <p class="news-title">
                    <span>
                      <a href="/">
                        Introducing the Playground: Bring your code to life!
                      </a>
                    </span>
                    <span>
                      <a class="news-source" href="/">
                        developer.mozilla.org
                      </a>
                    </span>
                  </p>
                  <span class="news-date">$ $ $</span>
                </li>

                <li class="news-item">
                  <p class="news-title">
                    <span>
                      <a href="/">Lift-off: The Curriculum launch</a>
                    </span>
                    <span>
                      <a class="news-source" href="/">
                        developer.mozilla.org
                      </a>
                    </span>
                  </p>
                  <span class="news-date">$ $ $</span>
                </li>

                <li class="news-item">
                  <p class="news-title">
                    <span>
                      <a href="/">Baseline &#x27;s evolution on</a>
                    </span>
                    <span>
                      <a class="news-source" href="/">
                        developer.mozilla.org
                      </a>
                    </span>
                  </p>
                  <span class="news-date">$ $ $</span>
                </li>
                <li class="news-item">
                  <p class="news-title">
                    <span>
                      <a href="/">
                        Introducing the Playground: Bring your code to life!
                      </a>
                    </span>
                    <span>
                      <a class="news-source" href="/">
                        developer.mozilla.org
                      </a>
                    </span>
                  </p>
                  <span class="news-date">$ $ $</span>
                </li>
              </ul>
            </section>

            {/* <!-- 4 Domains for sale --> */}
            <section class="recent-contributions">
              <h2>Domains for Sale and more</h2>
              <ul class="contribution-list">
                <li class="request-item">
                  <p class="request-title">
                    {/* <!-- domain name --> */}
                    <a href="/">Fix indexOf() and lastIndexOf()</a>
                    {/* <!-- description --> */}
                    <span>
                      <a class="request-repo" href="/">
                        hello
                      </a>
                    </span>
                  </p>
                  {/* <!-- price --> */}
                  <span class="request-date">$ $ $</span>
                </li>
                <li class="request-item">
                  <p class="request-title">
                    <a href="/">
                      Redirect pathway to Curriculum and remove links to it
                    </a>
                    <span>
                      <a class="request-repo" href="/">
                        hello
                      </a>
                    </span>
                  </p>
                  <span class="request-date">$ $ $</span>
                </li>
                <li class="request-item">
                  <p class="request-title">
                    <a href="/">Web/Performance/Speculative_loading ?????</a>
                    <span>
                      <a class="request-repo" href="/">
                        hello
                      </a>
                    </span>
                  </p>
                  <span class="request-date">$ $ $</span>
                </li>
                <li class="request-item">
                  <p class="request-title">
                    <a href="/">Fix of stylesheet load events example</a>
                    <span>
                      <a class="request-repo" href="/">
                        hello
                      </a>
                    </span>
                  </p>
                  <span class="request-date">$ $ $</span>
                </li>
                <li class="request-item">
                  <p class="request-title">
                    <a href="/">chore(zh-cn): sync translate content</a>
                    <span>
                      <a class="request-repo" href="/">
                        hello
                      </a>
                    </span>
                  </p>
                  <span class="request-date">$ $ $</span>
                </li>
                <li class="request-item">
                  <p class="request-title">
                    <a href="/">feat: Editorial review: Fenced Frames docs</a>
                    <span>
                      <a class="request-repo" href="/">
                        hello
                      </a>
                    </span>
                  </p>
                  <span class="request-date">$ $ $</span>
                </li>
                <li class="request-item">
                  <p class="request-title">
                    <a href="/">
                      zh-cn: fix the description of `timeout` option for
                      `requestIdleCallback()` method
                    </a>
                    <span>
                      <a class="request-repo" href="/">
                        hello
                      </a>
                    </span>
                  </p>
                  <span class="request-date">$ $ $</span>
                </li>
                <li class="request-item">
                  <p class="request-title">
                    <a href="/">correct alt info of svelte typescript</a>
                    <span>
                      <a class="request-repo" href="/">
                        hello
                      </a>
                    </span>
                  </p>
                  <span class="request-date">$ $ $</span>
                </li>
                <li class="request-item">
                  <p class="request-title">
                    <a href="/">Fixed type of stdDeviation in feDropShadow</a>
                    <span>
                      <a class="request-repo" href="/">
                        hello
                      </a>
                    </span>
                  </p>
                  <span class="request-date">$ $ $</span>
                </li>
                <li class="request-item">
                  <p class="request-title">
                    <a href="/">
                      [zh-cn]: remove the out-of-date warning in
                      `Event.timeStamp`
                    </a>
                    <span>
                      <a class="request-repo" href="/">
                        hello
                      </a>
                    </span>
                  </p>
                  <span class="request-date">$ $ $</span>
                </li>
              </ul>
            </section>

            {/* <!-- 5 Cooperation --> */}
            <div class="featured-articles">
              <h2>Cooperation and Partners</h2>
              <div class="tile-container">
                <div class="article-tile">
                  <a href="/" class="tile-tag">
                    ICANN
                  </a>
                  <h3 class="tile-title">
                    <a href="https://www.icann.org/">https://www.icann.org/</a>
                  </h3>
                  <p>
                    The ICANN80 Policy Forum is now live and taking place in
                    Kigali, Rwanda from 10-13 June 2024. You must be registered
                    and logged in to view the schedule.
                  </p>
                </div>
                <div class="article-tile">
                  <a href="/" class="tile-tag">
                    GODADDY
                  </a>
                  <h3 class="tile-title">
                    <a href="https://www.godaddy.com/">
                      https://www.godaddy.com/
                    </a>
                  </h3>
                  <p>
                    Buy a new domain and get GoDaddy Airo™, our customizable,
                    AI-powered solution that can easily deliver a website, logo,
                    LLC, and more^.
                  </p>
                </div>
                <div class="article-tile">
                  <a href="/" class="tile-tag">
                    ONLINENIC
                  </a>
                  <h3 class="tile-title">
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
                <div class="article-tile">
                  <a href="/" class="tile-tag">
                    ESCROW
                  </a>
                  <h3 class="tile-title">
                    <a href="https://www.escrow.com/">
                      https://www.escrow.com/
                    </a>
                  </h3>
                  <p>
                    With Escrow.com you can buy and sell anything safely without
                    the risk of chargebacks. Truly secure payments.
                  </p>
                </div>
                <div class="article-tile">
                  <a href="/" class="tile-tag">
                    WHOIS
                  </a>
                  <h3 class="tile-title">
                    <a href="https://who.is/">https://who.is/</a>
                  </h3>
                  <p>
                    See Website Information Search the whois database, look up
                    domain and IP owner information, and check out dozens of
                    other statistics.
                  </p>
                </div>
                <div class="article-tile">
                  <a href="/" class="tile-tag">
                    Domain Appraisals
                  </a>
                  <h3 class="tile-title">
                    <a href="https://sedo.com">https://sedo.com</a>
                  </h3>
                  <p>
                    The world's leading platform for domain buyers and sellers.
                    The first address for your online success
                  </p>
                </div>
              </div>
              <section class="place hp-main"></section>
              <section class="place hp-main"></section>
              <section class="place hp-main"></section>
              <section class="place hp-main"></section>
            </div>

            {/* footer menu */}
            <footer id="nav-footer" class="page-footer">
              <div class="page-footer-grid">
                {/* <!-- logo --> */}
                <div class="page-footer-logo-col">
                  <div class="mainlogo">
                    <a href="/">
                      <img src="./huongsac-logo.png" alt="" />
                    </a>
                  </div>
                  {/* <!-- slogan --> */}
                  <p>World Wide Web For All</p>
                </div>
                {/* <!-- category footer --> */}
                <div class="page-footer-nav-col-1">
                  <h2 class="footer-nav-heading">Biz Holding</h2>
                  <ul class="footer-nav-list">
                    <li class="footer-nav-item">
                      <a href="/">About</a>
                    </li>
                    <li class="footer-nav-item">
                      <a href="/">Blog</a>
                    </li>
                    <li class="footer-nav-item">
                      <a href="/" target="_blank" rel="noopener noreferrer">
                        Careers
                      </a>
                    </li>
                    <li class="footer-nav-item">
                      <a href="/">Advertise with us</a>
                    </li>
                  </ul>
                </div>
                {/* <!--  --> */}
                <div class="page-footer-nav-col-2">
                  <h2 class="footer-nav-heading">Support</h2>
                  <ul class="footer-nav-list">
                    <li class="footer-nav-item">
                      <a class="footer-nav-link" href="/">
                        Business Development
                      </a>
                    </li>
                    <li class="footer-nav-item">
                      <a class="footer-nav-link" href="/">
                        Online Marketplaces
                      </a>
                    </li>
                    <li class="footer-nav-item">
                      <a class="footer-nav-link" href="/">
                        Email
                      </a>
                    </li>
                    <li class="footer-nav-item">
                      <a class="footer-nav-link" href="/">
                        Subdomain
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--  --> */}
                <div class="page-footer-nav-col-3">
                  <h2 class="footer-nav-heading">Communities</h2>
                  <ul class="footer-nav-list">
                    <li class="footer-nav-item">
                      <a class="footer-nav-link" href="/">
                        Our community
                      </a>
                    </li>
                    <li class="footer-nav-item">
                      <a
                        class="footer-nav-link"
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Affiliates
                      </a>
                    </li>
                    <li class="footer-nav-item">
                      <a
                        class="footer-nav-link"
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Support
                      </a>
                    </li>
                    <li class="footer-nav-item">
                      <a
                        class="footer-nav-link"
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chat
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--  --> */}
                <div class="page-footer-nav-col-4">
                  <h2 class="footer-nav-heading">Developers</h2>
                  <ul class="footer-nav-list">
                    <li class="footer-nav-item">
                      <a class="footer-nav-link" href="/">
                        Web Technologies
                      </a>
                    </li>
                    <li class="footer-nav-item">
                      <a class="footer-nav-link" href="/">
                        eCommerce
                      </a>
                    </li>
                    <li class="footer-nav-item">
                      <a class="footer-nav-link" href="/">
                        IT Project Management
                      </a>
                    </li>
                    <li class="footer-nav-item">
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
