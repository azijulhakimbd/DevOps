import { GridBeams } from "@/components/magicui/grid-beams";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-[1440px] w-full overflow-hidden rounded-lg border">
      <GridBeams
        gridSize={0}
        gridColor="rgba(255, 255, 255, 0.2)"
        rayCount={20}
        rayOpacity={0.55}
        raySpeed={1.5}
        rayLength="40vh"
        gridFadeStart={5}
        gridFadeEnd={90}
        className="h-full w-full"
      >
        <div className="flex h-full items-center justify-center">
          <div className="text-center space-y-6 px-4 mt-50">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Welcome to <span className="text-blue-400">DevOps</span> Teams
            </h1>
          </div>
        </div>
        <div></div>
      </GridBeams>
    </div>
  );
}
