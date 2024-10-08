import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// toastify
// color custom ?
const AlertMsg = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnHover
        autoClose={500}
      />
    </>
  );
};

export default AlertMsg;
