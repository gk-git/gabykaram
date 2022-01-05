---
title: "Five new CSS Tips that I have learned."
date: 2021-12-23
published: true
featured: false
featuredImage: ../assets/images/blog/debugging-css-cover-book.jpg
---

In the last two days, I read the Debugging CSS book by Ahmad Shadeed, reached the 4th chapter, and learned the following six new tips.

## List Media Queries

You can view a page according to the media queries defined in the CSS in the Chrome browser rather than the list of devices available in the browser inspect.

![Visual for the media queries window ](../assets/images/blog/list-media-queries.png 'Page 46 in the Debugging CSS book by Ahmad Shadeed')

As you can see, we have two bars, the blue bar for max-width queries and the orange for min-width queries. Having a broader view of all media queries helps test multiple query sizes.

If you don't have this feature enabled, check the following answer from StackOverflow [How to view media queries with Google chrome dev tool or Firefox dev tool?](https://stackoverflow.com/questions/42699978/how-to-view-media-queries-with-google-chrome-dev-tool-or-firefox-dev-tool)

## Firefox's Style Editor

The style editor in Mozilla's Firefox browser is a kind of design app in the browser. Here are some of the great things you can do with it:

1. You can create new style sheets and append them to the document.
2. You can import a CSS file.
3. You can list all of the CSS rules for a document, with the ability to activate and deactivate them by clicking an eye icon (similar to showing and hiding layers in a design app).
4. You can save a file from the list.
5. You can list all media queries in the selected CSS file. The browser will highlight the active ones in a dark colour, dimming the inactive ones. You can jump to the part of the code that has the media query.
6. You can click on a media query.

![Firefox style editor visual guide](../assets/images/blog/firefox-style-editor.png 'Page 54 in the Debugging CSS book by Ahmad Shadeed')

## Compatibility Support in Firefox

While inspecting an element's CSS, you can see the browsers that support a particular feature, along with the browser versions. You can view details by hovering over one of them.


## Break JavaScript On Specific DOM Modification

This feature would work on Chrome and Firefox, and it is available for the following use cases:

1. subtree modification,
2. attribute modification
3. node removal

![Break JavaScript On Specific DOM Modification visual](../assets/images/blog/break-javaScript-on-specific-DOM-modification.png 'Page 74 in the Debugging CSS book by Ahmad Shadeed')

### Element Subtree Modification

This feature will target child items of the selected parent. If any addition or deletion of an HTML element happens, this is considered a modification. In this case, the browser will add a breakpoint.

### Attribute Modification

This feature would watch for any change in the selected element attributes as classes, id, data-something, etc.

### Node Removal

This feature would watch and stop the execution of javascript if the selected element got removed from the DOM.

## Copying CSS From the DevTools to the Source Code using the changes Feature in Firefox Browser.

A lot of bug fixing happens in the browser and what I used to do was go over each element that I changed and copy the styles block by block until I have discovered this feature that is only available in Firefox for now.

The Firefox Changes tab inside the Inspector tab allows you to visualize the CSS changes you have manually added.

![Copying CSS Changes On Firefox](../assets/images/blog/copying-css-changes-on-firefox.png 'Page 82 in the Debugging CSS book by Ahmad Shadeed')
