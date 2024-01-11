import { ArtistHeader } from "@/components/artist-header";
import { NavItems } from "@components/navigation-items";

export default function Home() {
  return (
    <section>
      <ArtistHeader />
      <div className="h-screen">
        <h1 className="text-xl font-medium text-white">
          Albums and Songs go here
        </h1>
      </div>
    </section>
  );
}
