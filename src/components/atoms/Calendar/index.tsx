'use client';

import { Calendar as ShadcnCalendar } from '@components/ui/calendar';

import { formatDate } from '@utils/date-format';

type CalendarProps = {
  date: Date;
  onSelect: (date: Date) => void;
};

const Calendar = ({ date, onSelect }: CalendarProps) => {
  const dateFormatter = formatDate(date);

  return (
    <ShadcnCalendar
      mode="single"
      selected={date}
      onSelect={(date) => onSelect(date ?? new Date())}
      className="rounded-md bg-neutral-5 text-neutral-1"
      footer={
        <div className="flex items-center justify-center border-t-[1px] border-neutral-2 pt-2">
          <p className="font-sf text-sm font-normal text-primary-4">
            {dateFormatter}
          </p>
        </div>
      }
    />
  );
};

export default Calendar;
