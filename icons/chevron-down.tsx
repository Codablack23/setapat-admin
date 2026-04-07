/** @format */

interface IconProps {
	height?: string | number;
	width?: string | number;
	fillColor?: string;
	className?: string;
}

export default function ChevronDown(props: IconProps) {
	const { height, width, className, fillColor } = props;
	return (
		<svg
			className={className}
			width={width || "18"}
			height={height || "12"}
			viewBox="0 0 18 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15.885 0.875L9 7.745L2.115 0.875L0 2.99L9 11.99L18 2.99L15.885 0.875Z"
				fill={fillColor || "black"}
			/>
			<path
				d="M15.885 0.875L9 7.745L2.115 0.875L0 2.99L9 11.99L18 2.99L15.885 0.875Z"
				fill={fillColor || "black"}
				fill-opacity="0.2"
			/>
		</svg>
	);
}
