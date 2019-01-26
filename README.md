This is a React implementation of Sam Herberts [SVG Loaders](https://github.com/SamHerbert/SVG-Loaders) library.

## Usage

You can import all the loaders at once:
```js
import * as SVGLoaders from 'svg-loaders-react';
```
and use them in a namespaced manner:
```js
<SVGLoaders.Bars />
```

You can also import a single loader:
```js
import { Bars } from 'svg-loaders-react'
```
and use it without any fancy namespacing:
```js
<Bars />
```

## Options

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

