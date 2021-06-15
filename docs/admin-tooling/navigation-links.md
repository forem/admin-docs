---
description: How to create the sidebar Navigation Links on your home page
---

# Navigation Links

### Overview

The `/admin/customization/navigation_links` page is used to configure the sidebar that appears on your home page. By default you should see the following sidebar navigation items on your homepage:

| Name | URL |
| :--- | :--- |
| Reading List | /readinglist |
| Code of Conduct | /code-of-conduct |
| Privacy Policy | /privacy |
| Terms of use | /terms |
| Contact | /contact |

Alongside the /readinglist URL you will notice that a counter appears in order to display to the user the number of items in their reading list. 

If you create more than 5 links, then the first 5 links will be visible by default on the sidebar, whilst the rest will be collapsed into a 'More' section. When 'More' is clicked the remainder of the links will display.   

### Possible additional navigation links:

Some additional navigational links that can be created once you have content for these pages include:

| Name  | URL |
| :--- | :--- |
| Listings | /listings |
| Podcasts | /pod |
| Videos | /videos |
| Tags  | /tags |
| FAQ | /faq |
| Shop | ~ |
| Sponsors  | /sponsors |
| About | /about |

### How to create a navigation link

In order to create a navigation links simply click on the button that says "Add Navigation Link" and enter the information required. 

A brief description of each of the fields can be found below:

* **Name** which is the user facing friendly name that you will give the link.
* **URL** sets the url for the link. The user will be directed to this link when they click on the navigation item.
* **Icon** requires an SVG icon to be pasted into the text area. The icon will be displayed in a 24x24 px box. More info on [finding SVGs](navigation-links.md#finding-svgs) below.
* **Position** provides the position or the order placement of the links in the sidebar. If you choose to not specify an order then the links will simply be ordered in a descending order by name. 
* **Display only when signed in** which allows the admin to decide whether that link should only be shown after the user has signed into their account..

You may also edit or delete your navigation link at any point. 

### Finding SVGs

We recommend the [Twemoji project](https://twemoji.twitter.com/) for SVGs.

* Find the SVG you'd like to use [here](https://twitter.github.io/twemoji/v/latest/preview.html) \(right click and save the image to get the file name\)
* Use the file name to find the SVG file in the proper folder
  * Versioned SVGs will be [here](https://github.com/twitter/twemoji/tree/gh-pages/v)
  * Non-Versioned SVGs will be [here](https://github.com/twitter/twemoji/tree/gh-pages/svg)
* Once you've found the SVG, [copy the code](https://p241.p3.n0.cdn.getcloudapp.com/items/qGuvEKA9/Screen%20Recording%202020-10-15%20at%2012.35.11%20PM.mp4)
* Enter the copied code into the Icon text box.

