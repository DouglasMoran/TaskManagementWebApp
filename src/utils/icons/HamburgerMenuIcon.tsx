type HamburgerMenuIconProps = {
  width?: string;
  height?: string;
  svgClassName?: string;
  pathClassName?: string;
};

const HamburgerMenuIcon = ({
  width = '24',
  height = '24',
  svgClassName,
  pathClassName = 'fill-current',
}: HamburgerMenuIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClassName}
    >
      <path
        d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
        className={pathClassName}
      />
    </svg>
  );
};

export default HamburgerMenuIcon;
