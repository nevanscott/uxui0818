---
layout: notes
title: Functions
permalink: /notes/functions/
---

Functions are like little pieces of functionality that we can run.

Here's a **function declaration**:

```js
function foo() {
  var a = b;
}
```

In this example, the name of the function is `foo`. The body of the function goes inside the curly brackets (`{` and `}`).

If I want to **call** that function from somewhere else in my program, I would write:

```js
foo();
```

I could also **bind** the function to an event, for example:

#### index.html

```html
...
<button id="bar">Test</button>
...
```

#### main.js

```js
document.getElementById('bar').onclick = foo;
```

Now, whenever the user clicks on the element with an id of `bar`, the function `foo` will be called.