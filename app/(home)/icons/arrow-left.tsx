interface IconProps{
    height?:string | number,
    width?:string | number,
    iconColor?:string,
}

export default function ArrowLeftIcon(props:IconProps){
    const {height,width,iconColor} = props
    // width={width || "18"} height={height || "12"}
    return(
        <svg width={width || "16"} height={height || "16"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0L9.41 1.41L3.83 7H16V9H3.83L9.41 14.59L8 16L0 8L8 0Z" fill={iconColor || "#333333"}/>
        </svg>
    )
}





