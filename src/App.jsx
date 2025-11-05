import React from 'react';
import BackgroundFlow from './components/BackgroundFlow';
import PaperContainer from './components/PaperContainer';
import HubHeader from './components/HubHeader';
import CategoriesGrid from './components/CategoriesGrid';

function App() {
  return (
    <div className="relative min-h-screen bg-[#EBEBEB] antialiased">
      <div className="absolute inset-0 pointer-events-none">
        <BackgroundFlow />
      </div>

      <main className="relative z-0 mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 sm:py-10 lg:py-14">
        <PaperContainer>
          <div className="flex flex-col gap-6">
            <HubHeader />
            <CategoriesGrid />
          </div>
        </PaperContainer>

        {/* Subtle footer actions / CTA area */}
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#3A606E]/10 bg-white/70 p-3 shadow-sm">
            <p className="text-sm text-[#3A606E]">
              Choisissez une famille pour découvrir les applications dédiées.
            </p>
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-[#F56960] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#F56960]/40"
            >
              Créer un raccourci
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
