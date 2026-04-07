import { IconProps } from "@/lib/interfaces";

export default function DocumentIcon(props:IconProps) {
  const {height, width, fillColor="#333333",className} = props;


    return (
        <svg className={className} width={width || "28"} height={height || "28"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 22V2H14L20 8V22H4ZM13 9H18L13 4V9Z" fill={fillColor} />
        </svg>
    )
}