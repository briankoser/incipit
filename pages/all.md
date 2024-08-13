---
layout: base
title: All
permalink: /all/index.html
---

{% for incipit in incipits | sort(attribute="book") -%}
    {% quote incipit %}
{%- endfor %}