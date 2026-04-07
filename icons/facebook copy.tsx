/** @format */

interface IconProps {
	classname?: string;
	height?: string | number;
	width?: string | number;
	iconColor?: string;
}

export default function FacebookIcon(props: IconProps) {
	const { height, width, iconColor } = props;
	// width={width || "18"} height={height || "12"}
	return (
		<svg
			width={width || "14"}
			height={height || "24"}
			viewBox="0 0 14 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12.3507 13.5L13.0174 9.156H8.84936V6.33733C8.82033 6.0129 8.86465 5.68609 8.97902 5.3811C9.0934 5.07611 9.2749 4.80075 9.51011 4.5754C9.74531 4.35006 10.0282 4.1805 10.3378 4.07928C10.6474 3.97807 10.9758 3.94778 11.2987 3.99067H13.1934V0.293333C12.0807 0.113637 10.9564 0.0155977 9.82936 0C6.39736 0 4.15336 2.08 4.15336 5.84667V9.156H0.332031V13.5H4.15336V24H8.84936V13.5H12.3507Z"
				fill="currentColor"
			/>
		</svg>
	);
}
