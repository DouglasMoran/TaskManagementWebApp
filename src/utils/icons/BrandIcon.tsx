type BrandIconProps = {
  width?: string;
  height?: string;
  svgClassName?: string;
  pathClassName?: string;
};

const BrandIcon = ({
  width = '40',
  height = '40',
  svgClassName,
  pathClassName = 'fill-current',
}: BrandIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClassName}
    >
      <path
        d="M30.4218 26.5565C35.7216 25.1082 39.6183 20.2592 39.6183 14.5C39.6183 7.71624 34.214 2.1948 27.477 2.0066V2H8.06627H0L6.69512 10.3311H8.06627V10.3333H27.181C29.4535 10.3664 31.2857 12.2186 31.2857 14.4989C31.2857 16.8002 29.4204 18.6656 27.1194 18.6656H24.0811H13.3913L28.9285 38H39.6172L30.4218 26.5565Z"
        className={pathClassName}
      />
      <path
        d="M9 38C12.0376 38 14.5 35.5376 14.5 32.5C14.5 29.4624 12.0376 27 9 27C5.96243 27 3.5 29.4624 3.5 32.5C3.5 35.5376 5.96243 38 9 38Z"
        className={pathClassName}
      />
    </svg>
  );
};

export default BrandIcon;
