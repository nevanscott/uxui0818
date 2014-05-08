---
layout: notes
title: The jQuery Function
permalink: /notes/jquery-function/
---

When we use the jQuery library, we primarily make use of the functionality it provides by using a function that it provides called the jQuery function. It's designed to be an immensely flexible function with many uses.


Selecting Elements in the DOM
-----------------------------

The most common use is probably for selecting elements in the DOM for a given page. This can be done by passing the jQuery function a CSS-style selector as a string, for example:

```js
jQuery('p');
```

That instruction would call the jQuery function, which would select all the `p` elements on the page.

If we wanted to select the `body`, we could write:

```js
jQuery('body');
```

We could select every element with a class of `foo` by writing:

```js
jQuery('.foo');
```

### The `$()` shorthand

Because we'll be using the jQuery function frequently, jQuery provides an alias for `jQuery()`, which is `$()`. So the example instructions above could be written:

```js
$('p');     // Select all p elements
$('body');  // Select the body element
$('.foo');  // Select all elements with class foo
```
