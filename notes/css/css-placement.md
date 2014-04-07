---
layout: notes
title: Where CSS Goes
permalink: /notes/css-placement/
---



Inline CSS
----------

CSS can be placed inline, like so:

```html
<p style="font-weight: bold;">It was the best of times, it was the wurst of times.</p>
```

Here, the `style` attribute is given some CSS as its value, in this case changing this one paragraph to be displayed bold.

Don't do this.


In the `<head>`
---------------

We can also put styles in a `<style>` element, generally placed in the `<head>` of a document:

```html
<!doctype html>
<html>
	<head>
		<title>Something</title>
		<style>
			p {
				font-weight: bold;
			}
		</style>
	</head>
	<body>
		<p>It was the best of times, it was the wurst of times.</p>
	</body>
</html>
```

This is better, because if we have more than one paragraph, they can all be styled, without having to give each one a `style` attribute.

```html
<!doctype html>
<html>
	<head>
		<title>My Website</title>
		<style>
			p {
				font-weight: bold;
			}
		</style>
	</head>
	<body>
		<p>It was the best of times, it was the wurst of times.</p>
		<p>This paragraph will show up bold as well.</p>
	</body>
</html>
```


External Stylesheet
-------------------

The generally preferred approach is to link to an external CSS file.

`index.html`:

```html
<!doctype html>
<html>
	<head>
		<title>My Website</title>
		<link rel="stylesheet" href="main.css">
	</head>
	<body>
		<p>It was the best of times, it was the wurst of times.</p>
		<p>This paragraph will show up bold as well.</p>
	</body>
</html>
```

`main.css`:

```css
p {
	font-weight: bold;
}
```

What's so great about this approach? It allows us to use the same stylesheet for additional pages of the site, so that styles can be shared.

For instance, we might have an About page:

`about.html`:

```html
<!doctype html>
<html>
	<head>
		<title>About Me | My Website</title>
		<link rel="stylesheet" href="main.css">
	</head>
	<body>
		<p>Even though this is a different page, it shares styles with the homepage by linking to the same CSS file.</p>
		<p>Now these paragraphs will be bold as well.</p>
	</body>
</html>
```

And now, any changes we want to make can be made using the one `main.css` stylesheet!

We will essentially always work this way in this class.