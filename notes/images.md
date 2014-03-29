---
layout: default
title: Images
permalink: /notes/images/
categories: notes
tags: HTML
---

Images
======

Images are placed using the `<img>` tag.

Specifying an Image
-------------------

The `img` tag requires a `src` attribute, which tells the browser where to find the image to be placed.

Given a folder structure like:

	webroot/
		index.html
		about/
			index.html
		css/
			main.css
		images/
			background.gif
			logo.png
			photo.jpg

There are different approaches to specifying an image location:
	
### Relative
	
Inside `webroot/index.html`, a relative path could be used like so:

```html
<img src="images/logo.png">
```

Whereas inside `webroot/about/index.html`, the same image would be:

```html
<img src="../images/logo.png">
```

Note that `..` means to go up a directory, and can be used repeatedly: `../..` would go up two directories.

### Absolute
	
Absolute URLs start with a `/`, so if we imagine that our `webroot` directory was stored on a server such that the `webroot/index.html` file is accessible at `http://example.com/index.html`, then placing the logo image could be done from any html page with:
	
```html
<img src="/images/logo.png">
```

The benefit here is that this same `src` path works on any html page, no matter what its location, so the same `img` tag can be used on both the `webroot/index.html` page and the `webroot/about/index.html` page.

The downside is that the path only works if the project is stored to a proper location for serving.

### Full URL
	
Full URLs can also be used, such as:
	
```html
<img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/397/thumb_User-Experience-Sketching.jpg">
```

**Note**: For linking to images, make sure that you have permission to use the image in this way. Even then, it is often better to host a copy of the same image, rather than link to another server, because it reduces dependency.


Accessibility and SEO
---------------------

To make our images more accessible, we should always strive to include an `alt` attribute as well, a piece of text to be used in lieu of the image when the image is unavailable for some reason, such as

* There was a connection error, the browser didn't download the image.
* The file was not found, perhaps because the image got moved elsewhere and the page wasn't updated yet to reflect the change.
* The user is running a text-based browser such as an older phone with a WAP-style browser, or a non-graphical browser like lynx.
* The user is using a screen reader because she has low vision, which will read the `alt` text aloud or present it through a braille reader.

Using `alt` attributes has the added benefit of giving search engines more linguistic context about the image as it is used on your page.

Here's what they look like:

```html
<img src="puppy.jpg" alt="My cute puppy">
```


Image Formats
-------------

There are also three main image file formats:

1. **gif** -- can have basic transparency, typically a `png` is used instead.
2. **jpeg** -- no transparency, can be stored at different compression levels with varying amounts of "lossy-ness", typically the best format for photos. (Try to balance between photo quality and file size.) These can use either the `.jpeg` or the `.jpg` extension. It is generally advisable to pick one and stick with it. I generally use `.jpg`.
3. **png** -- supports transparency and semi-transparency, great for logos, icons, and repeating background tiles. Almost always preferable to a `gif`, unless semi-transparency is not needed, and the `gif` format is significantly smaller.