import React from 'react';

const Loading = () => (
  <svg version="1.1" viewBox="0 0 200 200">
    <linearGradient
      id="loading-lg"
      gradientUnits="userSpaceOnUse"
      x1="50.2729"
      y1="149.2628"
      x2="50.2057"
      y2="150.2596"
      gradientTransform="matrix(-191.8076 0.4684 0.4684 191.8078 9666.2314 -28648.707)"
    >
      <stop offset="0" stopColor="#BEE7E1" />
      <stop offset="1" stopColor="#44BCAC" />
    </linearGradient>
    <path
      fill="url(#loading-lg)"
      d="M100.3,196c53-0.1,95.8-43.2,95.7-96.1c-0.1-53-43.2-95.8-96.1-95.7c-5.2,0-9.4,4.2-9.4,9.4
	c0,5.2,4.2,9.4,9.4,9.4c42.6-0.1,77.2,34.3,77.3,76.9c0.1,42.6-34.3,77.2-76.9,77.3c-42.6,0.1-77.2-34.3-77.3-76.9
	c0-5.2-4.2-9.4-9.4-9.4c-5.2,0-9.4,4.2-9.4,9.4C4.3,153.3,47.4,196.1,100.3,196L100.3,196z"
    />
  </svg>
);

export default Loading;
