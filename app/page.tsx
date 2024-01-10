import { ArtistHeader } from "@/components/artist-header";
import Image from "next/image";

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
