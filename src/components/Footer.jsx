import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 text-center">
      <div className="d-flex align-items-center justify-content-center gap-2">
        <span className="text-muted">
          Made with <span style={{ color: "#ff4d6d" }}>❤️</span> by
        </span>

        <a
          href="https://github.com/harshsinghg12"
          className="text-dark fw-semibold fs-5"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          Harshdeep Singh
        </a>

        <a
          href="https://github.com/harshsinghg12"
          target="_blank"
          rel="noreferrer"
          className="text-dark fs-5 d-flex align-items-center"
        >
          <i className="fa fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
