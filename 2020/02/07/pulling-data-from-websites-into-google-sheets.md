---
layout: layouts/post.njk
title: Pulling data from websites into Google Sheets
summary: Using importXML and XPath to get data from websites
date: 2020-02-07
tags: post
---

Pulling data from a public website, sometimes called web scraping, is a useful way to grab some data for research when a public API is not avaliable.

Using a spreadsheet means you don't need to look after an application and is a lower barrier of entry to folks who are not as comfortable with programming.

This is not as reliable as using a dedicated API provided by a website and should not be used for production services. Be sensible and don't abuse websites by over doing it.

## Picking an element you want data from

In this example I'm going to find out how many GitHub projects use the [jest-axe](https://github.com/nickcolley/jest-axe) JavaScript library. These steps can be followed in Google Chrome.

![GitHub dependents page for jest-axe, showing 287 repositories](../dependents-1.png)

1. Visit the [page with the data you want](https://github.com/nickcolley/jest-axe/network/dependents).
1. Right click the data.
2. Select 'Inspect'.

![Context menu showing 'Inspect' option](../dependents-2.png)

You will see the element in your Developer tools.

1. Right click the element.
2. Select 'Copy', then 'Copy XPath'.

![Developer tools showing context menu with 'Copy XPath' option.](../dependents-3.png)

You will have an XPath selector in your clipboard, when you paste you should see something similar to:

```javascript
//*[@id='dependents']/div[3]/div[1]/div/div/a[1]
```

> Note: you may have to swap out double quotes (`"`) for single quotes (`'`) in copied XPath selectors.

This selector is what we will use in the `importXML` function.

## importXML function

Google Sheets has functions, for example `=SUM()` adds cells together.

[`importXML`](https://support.google.com/docs/answer/3093342?hl=en-GB) allows you to take a page URL and XPath selector and return data from the selected element.

For example, we can take the previous URL and XPath and use it in a cell like this:

```javascript
=importXML(
  "https://github.com/nickcolley/jest-axe/network/dependents",
  "//*[@id='dependents']/div[3]/div[1]/div/div/a[1]"
)
```

When this function runs the cell returns with:

```javascript
 287 Repositories
```

Live example of this in Google Sheets: 
[Simple importXML example](https://docs.google.com/spreadsheets/d/1LcyM8QtGwWJYf6NFTFIbOFBNpCp4NRSdGKts_RW1URk/edit?usp=sharing)

### Making it less likely to break

Web scraping is an unreliable way of getting data from a website as the HTML can change breaking an XPath selector.

We can improve the selector by selecting something unique on the element rather than relying on the structure of the page.

```javascript
=importXML(
  "https://github.com/nickcolley/jest-axe/network/dependents",
  "//a[contains(@href,'network/dependents?dependent_type=REPOSITORY')]"
)
```

The `contains` XPath function looks for an anchor element with an href that has the data we need.

We can then use [`regexReplace`](https://support.google.com/docs/answer/3098245?hl=en-GB) to replace any characters that are not numbers, then turn the value into a number with [`value`](https://support.google.com/docs/answer/3094220?hl=en):

```javascript
=value(
  regexReplace(
    importXML(
      "https://github.com/nickcolley/jest-axe/network/dependents",
      "//a[contains(@href,'network/dependents?dependent_type=REPOSITORY')]"
    )
  ,"\D+", "")
)
```

When this function runs the cell returns with:

```javascript
287
```

Live example of this in Google Sheets: 
[More robust importXML example](https://docs.google.com/spreadsheets/d/1l36ID6ad4-aUsKLEMd0mZi0LaIiFPDxSyfbU5vv8_20/edit?usp=sharing)

Check out [devhints.io/xpath](https://devhints.io/xpath) you want more information on how to build your own XPath selectors.

## Updating the data

The result of `importXML` will not be updated unless the function's URL is updated. This is to stop pulling the same data everytime the spreadsheet is opened.

> I've noticed that it does seem to update on it's own after a long period of time, but I could not find where this is documented, if you know more let me know.

Force your cells to update by creating a cell that you update manually and add it to the end of your URL.

```javascript
=value(
  regexReplace(
    importXML(
      "https://github.com/nickcolley/jest-axe/network/dependents#" & $B$3,
      "//a[contains(@href,'network/dependents?dependent_type=REPOSITORY')]"
    )
  ,"\D+", "")
)
```

Live example of this in Google Sheets: 
[Refreshing data importXML example](https://docs.google.com/spreadsheets/d/1DbGST2sLvVrK-aBc9JVZIHm-dWfeoyUqHMWOJy3Mvp8/edit?usp=sharing)

## Full examples

I've put together examples that will show you other ways you can make use of this.

### Twitter

Take Twitter account names and get their followers and following count.

[Twitter account example](https://docs.google.com/spreadsheets/d/1JvkNLz7TE-HOqqxpgkEygWz6YFgYIK5aozUY_wfUv4A/edit?usp=sharing)

### Open source project popularity

Take GitHub repositories and list how many people have stared, watched, forked the project and get npm weekly downloads.

[Open source project popularity example](https://docs.google.com/spreadsheets/d/1-No95TU8pzqdlfxLXIIZ0_iMR7j9uct36oktffa49p0/edit#gid=0)

### Ruby gem version usage in GitHub projects

List GitHub projects and check what version of the `tech-docs-gem` ruby gem they're using.

[Tech docs gem version usage example](https://docs.google.com/spreadsheets/d/1tjrSKRTGkQ3uPjesArD9ozoyqCuI5DrhVqCRm1q2ZVE/edit?usp=sharing)
