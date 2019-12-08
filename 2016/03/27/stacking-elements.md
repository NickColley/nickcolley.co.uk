---
layout: layouts/post.njk
title: Stacking inline elements
summary: A small tip for how to evenly space inline elements that works when wrapping
date: 2016-03-27
tags: post
---

<style>
.btn-group {
  margin-left: -.5em;
  margin-right: -.5em;
}

.btn-group > .btn {
  margin-left: .5em;
  margin-right: .5em;
}

.alternative-btn + .alternative-btn {
  margin-left: 1em;
}

.traditional-btn {
  margin-right: 1em;
}
.traditional-btn:last-child {
  margin-right: 0;
}

.btn {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  padding: 5px;
  margin-bottom: .5em;
  border-radius: 2px;
  background-color: blue;
  color: white;
  white-space: nowrap;
  font-family: sans-serif;
}

.demo-outline {
  overflow: hidden;
  position: relative;
  max-width: 500px;
  padding-top: .5em;
  margin-bottom: 1rem;
  font-size: 18px;
}

.demo-outline-truncated {
  max-width: 150px;
  white-space: normal;
}

.demo-outline:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  border-left: 1px dashed rgb(244, 67, 54);
  border-right: 1px dashed rgb(244, 67, 54);
}

.demo-outline.btn-group:after {
  right: .5em;
  left: .5em;
}

.demo-outline-truncated:not(.btn-group) .btn:before {
  content: '';
  position: absolute;
  top: 0;
  right: 100%;
  height: 100%;
  width: 1em;
  background-color: rgba(244, 67, 54, .25);
}

.text-right .btn:before {
  left: 100%;
  right: auto;
}
</style>  

Little tip for spacing inline elements.

With inline elements you normally want spacing between,
this is easy to do but when they are stacking horizontally
it can lead to problems if not done properly.

## ‘natural’ approach

This what you'd probably try first off and rightly so,
it makes sense –
I want all my buttons to have a margin to the right apart from the last one.

<div class="grid">
<div class="grid-col">
<div class="demo-outline">
<span class="traditional-btn btn">Btn Text</span>
<span class="traditional-btn btn">Btn Text</span>
<span class="traditional-btn btn">Btn Text</span>
</div>
<div class="demo-outline demo-outline-truncated">
<span class="traditional-btn btn">Btn Text</span>
<span class="traditional-btn btn">Btn Text</span>
<span class="traditional-btn btn">Btn Text</span>
</div>
</div>
<div class="grid-col">
<div class="demo-outline text-right">
<span class="traditional-btn btn">Btn Text</span>
<span class="traditional-btn btn">Btn Text</span>
<span class="traditional-btn btn">Btn Text</span>
</div>
<div class="demo-outline demo-outline-truncated text-right">
<span class="traditional-btn btn">Btn Text</span>
<span class="traditional-btn btn">Btn Text</span>
<span class="traditional-btn btn">Btn Text</span>
</div>
</div>
</div>

```css
.btn {
  margin-right: 1em;
}

.btn:last-child {
  margin-right: 0;
}
```


## ‘conditional’ approach

This works for the equal spacing however when collapsed there's unwanted left-most margin.

<div class="grid">
<div class="grid-col">
<div class="demo-outline">
<span class="alternative-btn btn">Btn Text</span>
<span class="alternative-btn btn">Btn Text</span>
<span class="alternative-btn btn">Btn Text</span>
</div>
<div class="demo-outline demo-outline-truncated">
<span class="alternative-btn btn">Btn Text</span>
<span class="alternative-btn btn">Btn Text</span>
<span class="alternative-btn btn">Btn Text</span>
</div>
</div>
<div class="grid-col">
<div class="demo-outline text-right">
<span class="alternative-btn btn">Btn Text</span>
<span class="alternative-btn btn">Btn Text</span>
<span class="alternative-btn btn">Btn Text</span>
</div>
<div class="demo-outline demo-outline-truncated text-right">
<span class="alternative-btn btn">Btn Text</span>
<span class="alternative-btn btn">Btn Text</span>
<span class="alternative-btn btn">Btn Text</span>
</div>
</div>
</div>

```css
.btn + .btn {
  margin-left: 1em;
}
```

## ‘negative-margin’ approach

Using a negative margin wrapper there's equal margin between element.
Only con for using this approach is you can't style the background of the wrapper
as it'll bleed over your container width.

<div class="grid">
<div class="grid-col">
<div class="demo-outline btn-group">
<span class="btn">Btn Text</span>
<span class="btn">Btn Text</span>
<span class="btn">Btn Text</span>
</div>
<div class="demo-outline demo-outline-truncated btn-group">
<span class="btn">Btn Text</span>
<span class="btn">Btn Text</span>
<span class="btn">Btn Text</span>
</div>
</div>
<div class="grid-col">
<div class="demo-outline btn-group text-right">
<span class="btn">Btn Text</span>
<span class="btn">Btn Text</span>
<span class="btn">Btn Text</span>
</div>
<div class="demo-outline demo-outline-truncated btn-group text-right">
<span class="btn">Btn Text</span>
<span class="btn">Btn Text</span>
<span class="btn">Btn Text</span>
</div>
</div>
</div>

```css
.btn-group {
  margin-left: -.5em;
  margin-right: -.5em;
}

.btn-group > .btn {
  margin-left: .5em;
  margin-right: .5em;
}
```

End result works well, this is actually how Bootstrap's grid system works
for example.
