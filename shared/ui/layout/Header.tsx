import Image from "next/image";
import Link from "next/link";
import type { AuthUserPublic } from "../../../entities/auth/types/authUserPublic";

type HeaderProps = {
  user?: AuthUserPublic | null;
};

export function Header({ user }: HeaderProps) {
  return (
    <header className="border-b border-[var(--color-border-soft)] bg-[var(--color-surface-base)]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-semibold tracking-wide text-[var(--color-text-primary)]">
            40:15
          </Link>
          <p className="hidden text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)] sm:block">
            Tennis Social Network
          </p>
        </div>

        {user ? (
          <Link href="/profile" aria-label="Open profile" className="relative h-10 w-10 overflow-hidden rounded-full border border-clay-500">
            <Image src={user.avatarUrl} alt={user.name} fill sizes="40px" className="object-cover" />
          </Link>
        ) : (
          <div className="flex items-center justify-end gap-2">
            <Link
              href="/register"
              className="rounded-xl border border-clay-500 px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] transition hover:scale-105 hover:bg-tennis-500"
            >
              Register
            </Link>
            <Link
              href="/login"
              className="rounded-xl border border-clay-500 px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] transition hover:scale-105 hover:bg-tennis-500"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
