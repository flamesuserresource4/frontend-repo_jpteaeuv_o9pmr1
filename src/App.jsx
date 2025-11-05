import React from 'react';
import BrandHeader from './components/BrandHeader';
import LoginCard from './components/LoginCard';
import AppsGrid from './components/AppsGrid';
import BackgroundFlow from './components/BackgroundFlow';

function App() {
  return (
    <div className="min-h-screen bg-[#EBEBEB] antialiased">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Brand + Login */}
          <div>
            <BrandHeader />
            <LoginCard />
          </div>

          {/* Right: Apps hub preview */}
          <div className="relative rounded-2xl border border-[#3A606E]/20 bg-white/60 backdrop-blur-sm p-6 lg:p-8 shadow-sm overflow-hidden">
            <BackgroundFlow />
            <AppsGrid />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
