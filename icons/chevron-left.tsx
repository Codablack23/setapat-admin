/** @format */
interface IconProps {
	height?: string | number;
	width?: string | number;
	fillColor?: string;
	className?: string;
}
export default function ChevronLeft(props: IconProps) {
	const { height, width, fillColor, className } = props;
	return (
		<svg
			className={className}
			width={width || "18"}
			height={height || "14"}
			viewBox="0 0 12 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12 9L3 0L0.885 2.115L7.755 9L0.885 15.885L3 18L12 9Z"
				fill={fillColor || "black"}
			/>
			<path
				d="M12 9L3 0L0.885 2.115L7.755 9L0.885 15.885L3 18L12 9Z"
				fill={fillColor || "black"}
				fill-opacity="0.2"
			/>
		</svg>
	);
}
