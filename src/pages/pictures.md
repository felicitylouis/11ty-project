---
pageTitle: Apples
navTitle: Pictures
singleImage: /img/apples.png
images:
  - apples.png
  - apples-red.png
  - apples-group.png
pageClass: pictures
---

![alt info a red apple](/img/apples.png)

<img src="/img/apples.png" alt="apple" />

{% for filename in images %}

![alt info goes here](/img/{{ filename }})
{% endfor %}