import './IconsSvg.css';
import svg from '../../icons/sprite.svg';

export default function Icons({
  name,
  className,
  color,
  stroke,
  width,
  height,
}) {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      fill={color}
      stroke={stroke}
      width={width}
      height={height}
    >
      <use xlinkHref={`${svg}#${name}`}></use>
    </svg>
  );
}
