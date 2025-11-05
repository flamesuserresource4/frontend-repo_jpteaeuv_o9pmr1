import React from 'react';

export default function PaperContainer({ children }) {
  return (
    <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div
        className="relative rounded-2xl bg-white shadow-sm ring-1 ring-[#3A606E]/10"
        style={{
          // Gentle paper feel
          background: '#FFFFFF',
        }}
      >
        <div className="p-5 sm:p-8 lg:p-10">{children}</div>
      </div>
    </div>
  );
}
