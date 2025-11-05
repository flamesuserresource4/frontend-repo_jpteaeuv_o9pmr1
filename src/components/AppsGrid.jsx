import React from 'react';
import { PieChart, FileText, Bell, UserX, Image as ImageIcon, Package } from 'lucide-react';

function AppCard({ icon: Icon, title, subtitle }) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="group rounded-xl border border-[#3A606E]/20 bg-white/80 backdrop-blur-sm p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#3A606E]"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#3A606E]/20 text-[#3A606E]">
          <Icon size={20} aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-[#1E152A]">{title}</h3>
          <p className="text-xs text-[#3A606E] opacity-80">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function AppsGrid() {
  const apps = [
    { icon: PieChart, title: 'Compta', subtitle: 'Tableaux & facturation' },
    { icon: FileText, title: 'Dossier patient', subtitle: 'Historique & actes' },
    { icon: Bell, title: 'Campagnes de rappel', subtitle: 'SMS & emails' },
    { icon: UserX, title: 'No show', subtitle: 'Analyse & prévention' },
    { icon: ImageIcon, title: 'Imagerie', subtitle: 'RX & photos' },
    { icon: Package, title: 'Prothèse', subtitle: 'Suivi des travaux' },
  ];

  return (
    <section aria-labelledby="apps-title" className="relative">
      <h2 id="apps-title" className="text-xl font-medium text-[#1E152A] mb-4">
        Vos apps
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {apps.map((app) => (
          <AppCard key={app.title} {...app} />
        ))}
      </div>
    </section>
  );
}
