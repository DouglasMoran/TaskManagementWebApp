'use client';

import * as React from 'react';

import { Calendar } from '@components/ui/calendar';

import { formatDate } from '@utils/date-format';

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md bg-neutral-5 text-neutral-1"
      footer={
        <div className="flex justify-center items-center pt-2 border-t-[1px] border-neutral-2">
          <p className="text-sm text-primary-4 font-normal font-sf">
            {formatDate(date)}
          </p>
        </div>
      }
    />
  );
}
