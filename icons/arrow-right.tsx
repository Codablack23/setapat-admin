interface IconProps{
    height?:string | number,
    width?:string | number,
    iconColor?:string,
    className?:string,
}

export default function ArrowRightIcon(props:IconProps){
    const {height,width,iconColor,className} = props
    // width={width || "18"} height={height || "12"}
    return(
        <svg className={className} width={width || "16"} height={height || "16"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill={iconColor || "#333333"}/>
        </svg>
    )
}


