/* eslint-disable @next/next/no-img-element */
import PlayIcon from "@assets/icons/play.svg";
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
        <div className="flex flex-col text-[#FA586A] justify-between min-h-[324px] h-full w-full p-6 pt-5">
          <div className="flex justify-end">
            <button className="cursor-pointer rounded-full">
              <span>
                <MenuIcon className="h-7 w-7" />
              </span>
            </button>
          </div>
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold text-white">Burna Boy</h1>
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
