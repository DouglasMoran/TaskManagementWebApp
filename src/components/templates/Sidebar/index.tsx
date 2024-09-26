import BrandIcon from '@utils/icons/BrandIcon';

const Sidebar = () => {
  return (
    <div className="mb-8 flex w-[232px] rounded-3xl bg-neutral-4">
      <div className="mt-4 flex h-10 w-full items-center justify-center">
        <BrandIcon svgClassName="text-neutral-1" />
      </div>
    </div>
  );
};

export default Sidebar;
