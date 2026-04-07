/** @format */

import { IconProps } from "@/lib/interfaces";

export default function ReportIcon(props: IconProps) {
	const { width, height, className } = props;
	return (
		<svg
			className={className}
			width={width || "24"}
			height={height || "24"}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g opacity="1">
				<path
					d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z"
					fill="currentColor"
				/>
				<path
					d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z"
					fill="currentColor"
					fill-opacity="0.2"
				/>
			</g>
		</svg>
	);
}
