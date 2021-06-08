---
description: A high-level overview of the most important Forem features.
sidebar_position: 0
---

# What are pages?

Pages are a useful feature for creating customized pages on your Forem that allow you to lay out the content however you see fit.

## Overview

The `/admin/customization/pages` page allows you to:

* Create a new page
* View existing pages

## Creating a Page

Visiting `/admin/customization/pages/new` allows you to create a new page.

* Title = title of the page
* Slug = slug of the page
* Description = description, used mostly by search engines
* Template
  * [Here's a Contained example](https://dev.to/about)
  * [Here's a full\_within\_layout example](https://dev.to/downloads)
  * json (_coming soon_)
* Body Markdown / Body HTML
  * You'll usually use _one or the other_
  * You should have a very specific reason for using HTML and not Markdown
* Social Image
  * This is the social image for the page
* Is Top Level Path?
  * If checked, your page lives at `/slug`
  * If not checked, your page lives at `/page/slug`
* Feature Flag
  * _coming soon_

## What can you do with pages?

* [Here is an example of a simple contained Markdown page](https://dev.to/about)
* [Here is an example of a full\_within\_layout page that uses HTML](https://dev.to/downloads)
* You can create more sophisticated pages, such as:
  * [A blend of static content with custom CSS + dynamic posts](https://dev.to/shecoded)
  * [A full-on conference experience](https://dev.to/codeland)
