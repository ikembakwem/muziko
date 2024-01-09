/* eslint-disable @next/next/no-img-element */
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
        <div className="flex flex-col justify-between min-h-[324px] h-full w-full p-6 pt-5">
          <div>header</div>
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Burna Boy</h1>
            <button>
              <span>btn</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
