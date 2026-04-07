/** @format */

interface IconProps {
	height?: string | number;
	width?: string | number;
	fillColor?: string;
	className?: string;
}

export default function TrashIcon(props: IconProps) {
	const { height, width, fillColor, className } = props;
	return (
		<svg
			className={className}
			width={width || "28"}
			height={height || "36"}
			viewBox="0 0 28 36"
			fill={fillColor || "none"}
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2 32C2.00317 33.0599 2.42561 34.0755 3.17507 34.8249C3.92453 35.5744 4.94011 35.9968 6 36H22C23.0599 35.9968 24.0755 35.5744 24.8249 34.8249C25.5744 34.0755 25.9968 33.0599 26 32V8H2V32ZM28 2H21L19 0H9L7 2H0V6H28V2Z"
				fill={fillColor || "currentColor"}
			/>
		</svg>
	);
}
