interface PencilIconsProps{
    height?:string | number,
    width?:string | number,
}
export default function Pencil(props:PencilIconsProps){
    return(
        <svg width={props.width || "48"} height={props.height || "48"} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g  clipPath="url(#clip0_4685_5987)">
        <path d="M6 34.4972V41.9972H13.5L35.62 19.8772L28.12 12.3772L6 34.4972ZM41.42 14.0772C42.2 13.2972 42.2 12.0372 41.42 11.2572L36.74 6.57719C35.96 5.79719 34.7 5.79719 33.92 6.57719L30.26 10.2372L37.76 17.7372L41.42 14.0772Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_4685_5987">
        <rect width="48" height="48" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    )
}