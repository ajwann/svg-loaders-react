import React, { ReactElement, SVGProps } from 'react'

export default function BallTriangle(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
): ReactElement {
	return (
		<svg
			stroke="#fff"
			viewBox="0 0 57 57"
			{...{
				...props,
				width: props.width ?? 57,
				height: props.height ?? 57,
				className: `svg-loaders-svg${
					props.className ? ` ${props.className}` : ''
				}`,
			}}
		>
			<g
				transform="translate(1 1)"
				strokeWidth={2}
				fill="none"
				fillRule="evenodd"
			>
				<circle cx={5} cy={50} r={5}>
					<animate
						attributeName="cy"
						begin="0s"
						dur="2.2s"
						values="50;5;50;50"
						calcMode="linear"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="cx"
						begin="0s"
						dur="2.2s"
						values="5;27;49;5"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={27} cy={5} r={5}>
					<animate
						attributeName="cy"
						begin="0s"
						dur="2.2s"
						from={5}
						to={5}
						values="5;50;50;5"
						calcMode="linear"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="cx"
						begin="0s"
						dur="2.2s"
						from={27}
						to={27}
						values="27;49;5;27"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={49} cy={50} r={5}>
					<animate
						attributeName="cy"
						begin="0s"
						dur="2.2s"
						values="50;50;5;50"
						calcMode="linear"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="cx"
						from={49}
						to={49}
						begin="0s"
						dur="2.2s"
						values="49;5;27;49"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
			</g>
		</svg>
	)
}
