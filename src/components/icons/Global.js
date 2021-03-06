import React from "react";

const Global = ({ color }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2.4c-5.293 0-9.6 4.308-9.6 9.6 0 5.293 4.307 9.6 9.6 9.6 5.292 0 9.6-4.308 9.6-9.6S17.292 2.4 12 2.4zM12 4c1.515 0 2.925.427 4.131 1.155L16 5.6l.8.8-.8.8-.8-.8h-1.6L12 8l.8 1.6.8-.8V8h.8l.8.8-.8.8-1.6.8-1.6.8h-.8v1.6h.8l1.6-.8.8.8h.8V12l.8-.8 1.6-.8V12h-1.6v.8h1.6l1.6 2.4.8-.8v-.8h-.8v-.8h.8l.769-.167a7.95 7.95 0 01-1.57 4.16V16h-.8L16 13.6l-1.6.8-2.4-.8-2.4.8-.8 1.6.8 1.6h1.6l.8-.8.8.8v2.361A7.988 7.988 0 014 12c0-.731.107-1.436.29-2.108l.51-.292h.8V7.208l.006-.008H6.4l.426-1.303c.33-.28.686-.528 1.058-.752L7.2 7.2h1.6l1.6-1.6v-.8h-.8l-.8.8v-.933A7.988 7.988 0 0112 4zm-1.6 4v1.6h.8V8h-.8z"
      fill={color ? color : "#fff"}
    />
  </svg>
);

export default Global;
