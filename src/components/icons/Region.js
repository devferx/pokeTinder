import React from "react";

const Region = ({ color }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 1.6a8.8 8.8 0 00-8.8 8.8c0 5.787 5.722 8.558 6.438 9.202.732.659 1.337 2.135 1.581 2.972a.83.83 0 00.781.62.831.831 0 00.78-.62c.245-.837.85-2.312 1.582-2.972.716-.644 6.438-3.415 6.438-9.202A8.8 8.8 0 0012 1.6zM8.606 13.794a.8.8 0 11-1.132 1.132A6.358 6.358 0 015.6 10.4c0-1.71.666-3.317 1.874-4.526a.8.8 0 111.132 1.132A4.77 4.77 0 007.2 10.4c0 1.282.5 2.487 1.406 3.394zM12 12a1.6 1.6 0 110-3.2 1.6 1.6 0 010 3.2zm4.526 2.926a.798.798 0 01-1.132 0 .8.8 0 010-1.132A4.77 4.77 0 0016.8 10.4a4.77 4.77 0 00-1.406-3.394.8.8 0 111.132-1.132A6.358 6.358 0 0118.4 10.4c0 1.71-.666 3.317-1.874 4.526z"
      fill={color ? color : "#fff"}
    />
  </svg>
);

export default Region;