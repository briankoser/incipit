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
    <button id="btnPrevious" onclick="handleClick('previous')" class="button button--previous" type="button" style="display:none;">➜</button>
    <button id="btnNext" onclick="handleClick('next')" class="button button--next" type="button">➜</button>
  </ul>
</div>

<script>
  // https://www.nieknijland.nl/blog/make-a-responsive-carousel-with-just-css
  const carousel = document.querySelector(".carousel");

  // We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.
  const item = document.querySelector(".item");
  const itemWidth = item.offsetWidth;

  function handleClick(direction) {
    // Display previous button after first click of next button
    document.getElementById('btnPrevious').style.display = "";

    // Based on the direction we call `scrollBy` with the item width we got earlier
    if(direction === "previous") {
    carousel.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else {
    carousel.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  }
</script>