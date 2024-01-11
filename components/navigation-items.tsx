import { NavItem, NavItemProps } from "./navigation-item";
import PlayerIcon from "@assets/icons/play.svg";
import LibraryIcon from "@assets/icons/library.svg";
import SearchIcon from "@assets/icons/search.svg";
import SongIcon from "@assets/icons/music.svg";
import FavouriteIcon from "@assets/icons/favourite.svg";

const navItemsData: NavItemProps[] = [
  { icon: <PlayerIcon className="h-7 w-7" />, label: "listen now" },
  { icon: <LibraryIcon className="h-7 w-7" />, label: "browse" },
  { icon: <SearchIcon className="h-7 w-7" />, label: "search" },
  { icon: <SongIcon className="h-7 w-7" />, label: "songs" },
  { icon: <FavouriteIcon className="h-7 w-7" />, label: "favourites" },
];

export const NavItems = () => {
  return (
    <ul className="py-2 px-7 flex flex-col gap-y-2">
      {navItemsData.map((data) => (
        <li key={data.label}>
          <NavItem icon={data.icon} label={data.label} />
        </li>
      ))}
    </ul>
  );
};
