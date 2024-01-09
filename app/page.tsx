import { ArtistHeader } from "@/components/artist-header";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div>
        <h1 className="text-center text-3xl"> Hello from Muziko</h1>
      </div>
      <ArtistHeader />
    </section>
  );
}
