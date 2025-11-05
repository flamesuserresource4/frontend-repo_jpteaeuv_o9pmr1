import React from 'react';

export default function BackgroundFlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="flow" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#3A606E" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#3A606E" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#flow)" strokeWidth="1">
          <path d="M0 100 C300 50, 600 150, 1200 80" />
          <path d="M0 250 C350 200, 700 300, 1200 260" />
          <path d="M0 420 C320 360, 640 460, 1200 420" />
          <path d="M0 600 C380 560, 760 660, 1200 640" />
        </g>
        <g fill="#3A606E" fillOpacity="0.08">
          <circle cx="200" cy="250" r="2" />
          <circle cx="520" cy="420" r="2" />
          <circle cx="880" cy="600" r="2" />
        </g>
      </svg>
    </div>
  );
}
