import { RiNotification3Line } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';

import { Button, Avatar } from '@components/atoms';

const Navbar = () => {
  return (
    <div className="flex h-16 max-h-16 min-h-16  w-full flex-row items-center justify-between bg-neutral-4 pe-4 ps-6">
      <Avatar url="" classContainer="h-8 w-8" />

      <div className="flex flex-row">
        <Button variant="ghost" className="rounded-2xl hover:bg-neutral-6">
          <BiSearch className="h-6 w-6 text-neutral-2  hover:text-neutral-1" />
        </Button>
        <Button variant="ghost" className="rounded-2xl hover:bg-neutral-6">
          <RiNotification3Line className="h-6 w-6 text-neutral-2  hover:text-neutral-1" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
