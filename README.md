# footer-stick-observable
A helper for bottom `position:sticky`,  to listen when it is stuck or not.

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

![example](https://user-images.githubusercontent.com/6757777/173401241-0de38791-f1ca-4492-8424-ddb010a86473.gif)
