/** @format */

import { IconProps } from "@/lib/interfaces";

interface UploadIconProps {
	width?: string | number;
	height?: string | number;
}

export default function UploadIcon(props: IconProps) {
	const { width, height, className } = props;
	return (
		<svg
			className={className}
			width={width ? width : "24"}
			height={height ? height : "24"}
			viewBox="0 0 22 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6.5 20H15.5V11H21.5L11 0.5L0.5 11H6.5V20ZM0.5 23H21.5V26H0.5V23Z"
				fill="#333333"
			/>
		</svg>
	);
}
