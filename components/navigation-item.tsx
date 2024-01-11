export interface NavItemProps extends React.ComponentProps<"a"> {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export const NavItem = ({
  icon,
  label,
  className,
  ...otherProps
}: NavItemProps) => {
  return (
    <a
      {...otherProps}
      className={`flex items-center gap-x-2 w-full h-full px-1 py-1.5 rounded-[6px] text-white cursor-pointer bg-indigo-500 active:bg-indigo-300 ${className}`}
    >
      {icon}
      <span className="text-lg capitalize">{label}</span>
    </a>
  );
};
