# vanjs-plugin

> A lightweight plugin for van.js adding CSS utilities, reactive style support, color palette, and state detection.

## Installation

```bash
pnpm add @iuroc/vanjs-plugin
```

## Usage

```ts
import van from 'vanjs-core'
import '@iuroc/vanjs-plugin'

const { div } = van.tags

const App = div({
  style: van.css({ color: 'red' }),
}, 'Hello Van.js')

van.add(document.body, App())
```

## Examples

### van.style

Apply styles to an element. Supports reactive style updates via a function.

If a function is provided, the styles will be re-applied reactively whenever dependencies change.

```ts
van.style(
  {
    color: 'red',
    textAlign: 'center',
  },
  document.body,
)
```

### van.css

Generate a CSS string from a style object.

```ts
div(
  {
    style: van.css({
      color: 'red',
      textAlign: 'center',
    }),
  },
  'Hello Van.js',
)
```

### van.isState

Type guard to check if a value is a VanJS State object.

```ts
const message = van.state('Hello World')

van.isState(message) // true
van.isState(123)     // false
```

### van.color

Bootstrap V5 based color scheme.

```ts
van.color.primary.main    // #0d6efd
van.color.primary.bg      // #cfe2ff
van.color.primary.text    // #052c65
van.color.primary.border  // #9ec5fe
van.color.pink            // #d63384
van.color.gray[100]       // #f8f9fa
van.color.gray.default    // #6c757d
```
