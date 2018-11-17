---
layout: post
title:  "Design System London: Accessibility in the GOV.UK Design System"
date:   2018-11-16 00:00:00 +0100
footnotes:
  - id: footnotes
    text: footnotesasdsadsada
---

<style>
  @supports (display: grid) {
    @media (min-width: 30rem) {
      .slides figure {
        display: grid;
        grid-column-gap: 1rem;
        grid-template-columns: 2fr minmax(min-content, 1fr);
      }

      .slides figure :first-child {
        order: 1;
      }
    }
  }

  .slides figcaption {
    font-size: .8rem;
  }

  .slides figcaption::before,
  .slides figcaption::after {
    position: relative;
    top: .5rem;
    display: inline-block;
    font-size: 2em;
    line-height: 0;
  }

  .slides figcaption::before {
    content: '“';
  }

  .slides figcaption::after {
    content: '”';
  }

  .visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    margin: -1px !important;
    padding: 0 !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    border: 0 !important;
    white-space: nowrap !important
  }
</style>

I was invited to speak blah https://www.designsystemslondon.com/

<figure>
  <img src="/assets/img/dsl-accessibility-talk.jpg" alt="Nick stood in front of a slide using Star Wars to explain accessibility legislation">
  <figcaption>
    <a href="https://youtu.be/Z7vapa6p92k?t=18736">Design Systems London live stream recap</a>
    (note: there are no subtitles yet)
  </figcaption>
</figure>

## slides

<div class="slides">
  {% capture slideText %}
    Hey everyone, I’m Nick Colley, I’m a frontend developer at the Government Digital Service
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="01" text=slideText %}

  {% capture slideText %}
    Today I wanted to talk to you about accessibility in the GOV.UK Design System
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="02" text=slideText %}

  {% capture slideText %}
    GOV.UK is the best place to find government services and information online.
    <br/>
    You might have used GOV.UK to...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="03" text=slideText %}
</div>


Test  {% include footnote-link.html id="footnotes" text="footnotes" %}
