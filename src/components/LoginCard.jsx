import React from 'react';

export default function LoginCard() {
  return (
    <section
      aria-labelledby="connexion-title"
      className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-[#3A606E]/20 p-6 lg:p-8"
    >
      <h2 id="connexion-title" className="text-xl font-medium text-[#1E152A] mb-4">
        Connexion
      </h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="email" className="block text-sm text-[#3A606E] mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="prenom@cabinet.fr"
            className="w-full rounded-lg border border-[#3A606E]/30 bg-white text-[#1E152A] placeholder-[#3A606E]/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A606E] focus:border-[#3A606E]"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm text-[#3A606E] mb-1">
            Mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="••••••••"
            className="w-full rounded-lg border border-[#3A606E]/30 bg-white text-[#1E152A] placeholder-[#3A606E]/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A606E] focus:border-[#3A606E]"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-[#F56960] text-white font-medium py-2.5 transition-colors hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F56960] focus:ring-offset-[#EBEBEB]"
        >
          Se connecter
        </button>
        <div className="flex items-center justify-between text-sm pt-2">
          <a href="#" className="text-[#3A606E] hover:text-[#1E152A] underline-offset-2 hover:underline">
            Créer un compte
          </a>
          <a href="#" className="text-[#3A606E] hover:text-[#1E152A] underline-offset-2 hover:underline">
            Mot de passe oublié ?
          </a>
        </div>
        <p className="sr-only text-[#59A96A]">États positifs/validation utiliseront le vert sauge.</p>
      </form>
    </section>
  );
}
