import React from 'react';

import { useSelector } from 'react-redux';

import { SidebarItem } from '@components/molecules';

import { setTaskViewType } from '@store/slices/task/taskSlice';
import { MainState, useAppDispatch } from '@store/index';

import { ModuleItem } from '@interfaces/app';

import { MODULES_LIST } from '@mocks/modules';

const ModulesList = () => {
  const dispatch = useAppDispatch();

  const { viewType } = useSelector((state: MainState) => state.task);

  return (
    <div className="my-8 flex w-full flex-1 flex-col">
      {MODULES_LIST.map(({ name, id, icon }: ModuleItem) => {
        const isItemSelected = viewType === id;

        return (
          <SidebarItem
            key={id}
            name={name}
            selected={isItemSelected}
            icon={React.cloneElement(icon as React.ReactElement, {
              className: isItemSelected
                ? 'text-primary-4 hover:text-neutral-1 h-6 w-6 md:h-4 md:w-4'
                : 'text-neutral-2 h-6 w-6 md:h-4 md:w-4',
            })}
            onSelect={() => dispatch(setTaskViewType(id))}
          />
        );
      })}
    </div>
  );
};

export default ModulesList;
