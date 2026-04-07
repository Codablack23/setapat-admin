interface IconProps{
    height?:string | number,
    width?:string | number,
}

export default function DownloadIcon(props:IconProps) {
    const {height,width} = props
    return (
        <svg width={width || "28"} height={height || "28"} viewBox="0 0 28 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 12H20V0H8V12H0L14 26L28 12ZM0 30V34H28V30H0Z" fill="#currentColor"/>
        </svg>
    )
}