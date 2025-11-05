import React from 'react';

export default function HubHeader() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1E152A]">
        Hub du cabinet
      </h1>
      <p className="text-sm sm:text-base text-[#3A606E]">
        Tout le cabinet, au même endroit
      </p>
    </div>
  );
}
