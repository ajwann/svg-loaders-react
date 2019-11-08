[![Build Status](https://travis-ci.org/ajwann/svg-loaders-react.svg?branch=master)](https://travis-ci.org/ajwann/svg-loaders-react)
[![npm version](https://badge.fury.io/js/svg-loaders-react.svg)](https://badge.fury.io/js/svg-loaders-react)

This is a zero-dependency React adaptation of Sam Herberts [SVG Loaders](https://github.com/SamHerbert/SVG-Loaders) library.

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

Each of these components should be able to accept any [SVG tag presentation attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) as props. 

# Common Usage
```Javascript
// render the Puff loader with a stroke opacity of .125
<Puff strokeOpacity=".125" />

// render the Puff loader with a stroke of mint green
<Puff stroke="#98ff98" />

// render the Puff loader with a stroke of mint green and a stroke opactiy of .125
<Puff stroke="#98ff98" strokeOpacity=".125"/>
```



