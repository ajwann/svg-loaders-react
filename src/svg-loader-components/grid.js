import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ className, ...props }) => (
  <svg width={105} height={105} fill="#fff" viewBox="0 0 105 105" className={`svg-loaders-svg${className ? ` ${className}` : ''}`} {...props}>
    <circle cx={12.5} cy={12.5} r={12.5}>
      <animate
        attributeName="fill-opacity"
        begin="0s"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={12.5} cy={52.5} r={12.5} fillOpacity={0.5}>
      <animate
        attributeName="fill-opacity"
        begin="100ms"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={52.5} cy={12.5} r={12.5}>
      <animate
        attributeName="fill-opacity"
        begin="300ms"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={52.5} cy={52.5} r={12.5}>
      <animate
        attributeName="fill-opacity"
        begin="600ms"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={92.5} cy={12.5} r={12.5}>
      <animate
        attributeName="fill-opacity"
        begin="800ms"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={92.5} cy={52.5} r={12.5}>
      <animate
        attributeName="fill-opacity"
        begin="400ms"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={12.5} cy={92.5} r={12.5}>
      <animate
        attributeName="fill-opacity"
        begin="700ms"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={52.5} cy={92.5} r={12.5}>
      <animate
        attributeName="fill-opacity"
        begin="500ms"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={92.5} cy={92.5} r={12.5}>
      <animate
        attributeName="fill-opacity"
        begin="200ms"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

Grid.propTypes = {
  className: PropTypes.string,
};

Grid.defaultProps = {
  className: undefined,
};

export { Grid };
