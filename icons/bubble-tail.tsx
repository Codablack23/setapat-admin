import { IconProps } from "@/lib/interfaces";

export default function BubbleTail({fillColor}:IconProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="0,12 0,0 12,12" fill={fillColor ?? "#000000"} />
    </svg>
  );
}
export function BubbleTailLeft({ fillColor }: IconProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Now points to the left */}
      <polygon points="12,12 12,0 0,12" fill={fillColor ?? "#000000"} />
    </svg>
  );
}

