---
draft: true
layout: post
title:  Accessibility in the GOV.UK Design System
date:   2018-11-16 00:00:00 +0100
---

<style>
  img {
    max-width: 100%;
  }

  figure {
    margin-bottom: 2rem;
  }

  @supports (display: grid) {
    @media (min-width: 30rem) {
      .slides figure {
        display: grid;
        grid-column-gap: 1rem;
        grid-template-columns: 2fr minmax(min-content, 1.5fr);
      }

      .slides figure :first-child {
        order: 1;
      }
    }
  }

  [aria-label="Back to content"] {
    font-size: 0.8em;
  }
  footer :target {
    outline: 2px dashed blue;
    outline-offset: 2px;
  }
</style>
<figure>
  <img src="https://cdn.glitch.com/e7c85425-a833-464a-b2ab-65c276dadd9a%2Ftalk.jpg?1542456076496" alt="Nick stood infront of a slide using Star Wars to explain accessibility legislation">
  <figcaption>
    <a href="https://youtu.be/Z7vapa6p92k?t=18736">Design Systems London live stream recap</a>
    (note: there are no subtitles yet)
  </figcaption>
</figure>

<h2>
  Slides
</h2>
<div class="slides">
  <figure>
    <a href="https://cdn.glitch.com/e7c85425-a833-464a-b2ab-65c276dadd9a%2FAccessibility%20in%20the%20GOV.UK%20Design%20System%20(3)-02.png?1542456587105">
    <img src="https://cdn.glitch.com/e7c85425-a833-464a-b2ab-65c276dadd9a%2FAccessibility%20in%20the%20GOV.UK%20Design%20System%20(3)-02.png?1542456587105">       </a>
    <figcaption>
      Hey everyone, I’m Nick Colley I’m a frontend developer at the Government Digital Service
    </figcaption>
  </figure>

  <figure>
    <img src="https://cdn.glitch.com/e7c85425-a833-464a-b2ab-65c276dadd9a%2FAccessibility%20in%20the%20GOV.UK%20Design%20System%20(3)-01.png?1542456587425">
    <figcaption>
      Today i wanted to talk to you about accessibility in the GOV.UK Design System
    </figcaption>
  </figure>

  <figure>
    <img src="https://cdn.glitch.com/e7c85425-a833-464a-b2ab-65c276dadd9a%2FAccessibility%20in%20the%20GOV.UK%20Design%20System%20(3)-03.png?1542456587730">
    <figcaption>
      GOV.UK is the best place to find government services and information online.

You might have used GOV.UK to...
    </figcaption>
  </figure>
</div>


<p>Maintaining <a href="#footnotes" aria-describedby="footnote-label" id="footnotes-ref">footnotes</a> manually can be a pain. By using <a href="#css" aria-describedby="footnote-label" id="css-ref">CSS</a> <a href="#css-counters" aria-describedby="footnote-label" id="css-counters-ref">counters</a> to add the numbered references in the text and an ordered list to display the actual footnotes in the footer, it becomes extremely easy.</p>
  </div>

<hr>
<!-- https://www.sitepoint.com/accessible-footnotes-css/ -->
<h2 id="footnote-label">Footnotes</h2>
<ol>
  <li id="footnotes">Footnotes are notes placed at the bottom of a page. They cite references or comment on a designated part of the text above it. <a href="#footnotes-ref" aria-label="Back to content">↩</a></li>

  <li id="css">Cascading Style Sheets <a href="#css-ref" aria-label="Back to content">↩</a></li>

  <li id="css-counters">CSS counters are, in essence, variables maintained by CSS whose values may be incremented by CSS rules to track how many times they're used. <a href="#css-counters-ref" aria-label="Back to content">↩</a></li>
</ol>
