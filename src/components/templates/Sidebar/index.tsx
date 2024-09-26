import BrandIcon from '@utils/icons/BrandIcon';

const Sidebar = () => {
  return (
    <div className="mb-8 flex w-[232px] rounded-3xl bg-neutral-4">
      <div className="flex h-10 w-full justify-center items-center mt-4">
        <BrandIcon svgClassName="text-neutral-1" />
      </div>
    </div>
  );
};

export default Sidebar;
