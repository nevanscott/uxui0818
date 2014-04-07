---
layout: homework
title: About Me Markup
due_date: April 7, 2014 6:30pm
---

Assignment
----------

* Make your own 2-page About Me website.

Details
-------

Make a 2-page website about yourself. The first page should be about you, and the second page should be a résumé (or CV).

I recommend making a folder for this project, with two files in it, like so:

```
nevan_scott/
	index.html
	resume.html
```

Give the folder your name instead of mine, but please stick to using lowercase and no spaces for the folder and file names. Instead of spaces, developers typically use either hyphens (-) or underscores (_).

**[Check out this example]({{ site.baseurl }}/projects/wendy_bite_markup/)** that we'll be working on next week, and you'll get the idea.

When you are finished, make a `.zip` of your project folder and upload it to the "Dropbox" for the assignment on Schoology. (Not to be confused with the Dropbox file sharing service.)

Links
-----

We didn't discuss links in class, so here are some basics.

Let's say we have a paragraph like so:

```html
<p>Visit the General Assembly website.</p>
```

The word "website" looks like a good candidate to be a link. Let's add it:

```html
<p>Visit the General Assembly <a href="http://generalassemb.ly/">website</a>.</p>
```

Links use an `a` tag (for "anchor") with an `href` attribute (for "hyper-reference" or something).

The `href` can be a full URL, as it is here, but it could also be a link to a neighboring location, without using a full URL. So, given the file structure above (where `index.html` and `resume.html` are in the same folder), we could have a link to the Résumé page by putting this somewhere in our `index.html` file:

```html
<a href="resume.html">Résumé</a>
```

Likewise, we could put the following somewhere in our `resume.html` file:

```html
<a href="index.html">About Me</a>
```

We'll discuss all of this more on Monday.


## Optional Reading & Viewing

### What Web Developers Do

* The Guardian Blog: <a href="http://www.theguardian.com/help/insideguardian/2009/sep/28/blogpost">What is front-end development?</a>
* [Web Design or Web Development, What’s The Difference?](http://purelybranded.com/insights/web-design-or-web-development-whats-the-difference/)
* [Redefining Web Designers, Web Developers, and Web Hybrids for the modern market](http://tristandenyer.com/redefining-web-designers-web-developers-and-web-hybrids-for-the-modern-market/). Discussion about the modern web development job market.

### How The Internet Works

* Video: [How The Internet Works in Five Minutes](http://www.youtube.com/embed/7_LPdttKXPc?rel=0)
* Video: [How does the Internet work?](http://www.youtube.com/watch?v=oj7A2YDgIWE) - Naked Science Scrapbook
* Cartoon: [How The Internet Works](http://landofthefreeish.com/pics/how-the-internet-works/)

