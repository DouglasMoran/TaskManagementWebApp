type GridIconProps = {
  width?: string;
  height?: string;
  svgClassName?: string;
  pathClassName?: string;
};

const GridIcon = ({
  width = '24',
  height = '24',
  svgClassName,
  pathClassName = 'fill-current',
}: GridIconProps) => {
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
        d="M3 3H11V11H3V3ZM3 13H11V21H3V13ZM13 3H21V11H13V3ZM13 13H21V21H13V13ZM15 5V9H19V5H15ZM15 15V19H19V15H15ZM5 5V9H9V5H5ZM5 15V19H9V15H5Z"
        className={pathClassName}
      />
    </svg>
  );
};

export default GridIcon;
