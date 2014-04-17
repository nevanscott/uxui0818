---
layout: notes
title: Filenames
permalink: /notes/filenames/
---

Why are there no spaces in file and folder names?
-------------------------------------------------

I'm glad you asked! Spaces aren't allowed in URLs, and instead get encoded, typically as `%20`. Say we had the following neighboring files:

```
index.html
contact me.html
```

Note the space in `contact me.html`.

If you uploaded the files to a server, the URL for the Contact Me page would be something like `http://example.com/contact%20me.html`.

Gross. Save yourself and your users the headache and use underscores (`_`) or hyphens (`-`) instead of spaces.


OK, well, why are they all lowercase?
-------------------------------------

This is considered a general best practice because some server file systems are case sensitive, and others are not. In order to avoid potential problems, the convention is to stick to lowercase.