import type { Metadata } from "next";

import { PortfolioView } from "src/sections/portfolio/view";

// ------------------------------------------------------------

export const metadata: Metadata = {
  title: `Portfolio - Reinaldi Djamil`,
  description: "",
};

// ------------------------------------------------------------

export default function Page() {
  return <PortfolioView />;
}
