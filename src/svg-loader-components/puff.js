import React from 'react';
import PropTypes from 'prop-types';

const Puff = ({ className, ...props }) => (
  <svg width={44} height={44} stroke="#fff" viewBox="0 0 44 44" className={`svg-loaders-svg${className ? ` ${className}` : ''}`} {...props}>
    <g fill="none" fillRule="evenodd" strokeWidth={2}>
      <circle cx={22} cy={22} r={1}>
        <animate
          attributeName="r"
          begin="0s"
          dur="1.8s"
          values="1; 20"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.165, 0.84, 0.44, 1"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="0s"
          dur="1.8s"
          values="1; 0"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.3, 0.61, 0.355, 1"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx={22} cy={22} r={1}>
        <animate
          attributeName="r"
          begin="-0.9s"
          dur="1.8s"
          values="1; 20"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.165, 0.84, 0.44, 1"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="-0.9s"
          dur="1.8s"
          values="1; 0"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.3, 0.61, 0.355, 1"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);

Puff.propTypes = {
  className: PropTypes.string,
};

Puff.defaultProps = {
  className: undefined,
};

export { Puff };
