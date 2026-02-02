import type { Metadata } from "next";

import { LandingView } from "src/sections/landing/view";

// ------------------------------------------------------------

export const metadata: Metadata = {
  title: `Reinaldi Djamil`,
  description: "",
};

// ------------------------------------------------------------

export default function Page() {
  return <LandingView />;
}
