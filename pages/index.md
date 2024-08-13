---
layout: base
title: Home
permalink: /index.html
---

<div class="carousel-wrapper">
  <ul class="carousel">
  {% for incipit in incipits %}
    <li class="item"><div class="content">{% quote incipit %}</div></li>
  {% endfor %}
    <button onclick="handleClick('previous')" class="button button--previous" type="button">➜</button>
    <button onclick="handleClick('next')" class="button button--next" type="button">➜</button>
  </ul>
</div>