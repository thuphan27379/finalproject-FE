import React, { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Container, Grid, Stack } from "@mui/material";

import apiService from "../app/apiService";
import "../assets/css/main.css";
import "../assets/css/body.css";
import "../assets/css/footer.css";

//
function Contact() {
  // const { transporter } = useSelector((state) => state.contact, shallowEqual); // get state from contactController (be)
  // console.log("contact", transporter);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    story: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    apiService
      .post("/contact", formData)
      .then((response) => {
        alert("Contact sent successfully");
      })
      .catch((error) => {
        alert("Failed to send message");
      });
  };

  // UI with HTML&CSS
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          maxWidth: "850px", // "unset!important",
          width: "95%",
          marginTop: 0,
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
                  // style={{ backgroundColor: "", width: "500px" }}
                  // backgroundColor=""
                  src="C:/Users/Public/finalproject-frontend/src/assets/img/domain.png"
                  alt=""
                  width="500px"
                />
              </section>
            </div>

            {/* <!-- contact info --> */}
            <section className="recent-contributions">
              <Stack
                sx={{
                  flexDirection: "row",
                  alignItems: "center",
                  fontSize: "14px",
                }}
              >
                <h2>Contact us 24/7:</h2>
              </Stack>
              <h3>- Join Startup Sponsor Program with your ideas </h3>
              <h3>- Cooperate with our projects</h3>
              <h3>- Buy a domains</h3>
              <h3>- Or any</h3>

              <ul className="contribution-list" sx={{ width: "700px" }}>
                <li className="request-item">
                  <p className="request-title">
                    <p>Company name: BizHolding, Inc. & Huong Sac Ltd.</p>
                    <br />
                    <p>Registration No.:</p>
                    <br />
                    <p>
                      Address: 5885 El Cajon, Blvd., San Diego, CA 92115, USA.
                    </p>
                    <br />
                    <p>
                      Telephone: +1 (619) 674-1015 --- +84 (97) 313-1234 --- +84
                      (97) 555-6084 --- iMes, Viber, WhatApp, Zalo
                    </p>
                    <br />
                    <p>
                      Email: lucphanus@gmail.com --- lucphan@center247.com ---
                      thuphan273@gmail.com
                    </p>
                    <br />
                    <p>
                      Website: <a href="http://www.vnwp.com">www.vnstar.com</a>{" "}
                      --- <a href="http://www.vnwp.com">www.vnwp.com</a> ---{" "}
                      <a href="http://www.seechannel.com">www.seechannel.com</a>
                    </p>
                    <br />
                    <p>ESCROW: worlddetail@gmail.com</p>
                    <br />
                    <p>Paypal:</p>
                  </p>
                </li>
              </ul>
            </section>

            {/* contact form */}
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-example">
                  <label htmlFor="name">Your name:</label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    required
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
                <div className="form-example">
                  <label htmlFor="email">Your email:</label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
                <div className="form-example">
                  <label htmlFor="story">Your story:</label>
                  <textarea
                    name="story"
                    id="story"
                    rows="5"
                    onChange={handleChange}
                    value={formData.story}
                  ></textarea>
                </div>

                <div className="form-example">
                  <input type="submit" value="Submit" />
                </div>
              </form>
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
}

export default Contact;
