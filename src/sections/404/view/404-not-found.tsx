import Link from "next/link";
import { GridSpotlight } from "src/components/GridSpotLight";
import { Button } from "src/components/ui/button";
import { paths } from "src/routes/paths";

// ------------------------------------------------------------

export function NotFoundView() {
  return (
    <div className="bg-foreground text-background">
      <section className="min-h-screen container mx-auto flex items-center justify-center px-5 relative">
        <div className="absolute inset-0 z-0">
          <GridSpotlight
            gridSize={150}
            gridColor="rgba(255, 255, 255, 0.5)"
            gridStrokeWidth={2}
            spotlightCount={2}
            duration={15}
            className=""
          />
        </div>
        <div className="flex flex-col items-center z-10">
          <h1 className="text-6xl md:text-[12rem] font-bold mb-2 tracking-tight text-center">
            404
          </h1>
          <p className="text-lg font-medium text-center mb-10">
            Page not found
          </p>
          <Link href={paths.landing.root}>
            <Button
              variant="secondary"
              className="w-full md:w-auto h-11 font-semibold px-4"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
