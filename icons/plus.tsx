import { IconProps } from "@/lib/types";

export default function PlusIcon(props:IconProps){
    const {width, height,fillColor,className} = props;
    return (
        <svg className={className} width={width || "24"} height={height || "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill={fillColor || "black"}/>
            <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill={fillColor ||"black"} fill-opacity="0.2"/>
        </svg>

    )
}