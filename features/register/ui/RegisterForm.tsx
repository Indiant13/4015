"use client";

import { FormEvent, useState } from "react";
import { registerUser } from "../../../services/auth/application/registerUser";
import type { RegisterFormState } from "../model/types";

const INITIAL_STATE: RegisterFormState = {
  name: "",
  email: "",
  password: "",
  country: "",
  city: "",
};

export function RegisterForm() {
  const [form, setForm] = useState<RegisterFormState>(INITIAL_STATE);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isSuccess = await registerUser(form);
    setIsSubmitted(isSuccess);
  };

  return (
    <section className="mx-auto w-full max-w-md rounded-2xl bg-clay-100 p-6 shadow-md">
      <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Create Account</h1>
      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Join the global 40:15 tennis community.</p>

      <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-1 block text-sm text-[var(--color-text-primary)]">Name</span>
          <input
            required
            type="text"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-xl border border-clay-500 bg-white px-3 py-2 text-sm text-[var(--color-text-primary)] outline-none"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm text-[var(--color-text-primary)]">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-xl border border-clay-500 bg-white px-3 py-2 text-sm text-[var(--color-text-primary)] outline-none"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm text-[var(--color-text-primary)]">Password</span>
          <input
            required
            type="password"
            value={form.password}
            onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
            className="w-full rounded-xl border border-clay-500 bg-white px-3 py-2 text-sm text-[var(--color-text-primary)] outline-none"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm text-[var(--color-text-primary)]">Country</span>
          <input
            required
            type="text"
            value={form.country}
            onChange={(event) => setForm((prev) => ({ ...prev, country: event.target.value }))}
            className="w-full rounded-xl border border-clay-500 bg-white px-3 py-2 text-sm text-[var(--color-text-primary)] outline-none"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm text-[var(--color-text-primary)]">City</span>
          <input
            required
            type="text"
            value={form.city}
            onChange={(event) => setForm((prev) => ({ ...prev, city: event.target.value }))}
            className="w-full rounded-xl border border-clay-500 bg-white px-3 py-2 text-sm text-[var(--color-text-primary)] outline-none"
          />
        </label>

        <button
          type="submit"
          className="mt-4 w-full rounded-xl bg-tennis-500 py-3 text-clay-700 font-semibold transition hover:scale-105"
        >
          Register
        </button>

        {isSubmitted ? (
          <p className="text-sm text-[var(--color-text-secondary)]">Registration request accepted.</p>
        ) : null}
      </form>
    </section>
  );
}
