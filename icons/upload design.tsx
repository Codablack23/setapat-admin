
interface IconProps{
  width?: string | number,
  height?: string | number,
}

export default function UploadDesignIcon(props:IconProps) {
  const { width, height } = props
  return (
    <svg width={width?width:"24"} height={height?height:"24"} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 21V3C29.9976 2.20508 29.6808 1.4434 29.1187 0.881302C28.5566 0.319207 27.7949 0.00237409 27 0H9C8.20508 0.00237409 7.4434 0.319207 6.8813 0.881302C6.31921 1.4434 6.00237 2.20508 6 3V21C6.00237 21.7949 6.31921 22.5566 6.8813 23.1187C7.4434 23.6808 8.20508 23.9976 9 24H27C27.7949 23.9976 28.5566 23.6808 29.1187 23.1187C29.6808 22.5566 29.9976 21.7949 30 21ZM13.5 15L16.545 19.065L21 13.5L27 21H9L13.5 15ZM0 6V27C0.00237409 27.7949 0.319207 28.5566 0.881302 29.1187C1.4434 29.6808 2.20508 29.9976 3 30H24V27H3V6H0Z" fill="#333333"/>
    </svg>
  )
}
