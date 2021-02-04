# React SVG Loaders

[![Build Status](https://travis-ci.org/ajwann/svg-loaders-react.svg?branch=master)](https://travis-ci.org/ajwann/svg-loaders-react)
[![npm version](https://badge.fury.io/js/svg-loaders-react.svg)](https://badge.fury.io/js/svg-loaders-react)
![Unit Test CI](https://github.com/dkress59/svg-loaders-react/workflows/Unit%20Test%20CI/badge.svg)

This is a zero-dependency React adaptation of Sam Herberts [SVG Loaders](https://github.com/SamHerbert/SVG-Loaders) library. **Now also with TypeScript support.**

## Usage

### Install from NPM

```bash
yarn add svg-loaders-react
```

```bash
npm install svg-loaders-react
```

### Import all the loaders in a namespaced fashion

You can import all the loaders at once:

```ts
import SvgLoaders from 'svg-loaders-react';
```

and use them in a namespaced manner:

```ts
<SvgLoaders.Bars />
```

### Import an individual loader

You can also import a single loader:

```ts
import { Bars } from 'svg-loaders-react'
```

and use it without any fancy namespacing:

```ts
<Bars />
```

### Components

```ts
<Audio />
<BallTriangle />
<Bars />
<Circles />
<Grid />
<Hearts />
<Oval />
<Puff />
<Rings />
<SpinningCircles />
<TailSpin />
<ThreeDots />
```

## Options

Each of these components should be able to accept any [SVG tag presentation attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) as props.

## Common Usage

```ts
// render the Puff loader with a stroke opacity of .125
<Puff strokeOpacity=".125" />

// render the Puff loader with a stroke of mint green
<Puff stroke="#98ff98" />

// render the Puff loader with a stroke of mint green and a stroke opactiy of .125
<Puff stroke="#98ff98" strokeOpacity=".125"/>
```
