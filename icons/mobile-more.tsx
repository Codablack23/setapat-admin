/** @format */

import React from "react";

interface IconProps {
	width?: string | number;
	height?: string | number;
}

const MobileMoreIcon = (props: IconProps) => {
	const { width, height } = props;
	return (
		<svg
			width={width || "24"}
			height={height || "24"}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 6V8H3V6H21Z"
				fill="#333333"
			/>
		</svg>
	);
};

export default MobileMoreIcon;
