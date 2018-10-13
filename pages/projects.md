---
layout: project
title: Projects
nav_title: Projects
permalink: /projects/
---

<ol>
{% assign projects = site.projects | sort: 'due' %}
{% for post in projects %}
	<li>
		<a href="{{ site.baseurl }}{{ post.url }}">{{ post.title | markdownify | strip_html | strip }}</a>
		<small>due {{ post.due | class_date: site.data.course.start_date | date: "%b. %-d, %Y" }}</small>
	</li>
{% endfor %}
</ol>
