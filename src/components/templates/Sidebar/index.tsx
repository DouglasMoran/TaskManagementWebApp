import ModulesList from '@components/organisms/ModulesList';
import BrandIcon from '@utils/icons/BrandIcon';

const Sidebar = () => {
  return (
    <div className="mb-8 flex w-[232px] flex-col rounded-3xl bg-neutral-4 md:w-40 md:min-w-32 lg:w-48 2xl:w-72">
      <div className="mt-4 flex h-10 w-full items-center justify-center">
        <BrandIcon svgClassName="text-neutral-1" />
      </div>
      <ModulesList />
    </div>
  );
};

export default Sidebar;
