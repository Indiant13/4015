"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={() => router.push("/")}
        className="mb-4 flex cursor-pointer items-center gap-2 text-sm text-clay-700 hover:underline"
      >
        <span aria-hidden="true">←</span>
        Back
      </button>

      <section className="mx-auto w-full max-w-md rounded-2xl bg-clay-100 p-6 shadow-md">
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">Login</h1>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Login feature is not implemented yet.</p>
      </section>
    </main>
  );
}
