import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./routes";
import ThemeProvider from "./theme/index"; //style
import { AuthProvider } from "./contexts/AuthContext"; //access token

//
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
