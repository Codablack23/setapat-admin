import { IconProps } from "@/lib/interfaces";

export default function ImageHolder(props:IconProps) {
  const {height, width, fillColor,className} = props;
  return (
    <div>
        <svg className={className} width={width || "240"} height={height || "240"} viewBox="0 0 306 310" fill={fillColor || "currentColor"} xmlns="http://www.w3.org/2000/svg">
        <path d="M305.403 216.819V31.7778C305.403 14.8156 291.66 0.9375 274.862 0.9375H91.6208C74.8236 0.9375 61.0805 14.8156 61.0805 31.7778V216.819C61.0805 233.781 74.8236 247.66 91.6208 247.66H274.862C291.66 247.66 305.403 233.781 305.403 216.819ZM137.431 155.139L168.43 196.927L213.782 139.719L274.862 216.819H91.6208L137.431 155.139ZM0 62.618V278.5C0 295.462 13.7431 309.34 30.5403 309.34H244.322V278.5H30.5403V62.618H0Z" fill="#currentColor"/>
        </svg>
    </div>
  )
}
