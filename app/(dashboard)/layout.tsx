import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <div className="clay-bg min-h-screen">{children}</div>;
}
