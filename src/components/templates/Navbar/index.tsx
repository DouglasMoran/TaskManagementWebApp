import { RiNotification3Line } from 'react-icons/ri';

import Searchbar from '@components/organisms/Searchbar';
import IconButton from '@components/atoms/IconButton';
import Avatar from '@components/atoms/Avatar';

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
            <RiNotification3Line className="h-6 w-6 text-neutral-2  hover:text-neutral-1" />
          }
          onClick={() => null}
        />
        <Avatar url="" />
      </div>
    </div>
  );
};

export default Navbar;
