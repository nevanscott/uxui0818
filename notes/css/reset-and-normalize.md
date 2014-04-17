---
layout: notes
title: Reset & Normalize
permalink: /notes/reset-and-normalize/
---

What are `normalize.css` and `reset.css`?
-----------------------------------------

In class, we've discussed how browsers have default styles for many elements. These default styles tend to vary between browsers and platforms.

I think Eric Meyer, who authored the [Reset CSS](http://meyerweb.com/eric/tools/css/reset/), has offered pretty close to the definitive rationale for using resets in his 2007 post "[Reset Reasoning](http://meyerweb.com/eric/thoughts/2007/04/18/reset-reasoning/)". I'd recommend looking there for more detail. (The browser landscape has changed somewhat since then, especially as older versions of Internet Explorer have been phased out, but the reasoning still holds.)

The `reset.css` and `normalize.css` work to solve the same problem---smoothing over browser differences in default styles---but have differing philosophies. Meyer's `reset.css` wipes out most styles altogether, so that there are no longer presentational differences between heading levels, for instance. [Nicolas Gallagher's Normalize.css](http://necolas.github.io/normalize.css/), on the other hand, attempts to lay a foundation of "sane defaults" on which to build.

In practice, each is a matter of preference. The `reset.css` amounts to starting to write CSS from a clean slate, while `normalize.css` gives a starting point with a fair amount of style information as a starting point. I prefer to exert more control, and generally prefer to build on a `reset.css` foundation. Some developers prefer the "sane defaults" approach, and tend to start with `normalize.css`.

For the `normalize.css` camp, there is also a popular project called [HTML5 Boilerplate](http://html5boilerplate.com) which includes `normalize.css` and also starts a project off with a fair amount of other niceties. It is certainly worth looking into.

Note that these are both entirely optional, and that `normalize.css` and `reset.css` are not meant to be used together.

Also, because they lay a foundation, on which a developer constructs *overriding* CSS, they should be linked to *before* your CSS file, like so:

```html
<head>
	<title>My Awesome Webpage</title>
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/main.css">
</head>
```

or, if you prefer to use a reset:

```html
<head>
	<title>My Awesome Webpage</title>
	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/main.css">
</head>
```