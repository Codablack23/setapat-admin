/** @format */

import { IconProps } from "@/lib/interfaces";

export default function RightIcon(props: IconProps) {
	const { width, height, className, } = props;
	return (
		<svg
			className={className}
			width={width || "24"}
			height={height || "24"}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M16 12L10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12Z"
				fill="currentColor"
			/>
			<path
				d="M16 12L10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12Z"
				fill="currentColor"
				fill-opacity="0.2"
			/>
		</svg>
	);
}
