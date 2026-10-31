import * as SVGLoaders from '../src';

const EXPECTED = [
  'Audio', 'BallTriangle', 'Bars', 'Circles', 'Grid', 'Hearts',
  'Oval', 'Puff', 'Rings', 'SpinningCircles', 'TailSpin', 'ThreeDots',
];

describe('package entry point', () => {
  it('exports exactly the twelve loader components', () => {
    expect(Object.keys(SVGLoaders).sort()).toEqual([...EXPECTED].sort());
  });

  it.each(EXPECTED)('exports %s as a function component', (name) => {
    expect(typeof SVGLoaders[name]).toBe('function');
  });
});
