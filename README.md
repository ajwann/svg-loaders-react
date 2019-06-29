[![Build Status](https://travis-ci.org/ajwann/svg-loaders-react.svg?branch=master)](https://travis-ci.org/ajwann/svg-loaders-react)
[![npm version](https://badge.fury.io/js/svg-loaders-react.svg)](https://badge.fury.io/js/svg-loaders-react)

This is a React adaptation of Sam Herberts [SVG Loaders](https://github.com/SamHerbert/SVG-Loaders) library.

# Usage

## Install from NPM
```bash
npm install svg-loaders-react
```

## Import the SVGLoaders components

### Import all the loaders in a namespaced fashion
You can import all the loaders at once:
```js
import * as SVGLoaders from 'svg-loaders-react';
```
and use them in a namespaced manner:
```js
<SVGLoaders.Bars />
```

### Import an individual loader
You can also import a single loader:
```js
import { Bars } from 'svg-loaders-react'
```
and use it without any fancy namespacing:
```js
<Bars />
```

## Components

```<Audio />```

```<BallTriangle />```

```<Bars />```

```<Circles />```

```<Grid />```

```<Hearts />```

```<Oval />```

```<Puff />```

```<Rings />```

```<SpinningCircles />```

```<TailSpin />```

```<ThreeDots />```

# Options

Each of these components wraps an [SVGInline](https://github.com/MoOx/react-svg-inline) component.
You can pass any options to the loader components that you can an SVGInline component.
The options are:
```text
className
classSuffix
component
fill
cleanup
cleanupExceptions
width
height
accessibilityLabel
accessibilityDesc
```
For a complete description of each option, please see the [react-svg-inline docs](https://github.com/MoOx/react-svg-inline#options-props).

