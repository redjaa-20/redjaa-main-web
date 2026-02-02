import { LandingFooter, LandingHeader } from "src/components/landing";

// ------------------------------------------------------------

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-foreground text-background relative overflow-hidden">
      <LandingHeader />
      <main className="flex flex-col">{children}</main>
      <LandingFooter />
    </div>
  );
}
