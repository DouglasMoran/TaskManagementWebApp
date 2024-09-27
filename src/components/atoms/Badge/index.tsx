import { PropsWithChildren } from 'react';

type BadgeProps = PropsWithChildren<{
  icon?: JSX.Element;
  title: string;
  containerClass?: string;
  textClass?: string;
}>;

const Badge = ({
  icon,
  title,
  containerClass,
  textClass = 'fill-current',
}: BadgeProps) => {
  return (
    <div
      className={'flex flex-row h-8 justify-center items-center p-4 rounded-md gap-2 bg-neutral-6 '.concat(
        containerClass ?? '',
      )}
    >
      {!!icon && icon}
      <p className={'text-base text-neutral-1'.concat(textClass ?? '')}>
        {title}
      </p>
    </div>
  );
};

export default Badge;
