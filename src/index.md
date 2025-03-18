---
layout: layout.html
pageTitle: Home
navTitle: Classes
tags: page
pageClass: home
---

<!-- ## Classes -->

<!-- <main class="stories"></main> -->



{% for page in collections.posts %}

<h2> <a href="{{ page.url }}">{{ page.data.pageTitle}}</a></h2>
<!-- <p>{{ page.date | date: "%Y-%M-%d" }}</p> -->

{% endfor %}