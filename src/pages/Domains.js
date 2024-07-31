import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Container, Grid, Stack, Box, Pagination } from "@mui/material";

// import "../assets/css/main.css";
// import "../assets/css/reset.css";
import "../assets/css/body.css";
import "../assets/css/footer.css";
import LoadingScreen from "../components/LoadingScreen";
import { DOMAIN_PER_PAGE } from "../app/config";
import {
  getDomainForSale,
  getDomainLength, //page
} from "../features/home/homeSlice";

// Domain for sale and more
// & domain whois & domain appraisal
function Domains() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const params = useParams();

  const { domainsForSale, currentPage, isLoading, totalPages, totalDomain } =
    useSelector((state) => state.home, shallowEqual);
  // console.log("domain list", domainsForSale);

  const totalDomainPage = Math.ceil(totalDomain / DOMAIN_PER_PAGE);

  useEffect(() => {
    dispatch(getDomainForSale({ page }));
  }, [dispatch, page]);

  // UI with HTML&CSS
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          maxWidth: "unset!important",
          width: "95%",
          marginTop: 0,
          backgroundColor: "#000",
          color: "#fff",
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
              </section>
            </div>

            {/* <!-- 3 Domains for Sale --> */}
            <section className="latest-news">
              <Stack
                sx={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h2>Domains for Sale and much more</h2>

                {/* pagination */}
                <Pagination
                  flexDirection="flex-end"
                  count={totalPages}
                  siblingCount={0} //...
                  page={page}
                  onChange={(e, page) => {
                    setPage(page);
                    dispatch(getDomainForSale({ page })); //?
                  }}
                  sx={{
                    paddingTop: "10px",
                    "& .css-1888ozn-MuiButtonBase-root-MuiPaginationItem-root":
                      {
                        margin: "0px",
                      },
                    color: "#fff", // ?
                  }}
                />
              </Stack>

              <ul className="news-list">
                {domainsForSale?.domains?.map((domain) => (
                  <li className="news-item" key={domain._id}>
                    <p className="news-title">
                      {/* <!-- domain name --> */}
                      <span>
                        <a className="news-source" href="/">
                          www.{domain.name}.{domain.topLevel}
                        </a>
                      </span>
                      {/* <!-- idea, description --> */}
                      <span style={{ textTransform: "uppercase" }}>
                        <p>
                          {" "}
                          {domain.description} - {domain.ideas}
                        </p>
                      </span>
                    </p>
                    {/* <!-- price--> */}
                    <span className="news-date">${domain.price}</span>
                  </li>
                ))}
              </ul>
            </section>

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
}

export default Domains;
