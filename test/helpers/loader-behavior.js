import React, { StrictMode } from 'react';
import { render } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server.node';

const REACT_MAJOR = Number(React.version.split('.')[0]);

const getSvg = (container) => container.querySelector('svg');

// Shared behavior suite run against every loader component.
// `defaults` lists the attributes the component sets on its root <svg>.
export default function describeLoader(name, Component, defaults) {
  describe(`<${name} />`, () => {
    it('renders a single root <svg> element', () => {
      const { container } = render(<Component />);
      expect(container.children).toHaveLength(1);
      expect(getSvg(container)).not.toBeNull();
    });

    it('renders the expected default attributes', () => {
      const svg = getSvg(render(<Component />).container);
      Object.entries(defaults).forEach(([attr, value]) => {
        expect(svg.getAttribute(attr)).toBe(String(value));
      });
    });

    it('has a viewBox with four numeric values', () => {
      const viewBox = getSvg(render(<Component />).container).getAttribute('viewBox');
      expect(viewBox.split(' ').map(Number).every(Number.isFinite)).toBe(true);
      expect(viewBox.split(' ')).toHaveLength(4);
    });

    it('applies only the base class when no className is given', () => {
      const svg = getSvg(render(<Component />).container);
      expect(svg.getAttribute('class')).toBe('svg-loaders-svg');
    });

    it('appends a custom className to the base class', () => {
      const svg = getSvg(render(<Component className="custom extra" />).container);
      expect(svg.getAttribute('class')).toBe('svg-loaders-svg custom extra');
    });

    it('ignores an empty className', () => {
      const svg = getSvg(render(<Component className="" />).container);
      expect(svg.getAttribute('class')).toBe('svg-loaders-svg');
    });

    it('lets props override the default dimensions and colors', () => {
      const svg = getSvg(render(
        <Component width={10} height={20} fill="red" stroke="blue" viewBox="0 0 1 1" />,
      ).container);
      expect(svg.getAttribute('width')).toBe('10');
      expect(svg.getAttribute('height')).toBe('20');
      expect(svg.getAttribute('fill')).toBe('red');
      expect(svg.getAttribute('stroke')).toBe('blue');
      expect(svg.getAttribute('viewBox')).toBe('0 0 1 1');
    });

    it('passes through arbitrary props to the root <svg>', () => {
      const onClick = jest.fn();
      const svg = getSvg(render(
        <Component
          id="loader"
          role="img"
          aria-label="Loading"
          data-testid="loader"
          style={{ opacity: 0.5 }}
          onClick={onClick}
        />,
      ).container);
      expect(svg.id).toBe('loader');
      expect(svg.getAttribute('role')).toBe('img');
      expect(svg.getAttribute('aria-label')).toBe('Loading');
      expect(svg.getAttribute('data-testid')).toBe('loader');
      expect(svg.style.opacity).toBe('0.5');
      svg.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    if (REACT_MAJOR >= 19) {
      it('forwards a ref to the root <svg> (React 19 ref-as-prop)', () => {
        const ref = React.createRef();
        render(<Component ref={ref} />);
        expect(ref.current).toBeInstanceOf(SVGSVGElement);
      });
    } else {
      it('does not receive a ref (React 18 function components)', () => {
        const error = jest.spyOn(console, 'error').mockImplementation(() => {});
        try {
          const ref = React.createRef();
          render(<Component ref={ref} />);
          expect(ref.current).toBeNull();
          const messages = error.mock.calls.map((args) => args.map(String).join(' '));
          expect(messages.some((m) => m.includes('Function components cannot be given refs'))).toBe(true);
        } finally {
          error.mockRestore();
        }
      });
    }

    it('contains SVG animation elements', () => {
      const { container } = render(<Component />);
      expect(container.querySelectorAll('animate, animateTransform').length).toBeGreaterThan(0);
    });

    it('renders under StrictMode without errors or warnings', () => {
      const error = jest.spyOn(console, 'error').mockImplementation(() => {});
      const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
      try {
        render(<StrictMode><Component /></StrictMode>);
        expect(error).not.toHaveBeenCalled();
        expect(warn).not.toHaveBeenCalled();
      } finally {
        error.mockRestore();
        warn.mockRestore();
      }
    });

    it('renders on the server to the same markup as the client', () => {
      const html = renderToStaticMarkup(<Component />);
      expect(html.startsWith('<svg')).toBe(true);
      expect(html).toBe(render(<Component />).container.innerHTML);
    });

    it('matches the markup snapshot', () => {
      expect(getSvg(render(<Component />).container)).toMatchSnapshot();
    });
  });
}
