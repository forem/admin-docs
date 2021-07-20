---
description: A high-level overview of the most important Forem features.
position: 0
---

# Navigation Links

### Overview

The `/admin/customization/navigation_links` page is used to configure the sidebar that appears on your home page. The sidebar has two sections: `Default` (its title is your Community Name) and `Other`. By default you should see the following sidebar navigation items on your homepage:

| Name | URL | Section
| :--- | :--- | :---
| Reading List | /readinglist | Default |
| Code of Conduct | /code-of-conduct | Other |
| Privacy Policy | /privacy | Other |
| Terms of use | /terms | Other |
| Contact | /contact | Default |

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

In order to create a navigation links, click on the button that says **Add Navigation Link** and enter the information required. 

A brief description of each of the fields can be found below:

* **Name** is the user facing friendly name that you will give the link.
* **URL** sets the url for the link. The user will be directed to this link when they click on the navigation item.
* **Icon** requires an SVG icon to be pasted into the text area. The icon will be displayed in a 24x24 px box. More info on finding SVGs below.
* **Section** determines which section the link will be displayed ("Default" or "Other").
* **Position** provides the position or the order placement of the links in the sidebar. If you choose to not specify an order then the links will be ordered in a descending order by name. 
* **Display only when signed in** allows the admin to decide whether that link should only be shown after the user has signed into their account.

You may also edit or delete your navigation link at any point.

*NOTE: If you do not have any Other links, the Other section will not show up in your sidebar.*

### Finding SVGs

We recommend the [Twemoji project](https://twemoji.twitter.com/) for SVGs.

* Find the SVG you'd like to use [here](https://twitter.github.io/twemoji/v/latest/preview.html)
* Use the file name to find the SVG file in the proper folder
  * Versioned SVGs will be [here](https://github.com/twitter/twemoji/tree/gh-pages/v)
  * Non-Versioned SVGs will be [here](https://github.com/twitter/twemoji/tree/gh-pages/svg)
