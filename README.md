# footer-stick-observable
A helper to listen to `position:sticky` when used for bottom, when it is stuck or not


### Usage
```html
<footer class="my-sticky-footer"> 
</footer>

```

```js
import { observe } from 'https://cdn.jsdelivr.net/gh/schirrel/footer-stick-observable/index.js'

const myFooter = document.querySelector('.my-sticky-footer')
observe({
  name: '.my-sticky-footer',
  callback: (isIntersecting) => {
    if(!isIntersecting) {
      myFooter.classList.add('sticking') 
    } else {
      myFooter.classList.remove('sticking') 
     }
  }
})
```

Simple [codepen](https://codepen.io/schirrel/pen/WNMYXZj?editors=1111)
