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
  .slides img {
    width: 30%;
    min-width: 386px;
    float: right;
    margin-left: 1rem;
    border: 3px solid #9E9E9E;
  }

  .slides figure::after {
    content: '';
    clear: both;
    display: table;
  }

  .slides figcaption {
    font-size: .8rem;
  }

  .slides figcaption p:first-child::before,
  .slides figcaption p:last-child::after {
    position: relative;
    top: .5rem;
    display: inline-block;
    font-size: 2em;
    line-height: 0;
  }

  .slides figcaption p:first-child::before {
    content: '“';
    margin-right: .1em;
  }

  .slides figcaption p:last-child::after {
    content: '”';
    margin-left: .1em;
  }

  .slides figcaption p {
    margin-bottom: 1rem;
  }

  .slides figcaption p:last-child {
    margin-bottom: 0;
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

I've put together some of the tweets in a [Twitter moment, if you're into that](https://twitter.com/i/moments/1063848031613845504).

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
    <p>{% include footnote-link.html id="tax-your-vehicle" text="Tax your vehicle" %}</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="04" text=slideText %}

  {% capture slideText %}
    <p>{% include footnote-link.html id="micropig" text="To check guidance on keeping a micropig." %}</p>
    <p>You're basically a farmer if you keep a micropig, you might need a license to walk it.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="05" text=slideText %}

  {% capture slideText %}
    <p>{% include footnote-link.html id="register-to-vote" text="Or hopefully to register to vote" %}</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="06" text=slideText %}

  {% capture slideText %}
    <p>I think it’s worth talking about how GOV.UK was put together to give context to why Government might need a design system.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="03" text=slideText %}

  {% capture slideText %}
    <p>Before GOV.UK, there were a ton of differents websites that looked and behaved differently but fundamentally served a similar purpose.</p>
    <p>From the users’ point of view there’s no need for them to be different.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="08" text=slideText %}

  {% capture slideText %}
    <p>We needed to go from 750 websites domains to one top level domain.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="09" text=slideText %}

  {% capture slideText %}
    <p>While this has taken time, most content is now in one place with a consistent user experience and brand.</p>
    <p>We know have more than 300 thousand pieces of content from across government published and</p>
    <p>GOV.UK now has more visits in a single month than there are people in the UK.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="10" text=slideText %}

  {% capture slideText %}
    <p>We needed to go from 750 websites domains to one top level domain.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="11" text=slideText %}

  {% capture slideText %}
    <p>But government online is not just content, it also includes transactional services that rely on users inputting data.

    https://www.gov.uk/performance/services</p>
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
    This means that departments across the UK are:
      <ul>
        <li>Building services in different technical stacks, on different domains.</li>
        <li>That all needs to look and feel the same.</li>
      </ul>
    </p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="14" text=slideText %}

  {% capture slideText %}
    <p>For example, a business wanting to hire their first employee needs information and services from 5 different areas of government before they can hire them</p>

    https://gds.blog.gov.uk/2018/10/17/building-a-better-gov-uk-step-by-step/</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="15" text=slideText %}

  {% capture slideText %}
    <p>Here’s a totally not fake or exaggerated user journey, to try to illustrate this.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="16" text=slideText %}

  {% capture slideText %}
    <p>The user could start on a content page, which is run by GDS, then they could go through any number of departments running services</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="17" text=slideText %}

  {% capture slideText %}
    <p>These departments all use different technologies but for the user it should look like nothing has changed</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="18" text=slideText %}

  {% capture slideText %}
    <p>Users should not have to understand how government works.</p>
    <p>So how do you create a consistent experience for both content and services with distributed teams?</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="19" text=slideText %}

  {% capture slideText %}
    <p>This where the GOV.UK design System comes in, it’s built from years of research and work from teams across government.</p>
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
    <p>20% of people in the UK have a disability</p>
    <p>this could be a visual, hearing, motor or cognitive (affecting memory and thinking) impairment</p>
    <p>https://www.gov.uk/government/statistics/disability-facts-and-figures</p>
    <p>66,714,740 total</p>
    <p>13,342,948 is 20%</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="25" text=slideText %}

  {% capture slideText %}
    <p>https://www.microsoft.com/design/inclusive/</p>
    <p>But if we think about accessibility in terms of exclusion and inclusion, we can think about people’s experience as a spectrum, which includes even more people.</p>
    <p>The example I’m showing today is from Microsoft’s Inclusive design toolkit.</p>
    <p>It shows how motor based impairments can impact anyone.</p>
    <p>Someone who has lost motor function in one arm might operating a keyboard to be difficult.</p>
    <p>But if you broke your arm skiing, you could experience some of the same barriers.</p>
    <p>This is called a temporary impairment, since over time your arm will heal.</p>
    <p>The final end of the spectrum is a busy new parent who is holding their child, restricting the use of one arm.</p>
    <p>This is a situational impairment, but by designing for someone with a permanent disability we make our services usable to everyone on this spectrum.</p>
    <p>“By designing for someone with a permanent disability, someone with a situational limitation can also benefit. For example, a device designed for a person who has one arm could be used just as effectively by a person with a temporary wrist injury or a new parent holding an infant.“</p>
    <p>file:///Users/nickcolley/Downloads/inclusive_toolkit_manual_final.pdf</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="26" text=slideText %}

  {% capture slideText %}
    <p>One example of this I wanted to share with you is about subtitles, otherwise known as closed captions.</p>
    <p>Ofcom did a study which found that 80% of television viewers use subtitles for reasons other than hearing impairments.</p>
    <p>We can see this too in social media, where often videos will autoplay without sound and include subtitles which is useful in situations where you’re on the go and can’t listen to a video.</p>
    <p>https://www.3playmedia.com/2015/08/28/who-uses-closed-captions-not-just-the-deaf-or-hard-of-hearing/</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="27" text=slideText %}

  {% capture slideText %}
    <p>Raise your hand if you work in the public sector, or with charities.</p>
    <p>Cool</p>
    <p>In the public sector, there are also two regulations worth noting</p>
    <p>The Equality Act 2010 legally protects people from discrimination in the workplace and in wider society.</p>
    <p>But more recently there has been the introduction of an EU directive which is more specific to web and mobile applications, so can be enforced easier.</p>
    <p>These useful to make a business case for accessibility in the public sector.</p>
    <p>https://www.gov.uk/guidance/equality-act-2010-guidance
    https://developer.paciellogroup.com/blog/2018/04/eu-directive-on-the-accessibility-of-public-sector-websites-and-mobile-applications/
    https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="28" text=slideText %}

  {% capture slideText %}
    <p>Soooo I tried to make a meme, but the EU directive is so long it doesnt really make sense.</p>
    <p>Cant remember if darth maul gets beaten or not, doesnt the long hair dude get killed? I guess that’s what doing accessibility work is like.</p>
    <p>https://www.gov.uk/guidance/equality-act-2010-guidance
    https://developer.paciellogroup.com/blog/2018/04/eu-directive-on-the-accessibility-of-public-sector-websites-and-mobile-applications/</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="29" text=slideText %}

  {% capture slideText %}
    <p>How do we meet these needs?</p>
    <p>For time, I’ve focused on just a few things we do.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="30" text=slideText %}

  {% capture slideText %}
    <p>
    To meet government accessibility requirements, digital services must:

    <ul>
      <li>Meet Web Content Accessibility Guidelines version 2.1 at level AA</li>
      <li>Test with assistive technologies</li>
      <li>include people with disabilities in user research</li>
    </ul>
    </p>

    <p>https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="31" text=slideText %}

  {% capture slideText %}
    <p>So Im going to go through these one by one</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="32" text=slideText %}

  {% capture slideText %}
    <p>If you’ve not heard of WCAG before you can think of it like a standardized accessibility design manual.</p>
    <p>They are an internationally recognised set of recommendations for improving web accessibility.</p>
    <p>They explain how to make digital services, websites and apps accessible to everyone</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="33" text=slideText %}

  {% capture slideText %}
    <p>
      This includes users with impairments to their:
      <ul>
        <li>vision - this includes people with sight impairments and colour blind people</li>
        <li>hearing - like people who are deaf or hard of hearing</li>
        <li>motor - like those who find it difficult to use a mouse or keyboard</li>
        <li>cognitive - like people with dyslexia, autism or learning difficulties</li>
      </ul>
    </p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="34" text=slideText %}

  {% capture slideText %}
    <p>If you’re new to WCAG, it can be a bit daunting, so one place you could start is by running an automated test for accessibility</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="35" text=slideText %}

  {% capture slideText %}
    <p>There are many different automated tools but I’ve personally found that aXe works really well for a lot of use cases, and it’s what we use on the Design System</p>
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
    <p>They found that tools like axe can only pick up around 30% of issues.</p>
    <p>The other 70% needs to be done with manual testing.</p>
    <p>https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/
    https://alphagov.github.io/accessibility-tool-audit/</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="41" text=slideText %}

  {% capture slideText %}
    <p>One example of manual testing is the work we do to make sure GOV.UK works when users change their colours.</p>
    <p>While high contrast is normally associated with good accessibility, for some users it can cause visual stress that means they prefer to customise the colours they use to read your website.</p>
    <p>https://accessibility.blog.gov.uk/2018/08/01/supporting-users-who-change-colours-on-gov-uk/</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="42" text=slideText %}

  {% capture slideText %}
    <p>In this example I’m showing a radio group, that asks if the user has changed their name.</p>
    <p>And the first radio input is focused.</p>
    <p>Since our radio inputs are custom elements for improved usability, we have to do extra to make sure the custom focus is not lost when users change their colours.</p>
    <p>So in the second example, there is a separate outline, that represents this focused input so that it’s clear what is being interacted with.</p>
    <p>https://accessibility.blog.gov.uk/2018/08/01/supporting-users-who-change-colours-on-gov-uk/</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="43" text=slideText %}

  {% capture slideText %}
    <p>One other thing you might consider is to get an external accessibility audit, this can be really useful to get an expert’s insight into what you’re building.</p>
    <p>https://www.gov.uk/service-manual/technology/testing-for-accessibility#getting-an-accessibility-audit</p>
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
    <p>https://www.gov.uk/government/publications/assistive-technology-definition-and-safe-use/assistive-technology-definition-and-safe-use</p>
    <p>https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="46" text=slideText %}

  {% capture slideText %}
    <p>We test in the most commonly used assistive technologies.</p>
    <p>JAWS, NVDA, and VoiceOver are all examples of screen readers.</p>
    <p>Screenreaders can read out a webpage and are often used by people with sight impairments. However, they’re also used by people who have trouble reading english, for example people with severe dyslexia.</p>
    <p>Often people with disabilities use multiple assistive technologies, which intersect with each other.</p>
    <p>ZoomText is used to zoom pages often to over 400% their original size.</p>
    <p>And finally Dragon NaturallySpeaking is used by some users that have mobility issues which allows a user to dictate commands with their voice.</p>
    <p>https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies#what-to-test</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="47" text=slideText %}

  {% capture slideText %}
    <p>Has anyone seen bladerunner? With the scene where Deckard is zooming an image with his voice?</p>
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
    <p>We have put all these assistive technologies into what is called the Accessibility Empathy Lab, so that these are easy to pick and test.</p>
    <p>https://gds.blog.gov.uk/2018/06/20/creating-the-uk-governments-accessibility-empathy-lab/</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="53" text=slideText %}

  {% capture slideText %}
    <p>Some of these tools are Windows only and cost money</p>
    <p>If you want to start,</p>
    <p>Anika from the Accessibility Team has written a blog post on tools you can use at no cost</p>
    <p>https://accessibility.blog.gov.uk/2018/09/27/assistive-technology-tools-you-can-use-at-no-cost/</p>
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
    <p>“[...] don't write content that works specifically for screen readers, write content that works well for everyone.”
      https://accessibility.blog.gov.uk/2017/02/08/advice-for-creating-content-that-works-well-with-screen-readers/
    </p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="56" text=slideText %}

  {% capture slideText %}
    <p>I think this quote from Robin is worth sharing where they say.</p>
    <p>Designing programs to build compassion/understanding for disabled people in the total absence of consultation with disabled people is very silly.</p>
    <p>https://twitter.com/robinmarceline/status/1039321725756891136</p>
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
    <p>One way we’ve tried to get around this is to put multiple additions together and test them in a fake service.</p>
    <p>This was really successful but is time consuming to put together.</p>
    <p>https://www.youtube.com/watch?v=wprWuTvhec4</p>
    <p>https://accessibility.blog.gov.uk/2018/05/15/what-we-learned-from-getting-our-autocomplete-tested-for-accessibility/</p>
    <p>https://github.com/alphagov/govuk-design-system/wiki/Character-count-testing-and-user-research</p>
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
    <p>One thing we’ve noticed is that a design system can mislead some people into thinking they dont need to test their service.</p>
    <p>The quote on screen I actually made up because the real one was not grammatically correct, so this is a bit cheeky but we have consistently seen this in research.</p>
    <p>"Once we have the first prototype, my starting point is the GOV.UK prototype kit, I trust that I know it's been built with accessibility in mind." Senior designer</p>
    <p>"If we were building prototypes from scratch we’d have to look at every screen, but the prototype kit has already considered it, things like don’t have drop down boxes, we have radio buttons, the things that would make a service not accessible, the work has already been done by GDS so we don’t have to keep doing it."  Senior Product Manager</p>
    <p>"Having the prototyping kit now means that it is accessible," Senior Product Manager</p>
    <p>"Things like design patterns, 80% has already been done and tested by GDS or other services." UX designer</p>
    <p>Thanks to Katie John and Bekki Leaver (GDS User Researchers) for these quotes</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="66" text=slideText %}

  {% capture slideText %}
    <p>Cathy Dutton wrote about this in her article ‘Problem with patterns’, where she says:</p>
    <p>Because patterns are built for reuse, they sometimes encourage us to use them without much question [...]</p>
    <p>https://alistapart.com/article/problem-with-patterns</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="67" text=slideText %}

  {% capture slideText %}
    <p>This is not a unique problem to accessibility, patterns in design systems can give people a false sense of security.</p>
    <p>But they shouldnt replace the design process.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="68" text=slideText %}

  {% capture slideText %}
    <p>(paul smith) design systems are a starting point.</p>
    <p>Everything I’ve covered here ideally should also be done by the service teams we support.</p>
    <p>https://medium.com/@paulmsmith/design-systems-the-means-not-the-end-fc840c21b51e</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="69" text=slideText %}
  {% capture slideText %}
    <p>By fixing the most basic accessibility issues we give service teams the time to focus on the harder problems.</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="70" text=slideText %}

  {% capture slideText %}
    <p>When building design systems we have a lot of responsibility, we can make inaccessible patterns wide spread or take the opportunity to make all our services more accessible by default.</p>
    <p>But if you’re starting out, don’t worry about being perfect, as Leonie Watson says: “Do just one thing to make it a little better than yesterday”</p>
    <p>“you’re not going to get it right all the time. We never do, this is the web for one thing. [...] If we could do just one thing to make it a little bit better than yesterday then we can call that a win. “ - Léonie Watson</p>
    <p>https://www.youtube.com/watch?v=spxT2CmHoPk</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="71" text=slideText %}

  {% capture slideText %}
    <p>Thanks</p>
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="72" text=slideText %}
</div>
