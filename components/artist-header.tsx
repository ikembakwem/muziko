/* eslint-disable @next/next/no-img-element */
import PlayIcon from "@assets/icons/play-2.svg";
import MenuIcon from "@assets/icons/menu.svg";

export const ArtistHeader = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute w-full h-full overflow-hidden -z-[1]">
          <img
            alt="artist image"
            src="/assets/images/burna-boy.jpg"
            className="h-full object-cover"
          />
        </div>
        <div className="flex flex-col text-white justify-between min-h-[324px] h-full w-full">
          <div className="flex justify-end bg-black/40 py-3 px-6">
            <button className="cursor-pointer rounded-full bg-black/60 p-1">
              <span>
                <MenuIcon className="h-7 w-7" />
              </span>
            </button>
          </div>
          <div className="flex justify-between bg-black/40 py-3 px-6">
            <h1 className="text-4xl font-bold">Burna Boy</h1>
            <button className="cursor-pointer rounded-full">
              <span>
                <PlayIcon className="h-10 w-10" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
