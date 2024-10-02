// app/dashboard/layout.tsx
import type { Metadata } from "next";
import "../globals.css"; // Reuse global styles

export const metadata: Metadata = {
  title: "Dashboard - My Next.js App",
  description: "Dashboard section of the app",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header></header>
      <main>{children}</main>
    </>
  );
}
