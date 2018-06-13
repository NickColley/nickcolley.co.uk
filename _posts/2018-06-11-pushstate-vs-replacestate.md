---
layout: post
title:  "rewriting browser  history – when to use pushState() versus replaceState()"
date:   2018-06-11 00:36:29 +0100
---

Your browser creates history entries when you navigate around the web.
These entries are used when you want to go back or if you visited a page before and forget what it was called.

When updating a page with JavaScript, you can create a consistent user experience with the [History Web API](https://developer.mozilla.org/en-US/docs/Web/API/History_API).

To send a user back to the previous page in their history you can use `window.history.back()`.

You can also [add, remove or edit history  entries](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries) with two main methods, `window.history.pushState()` and `window.history.replaceState()`.

They both achieve similar goals, both methods will let the user share or bookmark the current page.

The main difference between them is the experience a user will have when using their history afterwards, for instance when they press 'back' or when they browse their history.

## pushState

`window.history.pushState()` adds new entries to the users' history.

If you were to use `pushState()` three times, a user would have to press 'back' in their browser three times to get to where they started.

If your browser's history were implemented using the History Web API, this method would be used when users click a regular link to visit a new page.

### When to use pushSate

- the majority of the content in page has been updated
- if you would give the page a different `<h1>` or `<title>`

### Examples of pushState

- client side application routers (such as [Reach Router](https://reach.tech/router), [Xiao](https://heydon.github.io/xiao/))

Note on accessibility: The example libraries take care to re-introduce some of the behaviours that the browser has by default such as setting the focus and scroll position. If you decide to use `pushState` without a router, ensure you take this into account.

## replaceState

`window.history.replaceState()` changes the current history entry.

If you were to use `replaceState` three times, a user would only have to press back once.

You may decide that you want to keep a user's state the same when they go 'back' to a page, but without adding or changing the history.
In these cases you could consider [`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).

### When to use replaceState

- most of the content on the page is the same
- you want to keep a component in the same state it was when a user decides to come 'back' to the page. (See accordions and tabs)
- the user's action changes the shape of the data, for example re-ordering a data table or filtering a data table.

You'll be using `replaceState` more often, since it tends to work better with components.

### Examples of replaceState

- [A tab component](https://inclusive-components.design/tabbed-interfaces/)
- [An accordion component](https://inclusive-components.design/collapsible-sections/)

Update: Thanks to Adam Silver for a [correction around internal anchor links](https://twitter.com/adambsilver/status/1006786720879316996) 🙂

Did I miss something, or there a different way of using this API? Send me a tweet [@nickcolley](https://twitter.com/nickcolley)
