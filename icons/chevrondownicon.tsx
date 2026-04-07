/** @format */

import { IconProps } from "@/lib/interfaces";

export default function ChevronDownIconMobile(props: IconProps) {
	const { height, width, fillColor, className } = props;
	return (
		<svg
			className={className}
			width={width || "24"}
			height={height || "24"}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g opacity="0.7">
				<path
					d="M16.59 8.59375L12 13.1737L7.41 8.59375L6 10.0037L12 16.0037L18 10.0037L16.59 8.59375Z"
					fill={fillColor || "black"}
				/>
				<path
					d="M16.59 8.59375L12 13.1737L7.41 8.59375L6 10.0037L12 16.0037L18 10.0037L16.59 8.59375Z"
					fill="black"
					fill-opacity="0.2"
				/>
			</g>
		</svg>
	);
}
