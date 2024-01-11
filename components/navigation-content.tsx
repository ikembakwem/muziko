import { NavItems } from "./navigation-items";

export const NavContent = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="py-6 overflow-y-auto">
        <div className="pt-2.5">
          <NavItems />
        </div>
      </div>
    </div>
  );
};
