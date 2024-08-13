import React, { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Container, Grid, Stack } from "@mui/material";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import LocalPoliceOutlinedIcon from "@mui/icons-material/LocalPoliceOutlined";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined"; // @
import AnchorOutlinedIcon from "@mui/icons-material/AnchorOutlined"; // neo
import LanguageIcon from "@mui/icons-material/Language";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import AppShortcutIcon from "@mui/icons-material/AppShortcut"; // telephone
import GiteIcon from "@mui/icons-material/Gite";
import StreamIcon from "@mui/icons-material/Stream";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined"; // star

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
  // console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    apiService
      .post("/contact", formData)
      .then((response) => {
        toast.info("Contact sent successfully");
      })
      .catch((error) => {
        toast.error("Failed to send message");
      });

    setFormData({
      name: "",
      email: "",
      story: "",
    });
  };

  // UI with HTML&CSS
  return (
    <>
      <Container
        sx={{
          width: "750px",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 0,
          marginLeft: "-23px",
          paddingLeft: "20px",
        }}
      >
        <Grid marginTop={"68px"} marginX={"auto"}>
          <div className="homepage">
            {/* <!-- 1 Welcome --> */}
            <div className="homepage-hero">
              <section style={{ marginLeft: "23px" }}>
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
                  paddingLeft: "40px",
                }}
              >
                <h2>Contact us 24/7:</h2>
              </Stack>
              <Stack
                sx={{
                  paddingLeft: "30px",
                }}
              >
                <h3>
                  <TipsAndUpdatesOutlinedIcon />
                  Join Startup Sponsor Program with your ideas{" "}
                </h3>
                <h3>
                  <HandshakeOutlinedIcon /> Cooperate with our projects
                </h3>
                <h3>
                  <AttachMoneyOutlinedIcon /> Buy a domains
                </h3>
                <h3>
                  <InterestsOutlinedIcon /> Join our community
                </h3>
                <h3>
                  <LocalPoliceOutlinedIcon /> Or any
                </h3>
              </Stack>

              <ul
                className="contribution-list"
                style={{ width: "750px", margin: "auto", padding: "1.5rem" }}
              >
                <li
                  className="request-item contact-info"
                  style={{ padding: "1.5rem" }}
                >
                  <p className="request-title">
                    <p>
                      <GiteIcon fontSize="30" /> Company name: BizHolding, Inc.
                      (USA) & Huong Sac Ltd. (VN)
                    </p>
                    <br />
                    <p>
                      <AdsClickIcon fontSize="30" /> Registration No.:
                    </p>
                    <br />
                    <p>
                      <AnchorOutlinedIcon fontSize="27" /> Address: 5885 El
                      Cajon, Blvd., San Diego, CA 92115, USA.
                    </p>
                    <br />
                    <p>
                      <AppShortcutIcon fontSize="30" /> Telephone: +1 (619)
                      674-1015 --- +84 (97) 313-1234 --- +84 (97) 555-6084{" "}
                      <br />
                      iMes, Viber, WhatApp, Zalo
                    </p>
                    <br />
                    <p>
                      {" "}
                      <AlternateEmailOutlinedIcon fontSize="21" /> Email:
                      lucphanus@gmail.com --- lucphan@center247.com ---
                      thuphan273@gmail.com
                    </p>
                    <br />
                    <p>
                      <LanguageIcon fontSize="27" /> Website:{" "}
                      <a href="http://www.vnwp.com">www.vnstar.com</a> ---{" "}
                      <a href="http://www.vnwp.com">www.vnwp.com</a> ---{" "}
                      <a href="http://www.seechannel.com">www.seechannel.com</a>
                    </p>
                    <br />
                    <p>
                      {" "}
                      <StreamIcon fontSize="30" /> ESCROW: worlddetail@gmail.com
                    </p>
                    <br />
                    <p>
                      <WorkspacePremiumOutlinedIcon fontSize="30" />
                      Paypal:
                    </p>
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
