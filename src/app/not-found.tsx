import type { Metadata } from "next";

import { NotFoundView } from "src/sections/404/view";

// ------------------------------------------------------------

export const metadata: Metadata = {
  title: `404 Not Found | Reinaldi Djamil`,
  description: "",
};

// ------------------------------------------------------------

export default function Page() {
  return <NotFoundView />;
}
