---
layout: post
title:  "Design System London: Accessibility in the GOV.UK Design System"
date:   2018-11-16 00:00:00 +0000
footnotes:
  - id: tax-your-vehicle
    text: |
      <a href="https://www.gov.uk/vehicle-tax">https://www.gov.uk/vehicle-tax</a>
  - id: micropig
    text: |
      I was introduced to this awesome bit of guidance from
      <a href="https://twitter.com/binaryberry/status/1057202455358914560">Tatiana Stantonian</a>
      <br>
      <a href="https://www.gov.uk/guidance/keeping-a-pet-pig-or-micropig">https://www.gov.uk/guidance/keeping-a-pet-pig-or-micropig</a>
  - id: register-to-vote
    text: |
      <a href="https://www.gov.uk/register-to-vote">https://www.gov.uk/register-to-vote</a>
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

I was invited to speak at <a href="https://www.designsystemslondon.com/">Design Systems London</a>, these are the slides with my speakers notes.

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

  {% capture slideText %}
    {% include footnote-link.html id="tax-your-vehicle" text="Tax your vehicle" %}
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="04" text=slideText %}

  {% capture slideText %}
    {% include footnote-link.html id="micropig" text="To check guidance on keeping a micropig." %}

    You're basically a farmer if you keep a micropig, you might need a license to walk it.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="05" text=slideText %}

  {% capture slideText %}
    {% include footnote-link.html id="register-to-vote" text="Or hopefully to register to vote" %}
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="06" text=slideText %}

  {% capture slideText %}
    I think it’s worth talking about how GOV.UK was put together to give context to why Government might need a design system.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="03" text=slideText %}

  {% capture slideText %}
    Before GOV.UK, there were a ton of differents websites that looked and behaved differently but fundamentally served a similar purpose.

    From the users’ point of view there’s no need for them to be different.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="08" text=slideText %}

  {% capture slideText %}
    We needed to go from 750 websites domains to one top level domain.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="09" text=slideText %}

  {% capture slideText %}
    While this has taken time, most content is now in one place with a consistent user experience and brand.

    We know have more than 300 thousand pieces of content from across government published and

    GOV.UK now has more visits in a single month than there are people in the UK.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="10" text=slideText %}

  {% capture slideText %}
    We needed to go from 750 websites domains to one top level domain.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="11" text=slideText %}

  {% capture slideText %}
    But government online is not just content, it also includes transactional services that rely on users inputting data.

    https://www.gov.uk/performance/services
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="12" text=slideText %}

  {% capture slideText %}
    So why does Government need a design system?

    If merging a bunch of sites together gave a consistent experience surely we don’t need a design system, problem solved.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="13" text=slideText %}

  {% capture slideText %}
    From a technical perspective, content can be centralised, services cannot.

    This means that departments across the UK are

    Building services in different technical stacks, on different domains.

    That all needs to look and feel the same.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="14" text=slideText %}

  {% capture slideText %}
    For example, a business wanting to hire their first employee needs information and services from 5 different areas of government before they can hire them

    https://gds.blog.gov.uk/2018/10/17/building-a-better-gov-uk-step-by-step/
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="15" text=slideText %}

  {% capture slideText %}
    Here’s a totally not fake or exaggerated user journey, to try to illustrate this.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="16" text=slideText %}

  {% capture slideText %}
    The user could start on a content page, which is run by GDS, then they could go through any number of departments running services
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="17" text=slideText %}

  {% capture slideText %}
    These departments all use different technologies but for the user it should look like nothing has changed
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="18" text=slideText %}

  {% capture slideText %}
    Users should not have to understand how government works.

    So how do you create a consistent experience for both content and services with distributed teams?
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="19" text=slideText %}

  {% capture slideText %}
    This where the GOV.UK design System comes in, it’s built from years of research and work from teams across government.

    There were already volunteer led projects that laid the foundation but this is the first time we’ve had a dedicated team to work on this problem.

    The GOV.UK Design System brings together styles, components and patterns.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="20" text=slideText %}

  {% capture slideText %}
    So for styles, we have things like color, spacing, layout and typography
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="21" text=slideText %}

  {% capture slideText %}
    For components, we have things like buttons, tabs, and checkboxes. These tend to be used in many different scenarios.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="22" text=slideText %}

  {% capture slideText %}
    Then finally we have patterns, you might have heard these refered to as design patterns.

    These patterns often give context to where components should be used, but patterns do not need components to exist.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="23" text=slideText %}

  {% capture slideText %}
    We needed to go from 750 websites domains to one top level domain.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="24" text=slideText %}

  {% capture slideText %}
    Something we spend a lot of time on is in the GOV.UK Design System is accessibility.

    But why do we care about accessibility?
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="25" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="26" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="27" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="28" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="29" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="30" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="31" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="32" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="33" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="34" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="35" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="36" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="37" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="38" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="39" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="40" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="41" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="42" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="43" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="44" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="45" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="46" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="47" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="48" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="49" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="50" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="50" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="51" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="52" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="53" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="54" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="55" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="56" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="57" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="58" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="59" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="60" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="61" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="62" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="63" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="64" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="65" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="66" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="67" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="68" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="69" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="70" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="71" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="72" text=slideText %}
</div>
