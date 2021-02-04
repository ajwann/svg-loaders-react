import React, { ReactElement, SVGProps } from 'react'

export default function SpinningCircles(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
): ReactElement {
	return (
		<svg
			viewBox="0 0 58 58"
			{...{
				...props,
				width: props.width ?? 58,
				height: props.height ?? 58,
				className: `svg-loaders-svg${
					props.className ? ` ${props.className}` : ''
				}`,
			}}
		>
			<g
				transform="translate(2 1)"
				stroke="#fff"
				strokeWidth={1.5}
				fill="#fff"
				fillRule="evenodd"
			>
				<circle cx={42.601} cy={11.462} r={5}>
					<animate
						attributeName="fill-opacity"
						begin="0s"
						dur="1.3s"
						values="1;0;0;0;0;0;0;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={49.063} cy={27.063} r={5} fillOpacity={0}>
					<animate
						attributeName="fill-opacity"
						begin="0s"
						dur="1.3s"
						values="0;1;0;0;0;0;0;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={42.601} cy={42.663} r={5} fillOpacity={0}>
					<animate
						attributeName="fill-opacity"
						begin="0s"
						dur="1.3s"
						values="0;0;1;0;0;0;0;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={27} cy={49.125} r={5} fillOpacity={0}>
					<animate
						attributeName="fill-opacity"
						begin="0s"
						dur="1.3s"
						values="0;0;0;1;0;0;0;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={11.399} cy={42.663} r={5} fillOpacity={0}>
					<animate
						attributeName="fill-opacity"
						begin="0s"
						dur="1.3s"
						values="0;0;0;0;1;0;0;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={4.938} cy={27.063} r={5} fillOpacity={0}>
					<animate
						attributeName="fill-opacity"
						begin="0s"
						dur="1.3s"
						values="0;0;0;0;0;1;0;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={11.399} cy={11.462} r={5} fillOpacity={0}>
					<animate
						attributeName="fill-opacity"
						begin="0s"
						dur="1.3s"
						values="0;0;0;0;0;0;1;0"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx={27} cy={5} r={5} fillOpacity={0}>
					<animate
						attributeName="fill-opacity"
						begin="0s"
						dur="1.3s"
						values="0;0;0;0;0;0;0;1"
						calcMode="linear"
						repeatCount="indefinite"
					/>
				</circle>
			</g>
		</svg>
	)
}
