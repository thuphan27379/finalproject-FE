import React from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

// data list
const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 },
];

// Outlet
const HomePage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        maxWidth: "unset!important",
        marginTop: 0,
      }}
    >
      <Grid marginTop={"68px"} maxWidth={"60vw"} marginX={"auto"}>
        <div>
          <div class="featured-articles">
            <h2>Featured articles</h2>
            <div class="tile-container">
              <div class="article-tile">
                <h3 class="tile-title">
                  <a href="/en-US/blog/learn-javascript-console-methods/">
                    Developer essentials: JavaScript console methods
                  </a>
                </h3>
                <p>
                  The JavaScript console is an essential tool for web
                  development. Learn new and fun ways to use the console to
                  display data and debug your code.
                </p>
              </div>
              <div class="article-tile">
                <h3 class="tile-title">
                  <a href="/en-US/blog/introduction-to-web-sustainability/">
                    Introduction to web sustainability
                  </a>
                </h3>
                <p>
                  What can web designers and developers do to build a more
                  sustainable web? This post explores the environmental impacts
                  of web technologies and looks at some of the ways we can build
                  greener websites.
                </p>
              </div>
              <div class="article-tile">
                <a href="/en-US/docs/Web/API" class="tile-tag">
                  Web APIs
                </a>
                <h3 class="tile-title">
                  <a href="/en-US/docs/Web/API/CSS_Custom_Highlight_API">
                    CSS Custom Highlight API
                  </a>
                </h3>
                <p>
                  The CSS Custom Highlight API provides a mechanism for styling
                  arbitrary text ranges on a document by using JavaScript to
                  create the ranges, and CSS to style them.
                </p>
              </div>
              <div class="article-tile">
                <a href="/en-US/docs/Web/CSS" class="tile-tag">
                  CSS
                </a>
                <h3 class="tile-title">
                  <a href="/en-US/docs/Web/CSS/color_value">&lt;color&gt;</a>
                </h3>
                <p>
                  The &lt;color&gt; CSS data type represents a color. A
                  &lt;color&gt; may also include an alpha-channel transparency
                  value, indicating how the color should composite with its
                  background.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <section class="latest-news">
            <h2>Latest news</h2>
            <ul class="news-list">
              <li class="news-item">
                <p class="news-title">
                  <span>
                    <a href="https://blog.mozilla.org/en/products/mdn/responsibly-empowering-developers-with-ai-on-mdn/">
                      Responsibly empowering developers with AI on MDN
                    </a>
                  </span>
                  <span>
                    <a
                      class="news-source"
                      href="https://blog.mozilla.org/en/latest/"
                    >
                      blog.mozilla.org
                    </a>
                  </span>
                </p>
                <span class="news-date">8 months ago</span>
              </li>
              <li class="news-item">
                <p class="news-title">
                  <span>
                    <a href="/en-US/blog/introducing-ai-help/">
                      Introducing AI Help: Your Trusted Companion for Web
                      Development
                    </a>
                  </span>
                  <span>
                    <a class="news-source" href="/en-US/blog/">
                      developer.mozilla.org
                    </a>
                  </span>
                </p>
                <span class="news-date">8 months ago</span>
              </li>
              <li class="news-item">
                <p class="news-title">
                  <span>
                    <a href="/en-US/blog/introducing-the-mdn-playground/">
                      Introducing the MDN Playground: Bring your code to life!
                    </a>
                  </span>
                  <span>
                    <a class="news-source" href="/en-US/blog/">
                      developer.mozilla.org
                    </a>
                  </span>
                </p>
                <span class="news-date">8 months ago</span>
              </li>
            </ul>
          </section>
        </div>

        {/* data list */}
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </Grid>
    </Container>
  );
};

export default HomePage;
