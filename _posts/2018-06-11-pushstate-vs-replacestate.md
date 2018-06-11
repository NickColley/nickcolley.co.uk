---
layout: post
title:  "Rewriting history – when to use pushState() versus replaceState()"
date:   2018-06-11 00:36:29 +0100
---

# Rewriting history – when to use pushState() versus replaceState()

When navigating around the web your browser creates history entries.
These entries are useful if you visited a page before and forget what it was called, or just want to go back to a page you were just on.

This history is controlled by the browser, if you're changing a page with JavaScript and want to make the user's experience to be consistent with how they browse the web normally you can use the [History Web API](https://developer.mozilla.org/en-US/docs/Web/API/History_API).

It can be used to send a user back to the page there were just on with `window.history.back()`.

It can also be used to [add, remove or edit history  entries](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries), these entries represent the current 'state' of your history.

To manipulate this 'state', there are two main methods, `window.history.pushState()` and `window.history.replaceState()`.

They both achieve similar goals, both methods will mean the user can share the URL they're currently on or bookmark the current page.

The main things that separate them the experience a user will have, when interacting with their history afterwards for instance when they press 'back' or when they browser their history later on.

## pushState

`window.history.pushState()` adds new entries to the users' history, so if you were to use `pushState()` three times, a user would have to press 'back' in their browser three times to get to where they started.

If your browser's history were implemented using the History Web API, this method would be used when users click on hyperlinks and go to a new page.

### When to use pushSate

- the majority of the content in page has been updated
- if you would give the page a different `<h1>` or `<title>`

### Examples of pushState


- client side application routers (such as [Reach Router](https://reach.tech/router), [Xiao](https://heydon.github.io/xiao/))

Note on accessibility: Since `pushState` is typically used in client side application routes it's important to note that most libraries do no account for users of assistive technologies. The example libraries I have linked aim to do this, by ensuring focus and scroll position is managed (among other things). If you're attempting to use `pushState` directly you may need to take this into account.

## replaceState

`window.history.replaceState()` changes the current entry, if you were to use `replaceState` three times, they would only have to press `back` once.

If your browser's history were implemented using the History Web API, this method would be used when users click on internal 'anchor' hyperlinks and go to a section within the page.

### When to use replaceState

- most of the content on the page is the same
- you want to keep a component in the same state it was when a user decides to come 'back' to the page. (See accordions and tabs)
- the user's interaction changes the shape of the data, for example re-ordering a data table or filtering a data table.

Generally you'll be using `replaceState` more often, since it tends to work better with components rather than more global behaviour like client side routing.

### Examples of replaceState

- [Tabs component](https://inclusive-components.design/tabbed-interfaces/)
- [Accordion component](https://inclusive-components.design/collapsible-sections/)

Did I get something wrong, or is there a better way of using this API? Send me a tweet [@nickcolley](https://twitter.com/nickcolley)
