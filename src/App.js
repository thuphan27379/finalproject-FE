import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

import ThemeProvider from "./theme/index";
import { AuthProvider } from "./contexts/AuthContext"; //access token

//
function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
