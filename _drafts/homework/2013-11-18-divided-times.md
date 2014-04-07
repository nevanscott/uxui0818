---
layout: homework
title: Divided Times
---

Assignment
----------

Please complete the Divided Times Nav project that we started in class.

### Divided Times <small>([download]({{ site.baseurl }}/starters/divided_times.zip)) ([preview]({{ site.baseurl }}/projects/divided_times/))</small>


Hints and Details
-----------------

1. In jQuery, the `.click()` method can be given a function either by name, or an anonymous function.
	
	```js
	function doSomething() {
		// stuff to do goes here
	}
	
	$('a').click(doSomething);
	```
	
	is effectively the same as this:
	
	```js
	$('a').click(function(){
		// stuff to do goes here	
	});
	```
	
	If you're just writing a routine that will only ever run when the user clicks on something, the anonymous syntax is often preferable, even if it is a bit more syntactically complex to read.

2. When binding to a click event for a link, you can prevent the link from performing its default action in a couple of ways:
	
	```js
	$('a').click(function(){
		// stuff to do instead of following the link
		return false;
	});
	```
	
	or:
	
	```js
	$('a').click(function(e){
		e.preventDefault();
		// stuff to do instead of following the link
	});
	```
	
	Note that the `e` argument could be named anything, as long as it is the same as what is used for `.preventDefault()`.
	
	This would work:
	
	```js
	$('a').click(function(event){
		event.preventDefault();
		// stuff to do instead of following the link
	});
	```
	
	As would this:
	
	```js
	$('a').click(function(pineapple){
		pineapple.preventDefault();
		// stuff to do instead of following the link
	});
	```

3. You'll want to find a way to keep track of whether the menu is currently open or closed.

4. Remember that inside a `.click()` function, `this` refers to the thing that was clicked. See http://api.jquery.com/click/ for more details.