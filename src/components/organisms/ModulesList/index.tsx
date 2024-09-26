import React, { useState } from 'react';

import SidebarItem from '@components/molecules/SidebarItem';

import { ModuleItem } from '@interfaces/app';

import { MODULES_LIST } from '@mocks/modules';

const ModulesList = () => {
  // Show Dashboard by default
  const defaultModuleToShow = MODULES_LIST[0].id;

  const [moduleSelectedId, setModuleSelectedId] =
    useState<string>(defaultModuleToShow);

  return (
    <div className="my-8 flex w-full flex-1 flex-col">
      {MODULES_LIST.map(({ name, id, icon }: ModuleItem) => {
        const isItemSelected = moduleSelectedId === id;
        return (
          <SidebarItem
            key={id}
            name={name}
            selected={isItemSelected}
            icon={React.cloneElement(icon as React.ReactElement, {
              svgClassName: isItemSelected
                ? 'text-primary-4 hover:text-neutral-1'
                : 'text-neutral-2',
            })}
            onSelect={() => setModuleSelectedId(id)}
          />
        );
      })}
    </div>
  );
};

export default ModulesList;
