# footer-stick-observable

A helper to listen to `position:sticky` when used for bottom, when it is stuck or not

## Install

- ` npm install @schirrel/footer-stick-observable`

### Usage

Have your position:sticky at bottom identified

```html
<style>
  .my-sticky-footer {
    bottom: 0;
    position: sticky;
  }
</style>
<footer class="my-sticky-footer"></footer>
```

Import the observe functions from the lib

- `import { observe } from '@schirrel/footer-stick-observable'`

```js
observe({
  selector: ".my-sticky-footer",
  callback: ({ isStuck }) => {},
});
```

