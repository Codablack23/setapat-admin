/** @format */

import { IconProps } from "@/lib/interfaces";

export default function StarIcon(props: IconProps) {
	const { height, width, fillColor, className } = props;
	// width={width || "18"} height={height || "12"}
	return (
		<svg
			className={className}
			width={width || "20"}
			height={height || "19"}
			viewBox="0 0 30 29"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15 22.9L24.27 28.5L21.81 17.955L30 10.86L19.215 9.945L15 0L10.785 9.945L0 10.86L8.19 17.955L5.73 28.5L15 22.9Z"
				fill={fillColor || "#333333"}
			/>
		</svg>
	);
}
