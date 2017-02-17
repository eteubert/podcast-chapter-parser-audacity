# Podcast Chapter Parser for Audacity

Podcast Chapter Parser for Audacity label file.

## Installation

```bash
npm install podcast-chapter-parser-audacity
```

## Example 

```js

var Audacity = require('podcast-chapter-parser-audacity');

var chapters = Audacity.parse("1.200000	1.200000	Intro\n20.500000	20.500000	Say Hello");
// =>
// [
//     { start: 1200, title: "Intro" },
//     { start: 20500, title: "Say Hello" }
// ]
```

## Development

```
npm install
npm test
```
