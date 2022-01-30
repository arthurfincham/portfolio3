import React from "react";
export default function AnimateCSSLogo({ className }) {
  return (
    <svg className={className} width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect className="fill-black dark:fill-white" x="18.18" y="18.18" width="63.64" height="63.64" transform="translate(-20.71 50) rotate(-45)" />
      <path
        className="fill-white dark:fill-black"
        d="M61.91,43.88V57.67c0,1.95.73,2.81,2.38,2.81h1v6.34A8.34,8.34,0,0,1,60.69,68a6.37,6.37,0,0,1-6.22-3.72h-.25C52.94,66,50.38,68.1,45.44,68.1c-6.71,0-10.19-4.57-10.19-9.51,0-7.94,7.14-11.6,18-11.05V44.86c0-3.84-2.14-5-5-5a6.05,6.05,0,0,0-5.91,3.9l-6.53-4.82a14.26,14.26,0,0,1,12.38-6.46C57,32.48,61.91,35.53,61.91,43.88Zm-8.66,9.89c-6-.43-9,1-9,4,0,2,1.34,3.36,3.72,3.36a6.7,6.7,0,0,0,5.31-2.44Z"
      />
    </svg>
  );
}
