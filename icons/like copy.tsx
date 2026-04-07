/** @format */

import { IconProps } from "@/lib/interfaces";

export default function LikeIcon(props: IconProps) {
	const { height, width, fillColor, className } = props;
	// width={width || "18"} height={height || "12"}
	return (
		<svg
			className={className}
			width={width || "24"}
			height={height || "24"}
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1 33H7.182V13.8H1V33ZM35 15.4C35.0118 14.5665 34.6934 13.7622 34.1143 13.1627C33.5352 12.5632 32.7424 12.2171 31.909 12.2H22.157L23.625 4.888L23.671 4.376C23.6723 3.74279 23.4287 3.13361 22.991 2.676L21.354 1L11.185 11.544C10.5943 12.1456 10.2663 12.9569 10.273 13.8V29.8C10.2612 30.6335 10.5796 31.4378 11.1587 32.0373C11.7378 32.6368 12.5306 32.9829 13.364 33H27.273C27.888 32.9968 28.4879 32.8091 28.995 32.461C29.502 32.113 29.8929 31.6207 30.117 31.048L34.784 19.768C34.9269 19.3952 35.0002 18.9993 35 18.6V15.4Z"
				fill={fillColor || "#333333"}
			/>
		</svg>
	);
}
