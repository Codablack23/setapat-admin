/** @format */

interface IconProps {
	height?: string | number;
	width?: string | number;
	fillColor?: string;
	className?: string;
}

export default function DownloadIcon(props: IconProps) {
	const { height, width, fillColor, className } = props;
	return (
		<svg
			className={className}
			width={width || "24"}
			height={height || "24"}
			viewBox="0 0 28 34"
			fill={fillColor || "currentColor"}
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M28 12H20V0H8V12H0L14 26L28 12ZM0 30V34H28V30H0Z"
				fill="#currentColor"
			/>
		</svg>
	);
}
