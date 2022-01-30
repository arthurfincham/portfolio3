import React from "react";

export default function Triangle({ className }) {
  return (
    <svg height="100" width="100" className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <polygon points="0,85 50,5 100,85 " />
    </svg>
  );
}
