import React from 'react';

import { useSelector } from 'react-redux';

import { ImCancelCircle } from 'react-icons/im';
import { BiSearch } from 'react-icons/bi';

import { IconButton } from '@components/atoms';

import { setSearchQuery } from '@store/slices/task/taskSlice';
import { MainState, useAppDispatch } from '@store/index';

const Searchbar = () => {
  const dispatch = useAppDispatch();

  const { searchQuery } = useSelector((state: MainState) => state.task);

  const isInputDirty = !!searchQuery;

  const handleInputChnage = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchQuery(event.target.value));

  const clearInputValue = () => dispatch(setSearchQuery(''));

  return (
    <div className="me-2 flex h-16 w-full flex-row items-center gap-4 md:w-3/12 xl:w-9/12 2xl:w-9/12">
      <BiSearch className="h-6 w-6 text-neutral-2 md:h-14 md:w-14 xl:h-8 xl:w-8 2xl:h-8 2xl:w-8" />
      <input
        type="text"
        value={searchQuery}
        maxLength={100}
        onChange={handleInputChnage}
        className="focus:bg-transparen h-[40px] w-full rounded-md bg-transparent px-4 text-neutral-1  focus:outline-none focus:ring-2 focus:ring-neutral-2"
      />

      {isInputDirty && (
        <IconButton
          type="outline"
          onClick={clearInputValue}
          icon={
            <ImCancelCircle className="h-6 w-6 text-neutral-2 hover:text-neutral-1" />
          }
          contentStyles=""
        />
      )}
    </div>
  );
};

export default Searchbar;
