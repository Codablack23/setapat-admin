/** @format */

import { IconProps } from "@/lib/interfaces";

export default function FavIcon(props: IconProps) {
	const { height, width, className } = props;
	return (
		<svg
			className={className}
			width={width || "24"}
			height={height || "24"}
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g>
				<path
					d="M18 26.9142L27.888 33L25.264 21.53L34 13.8126L22.496 12.8174L18 2L13.504 12.8174L2 13.8126L10.736 21.53L8.112 33L18 26.9142Z"
					fill="currentColor"
				/>
				<path
					d="M18 26.9142L27.888 33L25.264 21.53L34 13.8126L22.496 12.8174L18 2L13.504 12.8174L2 13.8126L10.736 21.53L8.112 33L18 26.9142Z"
					fill="currentColor"
					fillOpacity="0.2"
				/>
			</g>
		</svg>
	);
}
