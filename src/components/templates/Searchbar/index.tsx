import IconButton from '@components/atoms/IconButton';

import BellIcon from '@utils/icons/BellIcon';
import LoupeIcon from '@utils/icons/LoupeIcon';

const Searchbar = () => {
  return (
    <div className="flex h-16 w-full flex-row items-center justify-between rounded-[16px] bg-neutral-4 px-6">
      <div className="flex w-8/12 flex-row items-center gap-4">
        <LoupeIcon svgClassName="text-neutral-2  hover:text-neutral-1" />
        <input className="h-[40px] w-full px-4 bg-transparent focus:bg-transparent border-neutral-4"></input>
      </div>

      <div className="flex flex-row gap-2">
        <IconButton
          type="outline"
          contentStyles={`border-primary-4`}
          icon={
            <BellIcon svgClassName="text-neutral-2  hover:text-neutral-1" />
          }
          onClick={() => null}
        />
        <div className="h-[40px] w-[40px] rounded-3xl bg-tertiary-3"></div>
      </div>
    </div>
  );
};

export default Searchbar;
