import type { ReactNode } from "react";
import { getCurrentUser } from "../../services/auth/application/getCurrentUser";
import { clayBackgroundClass } from "../../shared/ui/backgrounds/clayBackground";
import { Footer, Header } from "../../shared/ui/layout";

export default async function PublicLayout({ children }: { children: ReactNode }) {
  const user = await getCurrentUser();

  return (
    <div className={`${clayBackgroundClass} flex min-h-screen flex-col text-[var(--color-text-primary)]`}>
      <Header user={user} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
