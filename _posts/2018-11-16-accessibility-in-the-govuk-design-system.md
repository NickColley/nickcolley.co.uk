---
layout: post
title:  "Design System London: Accessibility in the GOV.UK Design System"
date:   2018-11-16 00:00:00 +0000
footnotes:
  - id: tax-your-vehicle
    text: |
      "<a href="https://www.gov.uk/vehicle-tax">Tax your vehicle</a>"
  - id: micropig
    text: |
      I was introduced to this awesome bit of guidance from
      <a href="https://twitter.com/binaryberry/status/1057202455358914560">Tatiana Stantonian</a>
      <br>
      "<a href="https://www.gov.uk/guidance/keeping-a-pet-pig-or-micropig">Keeping a pet pig or 'micropig'</a>"
  - id: register-to-vote
    text: |
      "<a href="https://www.gov.uk/register-to-vote">Register to vote</a>"
  - id: before-govuk
    text: |
      You can read the beginnings of GDS and GOV.UK in
      "<a href="https://gds.blog.gov.uk/story/">A GDS story</a>"
  - id: revolution-not-evolution
    text: |
      In <a href="https://twitter.com/Marthalanefox">Martha Lane Fox</a>'s report
      <a href="https://www.gov.uk/government/publications/directgov-2010-and-beyond-revolution-not-evolution-a-report-by-martha-lane-fox">"Revolution not Evolution"</a>
      <br/>
      "NolO feel it is preferable to go from 750 top level website domains (eg www.cabinetoffice.gov.uk) to a single top level website domain for all of central government."
      <br/>
      "The user should not have to navigate the departmental structure of Government before finding the service or content what they need."
    count: 2
  - id: 300k-content
    text: |
      If you query
      <a href="https://www.gov.uk/api/search.json">GOV.UK's Search API</a>
      it will give you a total, as of writing this is 376,518.
  - id: visits-a-month
    text: |
      <a href="https://www.gov.uk/performance/site-activity">Activity on GOV.UK: web traffic</a>
  - id: govuk-services
    text: |
      You can see how many services there are with the
      <a href="https://www.gov.uk/performance/services">Service data dashboard</a>.
      <br/>
      As of writing there are 780 services, with 1.03 billion completed transactions per year. (384 services out of 780.)
  - id: step-by-step
    text: |
      <a href="https://gds.blog.gov.uk/2018/10/17/building-a-better-gov-uk-step-by-step">Building a better GOV.UK, step by step</a>.
  - id: start-pages-pattern
    text: |
      Transactional services have a Start page that is on www.GOV.UK and links to a specific service domain.
      <ul>
        <li><a href="https://design-system.service.gov.uk/patterns/start-pages">Start pages pattern</a></li>
        <li><a href="https://docs.publishing.service.gov.uk/document-types/transaction.html#example-pages">Examples of Start Pages (transaction pages)</a>
      </ul>
  - id: govuk-design-system
    text: |
      <a href="https://gds.blog.gov.uk/2018/06/22/introducing-the-gov-uk-design-system/">
        Introducing the GOV.UK Design System
      </a>
  - id: disability-facts-and-figures
    text: |
      <a href="https://www.gov.uk/government/statistics/disability-facts-and-figures">
        Disability facts and figures
      </a>
  - id: microsoft-inclusive-design
    text: |
      Microsoft Inclusive is really well referenced, their new toolkit is really good and worth a read,
      even if it's confusingly in a PDF...
      <br>
      <a href="https://www.microsoft.com/design/inclusive">Microsoft Inclusive Design</a>
  - id: subtitle-viewers
    text: |
      <a href="https://www.3playmedia.com/2015/08/28/who-uses-closed-captions-not-just-the-deaf-or-hard-of-hearing/">
        Who Uses Closed Captions? Not Just the Deaf or Hard of Hearing
      </a>
  - id: regulations
    text: |
      <ul>
        <li>
          <a href="https://www.gov.uk/guidance/equality-act-2010-guidance">Equality Act 2010: guidance</a>
        </li>
        <li>
          <a href="https://developer.paciellogroup.com/blog/2018/04/eu-directive-on-the-accessibility-of-public-sector-websites-and-mobile-applications">
            EU Directive on the Accessibility of Public Sector Websites and Mobile Applications
          </a>
        </li>
        <li>
          <a href="https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps">
            Make your public sector website or app accessible
          </a>
        </li>
      </ul>
  - id: government-accessibility-requirements
    text: |
      I've learnt so much from the Accessibility team at GDS, and this guidance is amazing, which is the basis for the middle section of my talk.
      <br/>
      I highly recommend you read this:
      <a href="https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction">
        Making your service accessible: an introduction
      </a>.
  - id: wcag
    text: |
      We follow WCAG 2.1 as a minimum to level AA:
      <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">
        Web Content Accessibility Guidelines (WCAG) Overview
      </a>
  - id: axe
    text: |
      <ul>
        <li>
          <a href="https://github.com/dequelabs/axe-core">axe-core</a>
        </li>
        <li>
          <a href="https://github.com/nickcolley/jest-axe">jest-axe</a>
        </li>
      </ul>
  - id: automated-tool-audit
    text: |
      <ul>
        <li>
          <a href="https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage">
            What we found when we tested tools on the world’s least-accessible webpage
          </a>
        </li>
        <li>
          <a href="https://alphagov.github.io/accessibility-tool-audit">
            How do automated accessibility checkers compare?
          </a>
        </li>
      </ul>
  - id: users-who-change-colours
    text: |
      <ul>
        <li>
          <a href="https://webaim.org/resources/contrastchecker/">Color Contrast Checker</a>
        </li>
        <li>
          <a href="https://accessibility.blog.gov.uk/2018/08/01/supporting-users-who-change-colours-on-gov-uk">
            Supporting users who change colours on GOV.UK
          </a>
        </li>
      </ul>
  - id: external-audit
    text: |
      <a href="https://www.gov.uk/service-manual/technology/testing-for-accessibility#getting-an-accessibility-audit">
        Getting an accessibility audit
      </a>
  - id: assistive-technologies-to-test
    text: |
      <a href="https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies#what-to-test">
        Assistive technologies: what to test
      </a>
  - id: bladerunner
    text: |
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=qHepKd38pr0">
            YouTube clip of the Bladerunner scene
          </a>
        </li>
        <li>
          <a href="https://www.nuance.com/products/help/dragon/dragon-for-mac/enx/Content/Navigation/MouseGrid.html">
            Dragon Mouse Grid
          </a>
        </li>
      </ul>
  - id: empathy-lab
    text: |
      <a href="https://gds.blog.gov.uk/2018/06/20/creating-the-uk-governments-accessibility-empathy-lab/">
        Creating the UK government’s accessibility empathy lab
      </a>
  - id: no-cost-testing
    text: |
      <a href="https://accessibility.blog.gov.uk/2018/09/27/assistive-technology-tools-you-can-use-at-no-cost/">
        Assistive technology tools you can test with at no cost
      </a>
  - id: content-for-everyone
    text: |
      <a href="https://accessibility.blog.gov.uk/2017/02/08/advice-for-creating-content-that-works-well-with-screen-readers/">
        How to create content that works well with screen readers
      </a>
  - id: designing-empathy-programs
    text: |
      <a href="https://twitter.com/robinmarceline/status/1039321725756891136">
        @robinmarceline's quote on designing programs to build compassion
      </a>
  - id: fake-service
    text: |
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=wprWuTvhec4">
            Youtube: Building Accessible Components and the GOV.UK Design System
          </a>
        </li>
        <li>
          <a href="https://accessibility.blog.gov.uk/2018/05/15/what-we-learned-from-getting-our-autocomplete-tested-for-accessibility/">
            What we learned from getting our autocomplete tested for accessibility
          </a>
        </li>
        <li>
          <a href="https://design-system.service.gov.uk/components/character-count/#research-on-this-component">
            Character count component testing and user research
          </a>
        </li>
      </ul>
  - id: senior-product-manager-quote
    text: |
      The quote on screen I actually made up because the real one was not grammatically correct, so this is a bit cheeky but we have consistently seen this in research.
      <br>
      Some real quotes:
      <ul>
        <li>“[...] the things that would make a service not accessible, the work has already been done by GDS so we don’t have to keep doing it.”</li>
        <li>"Once we have the first prototype, my starting point is the GOV.UK prototype kit, I trust that I know it's been built with accessibility in mind."</li>
        <li>"Having the prototyping kit now means that it is accessible"</li>
        <li>"Things like design patterns, 80% has already been done and tested by GDS or other services."</li>
      </ul>
      <br>
      Thanks to Katie John and Bekki Leaver (GDS User Researchers) for these quotes.
  - id: problem-with-patterns
    count: 2
    text: |
      This criticism has come from multiple places, and I wanted to highlight it in this talk.
      <ul>
        <li>
          <a href="https://alistapart.com/article/problem-with-patterns">
            The Problem with Patterns
          </a>
        </li>
        <li>
          <a href="https://medium.com/@paulmsmith/design-systems-the-means-not-the-end-fc840c21b51e">
            Design Systems — the means, not the end
          </a>
        </li>
        <li>
          “These are platforms for us to look at harder problems. [I’m] just cynical of things like design systems seen as ‘the design is done’” – Simon Wilson (<a href="https://twitter.com/ermlikeyeah">@ermlikeyeah</a>)
        </li>
      </ul>
  - id: leonie-watson
    text: |
      I've learnt so much from Léonie which is why her work appears multiple times in this talk.
      <br/>
      <a href="https://www.youtube.com/watch?v=spxT2CmHoPk">
        Léonie Watson / Technologic (Human After All): Accessibility remix
      </a>
---

<style media="screen">
  .slides-thumbnail {
    display: block;
    height: 192.5px;
    width: 342px;
    max-width: 100%;
    border: 3px solid #9E9E9E;
    margin-bottom: 1rem;
  }

  @media (max-width: 350px) {
    .slides-thumbnail {
      width: 100%;
      height: 160px;
    }
  }

  .slides-thumbnail:focus {
    outline: 3px solid blue;
    outline-offset: 0;
  }

  .slides-thumbnail img {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 50rem) {
    .slides-thumbnail {
      float: right;
      margin-left: 1rem;
    }

    .slides figure::after {
      content: '';
      clear: both;
      display: table;
    }

    .slides figcaption {
      font-size: .9rem;
    }
  }

  .slides figure {
    margin-bottom: 3rem;
  }

  .slides figcaption > :first-child::before,
  .slides figcaption > :last-child::after {
    position: relative;
    top: .5rem;
    font-size: 2em;
    line-height: 0;
  }

  .slides figcaption > :first-child::before {
    content: '“';
  }

  .slides figcaption > :last-child::after {
    content: '”';
  }

  .slides figcaption p {
    margin-bottom: 1rem;
  }

  .slides figcaption ul:last-child,
  .slides figcaption p:last-child {
    margin-bottom: 0;
  }
</style>

I was invited to speak at <a href="https://www.designsystemslondon.com/">Design Systems London</a>, these are the slides with my speakers notes.

I've put together some of the tweets in a [Twitter moment, if you're into that](https://twitter.com/i/moments/1063848031613845504).

All the sources are linked from the speakers notes in the <a href="#footnotes">footnotes</a>.

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
    <p>Hey everyone, I’m Nick Colley, I’m a frontend developer at the Government Digital Service</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="01" text=slideText %}

  {% capture slideText %}
    <p>Today I wanted to talk to you about accessibility in the GOV.UK Design System</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="02" text=slideText %}

  {% capture slideText %}
    <p>GOV.UK is the best place to find government services and information online.</p>
    <p>You might have used GOV.UK to...</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="03" text=slideText %}

  {% capture slideText %}
    <p>{% include footnote-link.html id="tax-your-vehicle" text="tax your vehicle" -%}</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="04" text=slideText %}

  {% capture slideText %}
    <p>{% include footnote-link.html id="micropig" text="to check guidance on keeping a micropig." -%}</p>
    <p>You're basically a farmer if you keep a micropig, you might need a license to walk it.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="05" text=slideText %}

  {% capture slideText %}
    <p>{% include footnote-link.html id="register-to-vote" text="or hopefully to register to vote" -%}</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="06" text=slideText %}

  {% capture slideText %}
    <p>I think it’s worth talking about how GOV.UK was put together to give context to why Government might need a design system.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="03" text=slideText %}

  {% capture slideText %}
    <p>
      {% include footnote-link.html id="before-govuk" text="Before GOV.UK" -%},
      there were a ton of differents websites that looked and behaved differently but fundamentally served a similar purpose.
    </p>
    <p>From the user’s point of view there’s no need for them to be different.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="08" text=slideText %}

  {% capture slideText %}
    <p>
      We needed to go from
      {% include footnote-link.html id="revolution-not-evolution" text="750 websites domains to one top level domain." -%}
    </p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="09" text=slideText %}

  {% capture slideText %}
    <p>While this has taken time, most content is now in one place with a consistent user experience and brand.</p>
    <p>
      We know have more than
      {% include footnote-link.html id="300k-content" text="300 thousand pieces of content" -%}
      from across government published and
      GOV.UK now has
      {% include footnote-link.html id="visits-a-month" text="more visits in a single month than there are people in the UK." -%}
    </p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="10" text=slideText %}

  {% capture slideText %}
    <p>But government online is not just content, it also includes transactional services that rely on users inputting data.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="11" text=slideText %}

  {% capture slideText %}
    <p>
      There are currently
      {% include footnote-link.html id="govuk-services" text="780 services that account for over a billion transactions a year." -%}</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="12" text=slideText %}

  {% capture slideText %}
    <p>So why does Government need a design system?</p>
    <p>If merging a bunch of sites together gave a consistent experience surely we don’t need a design system, problem solved.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="13" text=slideText %}

  {% capture slideText %}
    <p>From a technical perspective, content can be centralised, services cannot.</p>
    <p>
      This means that departments across the UK are,
      building services in different technical stacks.
      On different domains.
      That all need to look and feel the same.
    </p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="14" text=slideText %}

  {% capture slideText %}
    <p>
      For example, a business wanting to hire their first employee needs
      {% include footnote-link.html id="step-by-step" text="information and services from 5 different areas of government." -%}
      before they can hire them.
    </p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="15" text=slideText %}

  {% capture slideText %}
    <p>Here’s a totally not fake or exaggerated user journey, to try to illustrate this.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="16" text=slideText %}

  {% capture slideText %}
    <p>
      The user could
      {% include footnote-link.html id="start-pages-pattern" text="start on a content page," -%}
      which is run by GDS, then they could go through any number of departments running services.
    </p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="17" text=slideText %}

  {% capture slideText %}
    <p>These departments all use different technologies but for the user it should look like nothing has changed</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="18" text=slideText %}

  {% capture slideText %}
    <p>
    {% include footnote-link.html id="revolution-not-evolution" count="2" text="Users should not have to understand how government works." -%}
    </p>
    <p>So how do you create a consistent experience for both content and services with distributed teams?</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="19" text=slideText %}

  {% capture slideText %}
    <p>This where the
    {% include footnote-link.html id="govuk-design-system" text="GOV.UK Design System" -%}
    comes in, it’s built from years of research and work from teams across government.</p>
    <p>There were already volunteer led projects that laid the foundation but this is the first time we’ve had a dedicated team to work on this problem.</p>
    <p>The GOV.UK Design System brings together styles, components and patterns.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="20" text=slideText %}

  {% capture slideText %}
    <p>So for styles, we have things like color, spacing, layout and typography</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="21" text=slideText %}

  {% capture slideText %}
    <p>For components, we have things like buttons, tabs, and checkboxes. These tend to be used in many different scenarios.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="22" text=slideText %}

  {% capture slideText %}
    <p>Then finally we have patterns, you might have heard these refered to as design patterns.</p>
    <p>These patterns often give context to where components should be used, but patterns do not need components to exist.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="23" text=slideText %}

  {% capture slideText %}
    <p>Something we spend a lot of time on is in the GOV.UK Design System is accessibility.</p>
    <p>But why do we care about accessibility?</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="24" text=slideText %}

  {% capture slideText %}
    <p>
      {% include footnote-link.html id="disability-facts-and-figures" text="20% of people in the UK have a disability" -%}
    </p>
    <p>this could be a visual, hearing, motor or cognitive (affecting memory and thinking) impairment</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="25" text=slideText %}

  {% capture slideText %}
    <p>But if we think about accessibility in terms of exclusion and inclusion, we can think about people’s experience as a spectrum, which includes even more people.</p>
    <p>The example I’m showing today is from
    {% include footnote-link.html id="microsoft-inclusive-design" text="Microsoft’s Inclusive design toolkit." -%}
    </p>
    <p>It shows how motor based impairments can impact anyone.</p>
    <p>Someone who has lost motor function in one arm might operating a keyboard to be difficult.</p>
    <p>But if you broke your arm skiing, you could experience some of the same barriers.</p>
    <p>This is called a temporary impairment, since over time your arm will heal.</p>
    <p>The final end of the spectrum is a busy new parent who is holding their child, restricting the use of one arm.</p>
    <p>This is a situational impairment, but by designing for someone with a permanent disability we make our services usable to everyone on this spectrum.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="26" text=slideText %}

  {% capture slideText %}
    <p>One example of this I wanted to share with you is about subtitles, otherwise known as closed captions.</p>
    <p>
      {% include footnote-link.html id="subtitle-viewers" text="Ofcom did a study" -%}
      which found that 80% of television viewers use subtitles for reasons other than hearing impairments.
    </p>
    <p>We can see this too in social media, where often videos will autoplay without sound and include subtitles which is useful in situations where you’re on the go and can’t listen to a video.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="27" text=slideText %}

  {% capture slideText %}
    <p>Raise your hand if you work in the public sector, or with charities.</p>
    <p>Cool, this slide is for you 😊</p>
    <p>In the public sector, there are also
    {% include footnote-link.html id="regulations" text="two regulations worth knowing" -%}
    </p>
    <p>The Equality Act 2010 legally protects people from discrimination in the workplace and in wider society.</p>
    <p>But more recently there has been the introduction of an EU directive which is more specific to web and mobile applications, so can be enforced easier.</p>
    <p>These useful to make a business case for accessibility in the public sector.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="28" text=slideText %}

  {% capture slideText %}
    <p>Soooo I tried to make a meme, but the EU directive is so long it doesnt really make sense.</p>
    <p>Cant remember if Darth Maul gets beaten or not, doesnt the long hair dude get killed? I guess that’s what doing accessibility work is like sometimes...</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="29" text=slideText %}

  {% capture slideText %}
    <p>How do we meet these needs?</p>
    <p>For time, I’ve focused on just a few things we do.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="30" text=slideText %}

  {% capture slideText %}
    <p>
      To meet       
      {% include footnote-link.html id="government-accessibility-requirements" text="government accessibility requirements" -%}
      , digital services must:
    </p>

    <ul>
      <li>Meet Web Content Accessibility Guidelines version 2.1 at level AA</li>
      <li>Test with assistive technologies</li>
      <li>include people with disabilities in user research</li>
    </ul>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="31" text=slideText %}

  {% capture slideText %}
    <p>So I'm going to go through these one by one</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="32" text=slideText %}

  {% capture slideText %}
    <p>
      If you’ve not heard of
      {% include footnote-link.html id="wcag" text="WCAG (Web Content Accessibility Guidlines)" -%}
      before you can think of it like a standardized accessibility design manual.
    </p>
    <p>They are an internationally recognised set of recommendations for improving web accessibility.</p>
    <p>They explain how to make digital services, websites and apps accessible to everyone</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="33" text=slideText %}

  {% capture slideText %}
    <p>
      This includes users with impairments to their:
    </p>
    <ul>
      <li>vision - this includes people with sight impairments and colour blind people</li>
      <li>hearing - like people who are deaf or hard of hearing</li>
      <li>motor - like those who find it difficult to use a mouse or keyboard</li>
      <li>cognitive - like people with dyslexia, autism or learning difficulties</li>
    </ul>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="34" text=slideText %}

  {% capture slideText %}
    <p>If you’re new to WCAG, it can be a bit daunting, so one place you could start is by running an automated test for accessibility</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="35" text=slideText %}

  {% capture slideText %}
    <p>
      There are many different automated tools but I’ve personally found that
      {% include footnote-link.html id="axe" text="aXe" -%}
      works really well for a lot of use cases, and it’s what we use on the Design System
    </p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="36" text=slideText %}

  {% capture slideText %}
    <p>If you want to use it, it comes in every version of Google Chrome developer tools.</p>
    <p>You can find it under the lighthouse audit option, and it runs as part of the accessibility step.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="37" text=slideText %}

  {% capture slideText %}
    <p>Axe is also useful because it can be reused in many different circumstances, so here’s an example of a component within a component library that has accessibility warnings alongside the example which makes it easy to action.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="38" text=slideText %}

  {% capture slideText %}
    <p>It can be also used in the command line, which is useful when writing unit tests that run on a continuous integration server as part of your development workflow.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="39" text=slideText %}

  {% capture slideText %}
    <p>So you might be thinking, sweet, I can npm install this and it’ll solve all my accessibility issues.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="40" text=slideText %}

  {% capture slideText %}
    <p>The accessibility team at GDS, built the least accessible webpage in the world, and tested as many automated tools on it as a possible.</p>
    <p>
      {% include footnote-link.html id="automated-tool-audit" text="They found that tools like axe can only pick up around 30% of issues" -%}
    </p>
    <p>The other 70% needs to be done with manual testing.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="41" text=slideText %}

  {% capture slideText %}
    <p>
      One example of manual testing is the work we do to make sure
      {% include footnote-link.html id="users-who-change-colours" text="GOV.UK works when users change their colours." -%}
    </p>
    <p>While high contrast is normally associated with good accessibility, for some users it can cause visual stress that means they prefer to customise the colours they use to read your website.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="42" text=slideText %}

  {% capture slideText %}
    <p>In this example I’m showing a radio group, that asks if the user has changed their name.</p>
    <p>And the first radio input is focused.</p>
    <p>Since our radio inputs are custom elements for improved usability, we have to do extra to make sure the custom focus is not lost when users change their colours.</p>
    <p>So in the second example, there is a separate outline, that represents this focused input so that it’s clear what is being interacted with.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="43" text=slideText %}

  {% capture slideText %}
    <p>
      One other thing you might consider is to get an
      {% include footnote-link.html id="external-audit" text="external accessibility audit" -%},
      this can be really useful to get an expert’s insight into what you’re building.
    </p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="44" text=slideText %}

  {% capture slideText %}
    <p>The second thing I want to talk to you about is testing with assistive technologies</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="45" text=slideText %}

  {% capture slideText %}
    <p>Assistive technologies help people to overcome environments that exclude them based on certain disabilities or impairments.</p>
    <p>Common assistive technologies include mobility aids such as wheelchairs or crutches.</p>
    <p>On the web we have some less known assistive technologies, which are equally as important.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="46" text=slideText %}

  {% capture slideText %}
    <p>
      We test in the
      {% include footnote-link.html id="assistive-technologies-to-test" text="most commonly used assistive technologies." -%}
    </p>
    <p>JAWS, NVDA, and VoiceOver are all examples of screen readers.</p>
    <p>Screenreaders can read out a webpage and are often used by people with sight impairments. However, they’re also used by people who have trouble reading english or people with dyslexia.</p>
    <p>Often people with disabilities use multiple assistive technologies, which intersect with each other.</p>
    <p>ZoomText is used to zoom pages often to over 400% their original size.</p>
    <p>And finally Dragon NaturallySpeaking is used by some users that have mobility issues which allows a user to dictate commands with their voice.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="47" text=slideText %}

  {% capture slideText %}
    <p>
      Has anyone seen bladerunner?
      {% include footnote-link.html id="bladerunner" text="With the scene where Deckard is zooming an image with his voice?" -%}
    </p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="48" text=slideText %}

  {% capture slideText %}
    <p>There’s this image he’s zooming into.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="49" text=slideText %}

  {% capture slideText %}
    <p>...</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="50" text=slideText %}

  {% capture slideText %}
    <p>Enhance, he’s using his voice</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="51" text=slideText %}

  {% capture slideText %}
    <p>Dragon NaturallySpeaking has a mode called mousegrid which is basically the same thing</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="52" text=slideText %}

  {% capture slideText %}
    <p>
      We have put all these assistive technologies into what is called the  
      {% include footnote-link.html id="empathy-lab" text="Accessibility Empathy Lab" -%},
      so that these are easy to pick and test.
    </p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="53" text=slideText %}

  {% capture slideText %}
    <p>Some of these tools are Windows only and cost money.</p>
    <p>
      If you want to start, Anika from the Accessibility Team has written a
      {% include footnote-link.html id="no-cost-testing" text="blog post on tools you can use at no cost." -%}
    </p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="54" text=slideText %}

  {% capture slideText %}
    <p>When using assistive technologies, it’s tempting to try and fix oddities around how the technology works.</p>
    <p>We can’t make decisions based on what we might consider to be odd, that is a regular experience for a person who actually uses these technologies everyday.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="55" text=slideText %}

  {% capture slideText %}
    <p>One frequent example of this is assistive technology mispronouncing content.</p>
    <p>For example, We had one case where GOV.UK was being pronounced ‘governer’</p>
    <p>Through our Accessibility community, we often get asked about how to create content that works well with screen readers.</p>
    <p>
      "{% include footnote-link.html id="content-for-everyone" text="[...] don't write content that works specifically for screen readers, write content that works well for everyone" -%}".
    </p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="56" text=slideText %}

  {% capture slideText %}
    <p>I think this quote from Robin is worth sharing where they say:</p>
    <p>
      "{% include footnote-link.html id="designing-empathy-programs" text="Designing programs to build compassion/understanding for disabled people in the total absence of consultation with disabled people is very silly." -%}".
    </p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="57" text=slideText %}

  {% capture slideText %}
    <p>So this leads to the final step, including users with disabilities in your user research</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="58" text=slideText %}

  {% capture slideText %}
    <p>One of the best parts of user centered design is doing research with your users, this applies to doing accessibility itself.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="59" text=slideText %}

  {% capture slideText %}
    <p>Our team doesnt build live services, so researching in a real world context can be difficult.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="60" text=slideText %}

  {% capture slideText %}
    <p>Doing research with users can be expensive, so we don’t want to do a full round of testing for one addition to the design system.</p>
    <p>In the past, we have tried testing components on their own, but it puts users in an unrealistic scenario.</p>
    <p>
      One way we’ve tried to get around this is to put
      {% include footnote-link.html id="fake-service" text="multiple additions together and test them in a fake service." -%}
    </p>
    <p>This was really successful but is time consuming to put together.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="61" text=slideText %}

  {% capture slideText %}
    <p>The best research comes from the real world usage of components in real services.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="62" text=slideText %}

  {% capture slideText %}
    <p>This is why for some components we have an experimental label, which allows us to ship a pattern or component that we think could use more research to validate it.</p>
    <p>Over time we may decide to make another fake service with multiple experimental additions, but we hope by building more community and being honest we can get this research by real services teams.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="63" text=slideText %}

  {% capture slideText %}
    <p>I think with this all in mind, a design system is only as good as the community it represents.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="64" text=slideText %}

  {% capture slideText %}
    <p>Design Systems can’t make services accessible on their own</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="65" text=slideText %}

  {% capture slideText %}
    <p>
      One thing we’ve noticed is that a design system
      {% include footnote-link.html id="senior-product-manager-quote" text="can mislead some people" -%}
      into thinking they don't need to test their service.
    </p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="66" text=slideText %}

  {% capture slideText %}
    <p>
      Cathy Dutton wrote about this in her article
      {% include footnote-link.html id="problem-with-patterns" text="‘Problem with patterns’" %}, where she says:
    </p>
    <p>"Because patterns are built for reuse, they sometimes encourage us to use them without much question [...]"</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="67" text=slideText %}

  {% capture slideText %}
    <p>This is not a unique problem to accessibility, patterns in design systems can give people a false sense of security.</p>
    <p>But they shouldnt replace the design process.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="68" text=slideText %}

  {% capture slideText %}
    <p>Design systems are a
    {% include footnote-link.html id="problem-with-patterns" count="2" text="starting point" -%}
    </p>
    <p>Everything I’ve covered here ideally should also be done by the service teams we support.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="69" text=slideText %}
  {% capture slideText %}
    <p>By fixing the most basic accessibility issues we give service teams the time to focus on the harder problems.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="70" text=slideText %}

  {% capture slideText %}
    <p>When building design systems we have a lot of responsibility, we can make inaccessible patterns wide spread or take the opportunity to make all our services more accessible by default.</p>
    <p>But if you’re starting out, don’t worry about being perfect, as Leonie Watson says: “{% include footnote-link.html id="leonie-watson" text="Do just one thing to make it a little better than yesterday" -%}”
    </p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="71" text=slideText %}

  {% capture slideText %}
    <p>Thanks</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="72" text=slideText %}
</div>
