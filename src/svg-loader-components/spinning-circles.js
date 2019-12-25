import React from 'react';
import PropTypes from 'prop-types';

const SpinningCircles = ({ className, ...props }) => (
  <svg width={58} height={58} viewBox="0 0 58 58" className={`svg-loaders-svg${className ? ` ${className}` : ''}`} {...props}>
    <g
      transform="translate(2 1)"
      stroke="#FFF"
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
);

SpinningCircles.propTypes = {
  className: PropTypes.string,
};

SpinningCircles.defaultProps = {
  className: undefined,
};

export { SpinningCircles };
