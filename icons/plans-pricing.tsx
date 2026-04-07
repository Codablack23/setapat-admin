import { IconProps } from "@/lib/interfaces";

export default function PlansPricingIcon(props:IconProps){
    const {width, height,fillColor,className} = props;
    return(
        <svg className={className} width={width || "24"} height={height || "24"} viewBox="0 0 36 36" fill={fillColor || "currentColor"} xmlns="http://www.w3.org/2000/svg">
        <path d="M18 3L9.75 16.5H26.25L18 3Z" fill="currentColor"/>
        <path d="M18 3L9.75 16.5H26.25L18 3Z" fill="currentColor" fill-opacity="0.2"/>
        <path d="M26.25 33C29.9779 33 33 29.9779 33 26.25C33 22.5221 29.9779 19.5 26.25 19.5C22.5221 19.5 19.5 22.5221 19.5 26.25C19.5 29.9779 22.5221 33 26.25 33Z" fill="currentColor"/>
        <path d="M26.25 33C29.9779 33 33 29.9779 33 26.25C33 22.5221 29.9779 19.5 26.25 19.5C22.5221 19.5 19.5 22.5221 19.5 26.25C19.5 29.9779 22.5221 33 26.25 33Z" fill="currentColor" fill-opacity="0.2"/>
        <path d="M4.5 20.25H16.5V32.25H4.5V20.25Z" fill="currentColor"/>
        <path d="M4.5 20.25H16.5V32.25H4.5V20.25Z" fill="currentColor" fill-opacity="0.2"/>
        </svg>
    )
}



