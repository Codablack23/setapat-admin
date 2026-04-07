interface IconProps{
    width?: number | string;
    height?: number | string;
}

export default function MenuIcon(props:IconProps){
    const {width, height} = props;
    return (
        <svg width={width || "31"} height={height || "22"} viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M30.4219 21.3959H0.09375V17.9412H30.4219V21.3959ZM30.4219 12.755H0.09375V9.3003H30.4219V12.755ZM30.4219 0.65625V4.11094H0.09375V0.65625H30.4219Z" fill="black"/>
        </svg>
    )
}



