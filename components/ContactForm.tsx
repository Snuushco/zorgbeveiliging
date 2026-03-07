"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          naam: data.get("naam"),
          organisatie: data.get("organisatie"),
          email: data.get("email"),
          telefoon: data.get("telefoon"),
          bericht: data.get("bericht"),
        }),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-1">
            Naam *
          </label>
          <input
            type="text"
            id="naam"
            name="naam"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="Uw naam"
          />
        </div>
        <div>
          <label htmlFor="organisatie" className="block text-sm font-medium text-gray-700 mb-1">
            Organisatie
          </label>
          <input
            type="text"
            id="organisatie"
            name="organisatie"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="Uw zorginstelling"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mailadres *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="uw@email.nl"
          />
        </div>
        <div>
          <label htmlFor="telefoon" className="block text-sm font-medium text-gray-700 mb-1">
            Telefoonnummer
          </label>
          <input
            type="tel"
            id="telefoon"
            name="telefoon"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="06 1234 5678"
          />
        </div>
      </div>
      <div>
        <label htmlFor="bericht" className="block text-sm font-medium text-gray-700 mb-1">
          Bericht *
        </label>
        <textarea
          id="bericht"
          name="bericht"
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
          placeholder="Vertel ons over uw beveiligingsbehoefte..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Verzenden..." : "Verstuur bericht"}
      </button>
      {status === "sent" && (
        <p className="text-green-600 text-sm font-medium">
          ✓ Bedankt! We nemen zo snel mogelijk contact met u op.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm font-medium">
          Er ging iets mis. Bel ons gerust op 046 240 2401.
        </p>
      )}
    </form>
  );
}
