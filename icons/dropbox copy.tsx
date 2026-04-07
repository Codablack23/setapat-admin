import { IconProps } from "@/lib/interfaces";

export default function DropBoxIcon (props:IconProps) {
  const {height, width, fillColor,className} = props;
    return (
        <svg className={className} width={width || "28"} height={height || "28"} viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 4.8L7.5 9.585L15 4.8L7.5 0L0 4.8ZM15 4.8L22.5 9.585L30 4.8L22.5 0L15 4.8ZM0 14.325L7.5 19.11L15 14.325L7.5 9.525L0 14.325ZM22.5 9.525L15 14.325L22.5 19.11L30 14.325L22.5 9.525ZM7.545 20.7L15.06 25.5L22.56 20.7L15.06 15.915L7.545 20.7Z" fill={fillColor || "#333333"}/>
        </svg>
      );
}