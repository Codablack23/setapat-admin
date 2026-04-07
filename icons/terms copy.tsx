/** @format */

import { IconProps } from "@/lib/interfaces";

export default function TermsIcon(props: IconProps) {
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
					d="M3 18H15V16H3V18ZM3 6V8H21V6H3ZM3 13H21V11H3V13Z"
					fill="currentColor"
				/>
				<path
					d="M3 18H15V16H3V18ZM3 6V8H21V6H3ZM3 13H21V11H3V13Z"
					fill="currentColor"
					fill-opacity="0.2"
				/>
			</g>
		</svg>
	);
}
