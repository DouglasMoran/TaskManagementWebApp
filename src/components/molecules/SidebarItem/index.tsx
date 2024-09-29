type SidebarItemProps = {
  name: string;
  selected?: boolean;
  icon: JSX.Element;
  onSelect: () => void;
};

const SidebarItem = ({ icon, name, selected, onSelect }: SidebarItemProps) => {
  return (
    <div
      className={`flex h-14 w-full flex-row items-center justify-start gap-4 ps-4 text-sm ${selected ? 'border-r-4 border-primary-4 bg-primary-5 text-primary-4' : ' text-neutral-2'}`}
      onClick={onSelect}
    >
      {icon}
      <p className="md:text-sm">{name}</p>
    </div>
  );
};

export default SidebarItem;
