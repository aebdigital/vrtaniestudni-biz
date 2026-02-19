"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    meno: "",
    email: "",
    telefon: "",
    sprava: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, this would send the form data to an API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-md p-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-green-500 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Správa bola odoslaná
        </h3>
        <p className="text-green-700">
          Ďakujeme za Vašu správu. Budeme Vás kontaktovať čo najskôr.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ meno: "", email: "", telefon: "", sprava: "" });
          }}
          className="mt-4 text-primary hover:text-primary-dark font-medium"
        >
          Odoslať ďalšiu správu
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="meno"
          className="block text-sm font-medium text-dark mb-1"
        >
          Meno *
        </label>
        <input
          type="text"
          id="meno"
          name="meno"
          required
          value={formData.meno}
          onChange={(e) => setFormData({ ...formData, meno: e.target.value })}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
          placeholder="Vaše meno"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-dark mb-1"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
          placeholder="vas@email.sk"
        />
      </div>
      <div>
        <label
          htmlFor="telefon"
          className="block text-sm font-medium text-dark mb-1"
        >
          Telefón
        </label>
        <input
          type="tel"
          id="telefon"
          name="telefon"
          value={formData.telefon}
          onChange={(e) =>
            setFormData({ ...formData, telefon: e.target.value })
          }
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
          placeholder="+421 9XX XXX XXX"
        />
      </div>
      <div>
        <label
          htmlFor="sprava"
          className="block text-sm font-medium text-dark mb-1"
        >
          Správa *
        </label>
        <textarea
          id="sprava"
          name="sprava"
          required
          rows={5}
          value={formData.sprava}
          onChange={(e) => setFormData({ ...formData, sprava: e.target.value })}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-vertical"
          placeholder="Vaša správa..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md transition-colors text-lg"
      >
        Odoslať správu
      </button>
    </form>
  );
}
