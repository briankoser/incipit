---
layout: base
title: Home
permalink: /index.html
---

<section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
{% for incipit in incipits %}
<li id="carousel__slide{{ loop.index }}" tabindex="0" class="carousel__slide">
  {% quote incipit %}
  <div class="carousel__snapper">
    {% if not loop.first %}
    <a href="#carousel__slide{{ loop.index - 1}}" class="carousel__prev">Go to last slide</a>
    {% endif %}
    {% if not loop.last %}
    <a href="#carousel__slide{{ loop.index + 1}}" class="carousel__next">Go to next slide</a>
    {% endif %}
  </div>
</li>
{% endfor %}
  </ol>
</section>
