import Searchbar from '@components/organisms/Searchbar';
import IconButton from '@components/atoms/IconButton';
import Avatar from '@components/atoms/Avatar';

import BellIcon from '@utils/icons/BellIcon';

const Navbar = () => {
  return (
    <div className="flex h-16 w-full flex-row items-center justify-between rounded-[16px] bg-neutral-4 px-6">
      <Searchbar />
      <div className="flex flex-row gap-2">
        {/* Notifications button */}
        <IconButton
          type="outline"
          contentStyles={`border-primary-4`}
          icon={
            <BellIcon svgClassName="text-neutral-2  hover:text-neutral-1" />
          }
          onClick={() => null}
        />
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
