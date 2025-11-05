import React, { useMemo } from 'react';
import { Heart, Calendar, Users, CreditCard, Megaphone, Briefcase, BarChart3, Bot, Shield } from 'lucide-react';
import CategoryCard from './CategoryCard';

export default function CategoriesGrid() {
  const categories = useMemo(
    () => [
      {
        title: 'Cœur clinique',
        description:
          'Dossier patient, odontogramme, imagerie, prothèse, empreintes, urgences, consentements, prescriptions',
        icon: Heart,
      },
      {
        title: 'Agenda & accueil',
        description:
          'Agenda multi-fauteuils, prise de RDV, file d’attente, check-in QR, listes d’attente',
        icon: Calendar,
      },
      {
        title: 'Relation patient',
        description:
          'Portail patient, questionnaires, téléconsultation, suivi post-op, chat sécurisé',
        icon: Users,
      },
      {
        title: 'Facturation & finances',
        description:
          'Devis, factures, paiements en ligne, reste à charge, relances impayés',
        icon: CreditCard,
      },
      {
        title: 'Marketing & fidélisation',
        description:
          'Campagnes SMS/email, rappels, réactivation, avis en ligne, parrainage',
        icon: Megaphone,
      },
      {
        title: 'Opérations & équipe',
        description:
          'Stocks, inventaire, planning équipe, protocoles, e-learning interne',
        icon: Briefcase,
      },
      {
        title: 'Data & pilotage',
        description:
          'Dashboards, analytics par fauteuil/praticien, rentabilité par traitement, exports comptables',
        icon: BarChart3,
      },
      {
        title: 'IA & automatisation',
        description:
          'Analyse radio assistée, suggestions de plans, résumés auto, messages intelligents',
        icon: Bot,
      },
      {
        title: 'Connecteurs & conformité',
        description:
          'Imagerie, mutuelles/Sécu, outils comptables, sauvegarde légale, RGPD, audit trail',
        icon: Shield,
      },
    ],
    []
  );

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((c) => (
        <CategoryCard key={c.title} icon={c.icon} title={c.title} description={c.description} onClick={() => {}} />
      ))}
    </div>
  );
}
