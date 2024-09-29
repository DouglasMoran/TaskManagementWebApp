import React from 'react';

import { useSelector } from 'react-redux';

import { ImCancelCircle } from 'react-icons/im';
import { BiSearch } from 'react-icons/bi';

import IconButton from '@components/atoms/IconButton';

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
    <div className="me-2 flex h-16 w-full flex-row items-center gap-4">
      <BiSearch className="h-6 w-6 text-neutral-2" />
      <input
        type="text"
        value={searchQuery}
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
