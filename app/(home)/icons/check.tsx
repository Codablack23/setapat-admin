interface IconProps{
    height?:string | number,
    width?:string | number,
    fillColor?:string,
}

export default function CheckIconFilled(props:IconProps){
    const {height,width,fillColor} = props
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height || "24px"} viewBox="0 -960 960 960" width={width || "24px"} fill={fillColor || "#e8eaed"}><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
    )
}


