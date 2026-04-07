import React from 'react';

interface IconProps{
    height?:string | number,
    width?:string | number,
}

const MobileHomeIcon = (props: IconProps) => {
    const {width,height} = props

  return (
    <svg width={width || "18"} height={height || "20"} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.2 15.3V9.9H10.8V15.3H15.3V8.1H18L9 0L0 8.1H2.7V15.3H7.2Z" fill="#333333"/>
    </svg>
  );
}

export default MobileHomeIcon;
