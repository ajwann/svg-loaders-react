import React from 'react';
import PropTypes from 'prop-types';

const TailSpin = ({ className, ...props }) => (
  <svg width={38} height={38} viewBox="0 0 38 38" className={`svg-loaders-svg${className ? ` ${className}` : ''}`} {...props}>
    <defs>
      <linearGradient
        x1="8.042%"
        y1="0%"
        x2="65.682%"
        y2="23.865%"
        id="prefix__a"
      >
        <stop stopColor="#fff" stopOpacity={0} offset="0%" />
        <stop stopColor="#fff" stopOpacity={0.631} offset="63.146%" />
        <stop stopColor="#fff" offset="100%" />
      </linearGradient>
    </defs>
    <g transform="translate(1 1)" fill="none" fillRule="evenodd">
      <path
        d="M36 18c0-9.94-8.06-18-18-18"
        stroke="url(#prefix__a)"
        strokeWidth={2}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </path>
      <circle fill="#fff" cx={36} cy={18} r={1}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);

TailSpin.propTypes = {
  className: PropTypes.string,
};

TailSpin.defaultProps = {
  className: undefined,
};

export { TailSpin };
