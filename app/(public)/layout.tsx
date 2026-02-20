import type { ReactNode } from "react";
import { getCurrentUser } from "../../services/auth/application/getCurrentUser";
import { Footer, Header } from "../../shared/ui/layout";

export default async function PublicLayout({ children }: { children: ReactNode }) {
  const user = await getCurrentUser();

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-clay)] text-[var(--color-text-primary)]">
      <Header user={user} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
