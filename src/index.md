---
layout: layout.html
pageTitle: Classes
navTitle: Classes
tags: page
pageClass: home
---

{% for page in collections.posts %}

<h2> <a href="{{ page.url }}">{{ page.data.pageTitle}}</a></h2>


{% endfor %}