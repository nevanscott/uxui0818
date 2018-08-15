---
layout: project
title: Projects
nav_title: Projects
permalink: /projects/
---

<ol>
{% assign projects = site.projects | date_sort: 'due' %}
{% for post in projects %}
	<li>
		<a href="{{ site.baseurl }}{{ post.url }}">{{ post.title | textilize | strip_html }}</a>
		<small>due {{ post.due | date: "%b. %-d, %Y" }}</small>
	</li>
{% endfor %}
</ol>
