<h1 align="center">infinite-scroll-mithril</h1>

<div align="center">

  [![nfinite-scroll-mithril](https://img.shields.io/npm/v/infinite-scroll-mithril?label=infinite-scroll-mithril)](https://github.com/pcpl2/infinite-scroll-mithril)
  [![BSD-2-Clause License](https://img.shields.io/github/license/pcpl2/infinite-scroll-mithril.svg)](https://github.com/pcpl2/infinite-scroll-mithril/blob/main/LICENSE)
  [![Downloads](https://img.shields.io/npm/dm/infinite-scroll-mithril.svg)](https://www.npmjs.com/package/infinite-scroll-mithril)

</div>

Infinity scroll component for mithril

Compatible with Mithril 2.x


## Installation
Use as npm module:
```
npm install infinite-scroll-mithril
```
or download/clone from Github.

## Supported Browsers
This component has required [IntersectionObserver API](https://caniuse.com/?search=IntersectionObserver) to works.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera
| --- | --- | --- | --- | --- |
| Edge 16+ | 55+ | 58+ | 12.1+ | 45+ |
<br />

## How to use

Example avaiable on [codesandbox.io](https://codesandbox.io/s/infinite-scroll-mithril-example-lxgub)

### Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **preload** | optional | Boolean | | Initial loading first page |
| **pageCount** | required | Number | 0 | Number of elements per page |
| **loadingFooter** | optional | Mithril object |  | Element visible under the list while loading |
| **pageRequest** | required | Function `(page: Number) => Promise` | | Function that fetches data; accepts a page number and returns a promise |
| **processPageData** | required | Function `(data: Array) => Array` |  | Function that creates a Mithril element from received data |
