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
    Something we spend a lot of time on is in the GOV.UK Design System is accessibility.

    But why do we care about accessibility?
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="24" text=slideText %}

  {% capture slideText %}
    20% of people in the UK have a disability

    this could be a visual, hearing, motor or cognitive (affecting memory and thinking) impairment

    https://www.gov.uk/government/statistics/disability-facts-and-figures

    66,714,740 total

    13,342,948 is 20%
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="25" text=slideText %}

  {% capture slideText %}

    https://www.microsoft.com/design/inclusive/

    But if we think about accessibility in terms of exclusion and inclusion, we can think about people’s experience as a spectrum, which includes even more people.

    The example I’m showing today is from Microsoft’s Inclusive design toolkit.

    It shows how motor based impairments can impact anyone.

    Someone who has lost motor function in one arm might operating a keyboard to be difficult.

    But if you broke your arm skiing, you could experience some of the same barriers.

    This is called a temporary impairment, since over time your arm will heal.

    The final end of the spectrum is a busy new parent who is holding their child, restricting the use of one arm.

    This is a situational impairment, but by designing for someone with a permanent disability we make our services usable to everyone on this spectrum.

    “By designing for someone with a permanent disability, someone with a situational limitation can also benefit. For example, a device designed for a person who has one arm could be used just as effectively by a person with a temporary wrist injury or a new parent holding an infant.“

    file:///Users/nickcolley/Downloads/inclusive_toolkit_manual_final.pdf
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="26" text=slideText %}

  {% capture slideText %}
    One example of this I wanted to share with you is about subtitles, otherwise known as closed captions.

    Ofcom did a study which found that 80% of television viewers use subtitles for reasons other than hearing impairments.

    We can see this too in social media, where often videos will autoplay without sound and include subtitles which is useful in situations where you’re on the go and can’t listen to a video.

    https://www.3playmedia.com/2015/08/28/who-uses-closed-captions-not-just-the-deaf-or-hard-of-hearing/
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="27" text=slideText %}

  {% capture slideText %}
    Raise your hand if you work in the public sector, or with charities.
    Cool
    In the public sector, there are also two regulations worth noting
    The Equality Act 2010 legally protects people from discrimination in the workplace and in wider society.
    But more recently there has been the introduction of an EU directive which is more specific to web and mobile applications, so can be enforced easier.

    These useful to make a business case for accessibility in the public sector.

    https://www.gov.uk/guidance/equality-act-2010-guidance
    https://developer.paciellogroup.com/blog/2018/04/eu-directive-on-the-accessibility-of-public-sector-websites-and-mobile-applications/
    https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="28" text=slideText %}

  {% capture slideText %}
    Soooo I tried to make a meme, but the EU directive is so long it doesnt really make sense.

    Cant remember if darth maul gets beaten or not, doesnt the long hair dude get killed? I guess that’s what doing accessibility work is like.

    https://www.gov.uk/guidance/equality-act-2010-guidance
    https://developer.paciellogroup.com/blog/2018/04/eu-directive-on-the-accessibility-of-public-sector-websites-and-mobile-applications/
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="29" text=slideText %}

  {% capture slideText %}
    How do we meet these needs?

    For time, I’ve focused on just a few things we do.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="30" text=slideText %}

  {% capture slideText %}
    To meet government accessibility requirements, digital services must:
    Meet Web Content Accessibility Guidelines version 2.1 at level AA
    Test with assistive technologies
    include people with disabilities in user research

    https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="31" text=slideText %}

  {% capture slideText %}
    So Im going to go through these one by one
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="32" text=slideText %}

  {% capture slideText %}
    If you’ve not heard of WCAG before you can think of it like a standardized accessibility design manual.
    They are an internationally recognised set of recommendations for improving web accessibility.
    They explain how to make digital services, websites and apps accessible to everyone
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="33" text=slideText %}

  {% capture slideText %}
    This includes users with impairments to their:
    vision - this includes people with sight impairments and colour blind people
    hearing - like people who are deaf or hard of hearing
    motor - like those who find it difficult to use a mouse or keyboard
    cognitive - like people with dyslexia, autism or learning difficulties
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="34" text=slideText %}

  {% capture slideText %}
    If you’re new to WCAG, it can be a bit daunting, so one place you could start is by running an automated test for accessibility
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="35" text=slideText %}

  {% capture slideText %}
    There are many different automated tools but I’ve personally found that aXe works really well for a lot of use cases, and it’s what we use on the Design System
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="36" text=slideText %}

  {% capture slideText %}
    If you want to use it, it comes in every version of Google Chrome developer tools.

    You can find it under the lighthouse audit option, and it runs as part of the accessibility step.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="37" text=slideText %}

  {% capture slideText %}
    Axe is also useful because it can be reused in many different circumstances, so here’s an example of a component within a component library that has accessibility warnings alongside the example which makes it easy to action.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="38" text=slideText %}

  {% capture slideText %}
    It can be also used in the command line, which is useful when writing unit tests that run on a continuous integration server as part of your development workflow.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="39" text=slideText %}

  {% capture slideText %}
    So you might be thinking, sweet, I can npm install this and it’ll solve all my accessibility issues.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="40" text=slideText %}

  {% capture slideText %}
    The accessibility team at GDS, built the least accessible webpage in the world, and tested as many automated tools on it as a possible.

    They found that tools like axe can only pick up around 30% of issues.

    The other 70% needs to be done with manual testing.


    https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/
    https://alphagov.github.io/accessibility-tool-audit/
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="41" text=slideText %}

  {% capture slideText %}
    One example of manual testing is the work we do to make sure GOV.UK works when users change their colours.

    While high contrast is normally associated with good accessibility, for some users it can cause visual stress that means they prefer to customise the colours they use to read your website.

    https://accessibility.blog.gov.uk/2018/08/01/supporting-users-who-change-colours-on-gov-uk/
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="42" text=slideText %}

  {% capture slideText %}
    In this example I’m showing a radio group, that asks if the user has changed their name.

    And the first radio input is focused.

    Since our radio inputs are custom elements for improved usability, we have to do extra to make sure the custom focus is not lost when users change their colours.

    So in the second example, there is a separate outline, that represents this focused input so that it’s clear what is being interacted with.

    https://accessibility.blog.gov.uk/2018/08/01/supporting-users-who-change-colours-on-gov-uk/
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="43" text=slideText %}

  {% capture slideText %}
    One other thing you might consider is to get an external accessibility audit, this can be really useful to get an expert’s insight into what you’re building.

    https://www.gov.uk/service-manual/technology/testing-for-accessibility#getting-an-accessibility-audit
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="44" text=slideText %}

  {% capture slideText %}
    The second thing I want to talk to you about is testing with assistive technologies
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="45" text=slideText %}

  {% capture slideText %}
    Assistive technologies help people to overcome environments that exclude them based on certain disabilities or impairments.

    Common assistive technologies include mobility aids such as wheelchairs or crutches.

    On the web we have some less known assistive technologies, which are equally as important.

    https://www.gov.uk/government/publications/assistive-technology-definition-and-safe-use/assistive-technology-definition-and-safe-use

    https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="46" text=slideText %}

  {% capture slideText %}
    We test in the most commonly used assistive technologies/

    JAWS, NVDA, and VoiceOver are all examples of screen readers.

    Screenreaders can read out a webpage and are often used by people with sight impairments. However, they’re also used by people who have trouble reading english, for example people with severe dyslexia.

    Often people with disabilities use multiple assistive technologies, which intersect with each other.

    ZoomText is used to zoom pages often to over 400% their original size.

    And finally Dragon NaturallySpeaking is used by some users that have mobility issues which allows a user to dictate commands with their voice.

    https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies#what-to-test
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="47" text=slideText %}

  {% capture slideText %}
    Has anyone seen bladerunner? With the scene where Deckard is zooming an image with his voice?
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="48" text=slideText %}

  {% capture slideText %}
    There’s this image he’s zooming into.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="49" text=slideText %}

  {% capture slideText %}
    ...
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="50" text=slideText %}

  {% capture slideText %}
    Enhance, he’s using his voice
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="51" text=slideText %}

  {% capture slideText %}
    Dragon NaturallySpeaking has a mode called mousegrid which is basically the same thing
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="52" text=slideText %}

  {% capture slideText %}

    We have put all these assistive technologies into what is called the Accessibility Empathy Lab, so that these are easy to pick and test.

    https://gds.blog.gov.uk/2018/06/20/creating-the-uk-governments-accessibility-empathy-lab/
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="53" text=slideText %}

  {% capture slideText %}
  Some of these tools are Windows only and cost money

  If you want to start,

  Anika from the Accessibility Team has written a blog post on tools you can use at no cost

  https://accessibility.blog.gov.uk/2018/09/27/assistive-technology-tools-you-can-use-at-no-cost/
{% endcapture %}
  {% include dsl-accessibility-slide.html slide="54" text=slideText %}

  {% capture slideText %}
      When using assistive technologies, it’s tempting to try and fix oddities around how the technology works.
      We can’t make decisions based on what we might consider to be odd, that is a regular experience for a person who actually uses these technologies everyday.
      {% endcapture %}
  {% include dsl-accessibility-slide.html slide="55" text=slideText %}

  {% capture slideText %}

  One frequent example of this is assistive technology mispronouncing content.
  For example, We had one case where GOV.UK was being pronounced ‘governer’
  Through our Accessibility community, we often get asked about how to create content that works well with screen readers.
  “[...] don't write content that works specifically for screen readers, write content that works well for everyone.”

  https://accessibility.blog.gov.uk/2017/02/08/advice-for-creating-content-that-works-well-with-screen-readers/

  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="56" text=slideText %}

  {% capture slideText %}
    I think this quote from Robin is worth sharing where they say.

    Designing programs to build compassion/understanding for disabled people in the total absence of consultation with disabled people is very silly.

    https://twitter.com/robinmarceline/status/1039321725756891136
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="57" text=slideText %}

  {% capture slideText %}
    So this leads to the final step, including users with disabilities in your user research
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="58" text=slideText %}

  {% capture slideText %}
    One of the best parts of user centered design is doing research with your users, this applies to doing accessibility itself.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="59" text=slideText %}

  {% capture slideText %}
    Our team doesnt build live services, so researching in a real world context can be difficult.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="60" text=slideText %}

  {% capture slideText %}
    Doing research with users can be expensive, so we don’t want to do a full round of testing for one addition to the design system.

    In the past, we have tried testing components on their own, but it puts users in an unrealistic scenario.

    One way we’ve tried to get around this is to put multiple additions together and test them in a fake service.

    This was really successful but is time consuming to put together.

    https://www.youtube.com/watch?v=wprWuTvhec4
    https://accessibility.blog.gov.uk/2018/05/15/what-we-learned-from-getting-our-autocomplete-tested-for-accessibility/
    https://github.com/alphagov/govuk-design-system/wiki/Character-count-testing-and-user-research
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="61" text=slideText %}

  {% capture slideText %}
    The best research comes from the real world usage of components in real services.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="62" text=slideText %}

  {% capture slideText %}
    This is why for some components we have an experimental label, which allows us to ship a pattern or component that we think could use more research to validate it.

    Over time we may decide to make another fake service with multiple experimental additions, but we hope by building more community and being honest we can get this research by real services teams.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="63" text=slideText %}

  {% capture slideText %}
    I think with this all in mind, a design system is only as good as the community it represents.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="64" text=slideText %}

  {% capture slideText %}
    Design Systems can’t make services accessible on their own
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="65" text=slideText %}

  {% capture slideText %}
    One thing we’ve noticed is that a design system can mislead some people into thinking they dont need to test their service.

    The quote on screen I actually made up because the real one was not grammatically correct, so this is a bit cheeky but we have consistently seen this in research.

    "Once we have the first prototype, my starting point is the GOV.UK prototype kit, I trust that I know it's been built with accessibility in mind." Senior designer

    "If we were building prototypes from scratch we’d have to look at every screen, but the prototype kit has already considered it, things like don’t have drop down boxes, we have radio buttons, the things that would make a service not accessible, the work has already been done by GDS so we don’t have to keep doing it."  Senior Product Manager

    "Having the prototyping kit now means that it is accessible," Senior Product Manager

    "Things like design patterns, 80% has already been done and tested by GDS or other services." UX designer

    Thanks to Katie John and Bekki Leaver (GDS User Researchers) for these quotes
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="66" text=slideText %}

  {% capture slideText %}
    Cathy Dutton wrote about this in her article ‘Problem with patterns’, where she says:
    Because patterns are built for reuse, they sometimes encourage us to use them without much question [...]

    https://alistapart.com/article/problem-with-patterns
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="67" text=slideText %}

  {% capture slideText %}
    This is not a unique problem to accessibility, patterns in design systems can give people a false sense of security.

    But they shouldnt replace the design process.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="68" text=slideText %}

  {% capture slideText %}
    (paul smith) design systems are a starting point.

    Everything I’ve covered here ideally should also be done by the service teams we support.


    https://medium.com/@paulmsmith/design-systems-the-means-not-the-end-fc840c21b51e
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="69" text=slideText %}

  {% capture slideText %}
    By fixing the most basic accessibility issues we give service teams the time to focus on the harder problems.
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="70" text=slideText %}

  {% capture slideText %}
    When building design systems we have a lot of responsibility, we can make inaccessible patterns wide spread or take the opportunity to make all our services more accessible by default.

    But if you’re starting out, don’t worry about being perfect, as Leonie Watson says: “Do just one thing to make it a little better than yesterday”

    “you’re not going to get it right all the time. We never do, this is the web for one thing. [...] If we could do just one thing to make it a little bit better than yesterday then we can call that a win. “ - Léonie Watson

    https://www.youtube.com/watch?v=spxT2CmHoPk
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="71" text=slideText %}

  {% capture slideText %}
    Thanks
  {% endcapture %}
  {% include dsl-accessibility-slide.html slide="72" text=slideText %}
</div>
