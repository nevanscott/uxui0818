---
layout: notes
title: Manipulating the DOM
permalink: /notes/dom-manipulation/
---


Once we've selected an element or set of elements, we typically want to do something to (or with) that element / those elements.


Altering the DOM
----------------

jQuery provides us with a variety of **methods** that we can **chain** onto the result of the jQuery function, by using the following notation:

```js
$('body').addClass('foo');
```

As a result of that instruction, a class of `foo` would be added to the `body` element, changing the DOM, like so:

```html
<body class="foo">
  ...
</body>
```

There are many of these methods for manipulating the DOM, [listed in the jQuery API Documentation](http://api.jquery.com/category/manipulation/).


Reading the DOM
---------------

These "manipulation" methods are not only used to make changes to the DOM, they can also be used to read the DOM or something about the DOM.

For instance, `$('body').hasClass('logged-in');` will check whether the `body` element has the class `logged-in` or not. This may not be all that useful on its own, but could be as a condition for an `if` statement:

```js
var loggedIn = $('body').hasClass('logged-in');
// now the variable `loggedIn` will be set to either true or false
if(loggedIn) {
  // Do something
}
```


Reading or Altering the DOM
---------------------------

Some methods, like `.attr()` can be used to either get information about an element or elements, or to change something about that element / those elements.

Say we have this in our initial HTML:

```html
<body id="about">
  ...
</body>
```

We could use the `.attr()` method to retrieve the `id` of the `body` like so:

```js
var bodyID = $('body').attr('id');
// bodyID will be set to "about"
```

Or, we could use the same method to change that attribute:

```js
$('body').attr('id', 'home');
// The body element will be changed to <body id="home">
```

