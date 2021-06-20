---
description: A high-level overview of the most important Forem features.
sidebar_position: 0
---

# Pages

**Pages** are a way to store static content on your Forem that won't appear in Feeds. They allow for custom formating [compared to Posts](/docs/_forem-basics/posts) and can be assigned top level paths.

## Overview

The `/admin/customization/pages` page allows you to:

- Create a new page
- View existing pages

## Creating a Page

Visiting `/admin/customization/pages/new` allows you to create a new page.

- **Title** = The name of the page, appears in the browser window or tab.
- **Slug** = The unique page path that this page will be accessed with, e.g. `https://yourforem.tld/slug`. The slug for `https://dev.to/code-of-conduct` is `code-of-conduct`
- **Description** = A description of what the page contains, used mostly by search engines
- **Template** =
  - [Here is an example of a Contained page](https://dev.to/about)
  - [Here is an example of a full_within_layout page](https://dev.to/downloads)
  - [Here is an example of a json page](https://dev.to/page/codeland_schedule)
- **Body Markdown / Body HTML**
  - You'll usually use _one or the other_
  - You should have a very specific reason for using HTML and not Markdown
- **Social Image** = This is the social image for the page
- **Is Top Level Path?**
  - If checked, your page lives at `/slug`
  - If not checked, your page lives at `/page/slug`
- **Feature Flag**
  - _coming soon_

## What can you do with pages?

- [Here is an example of a simple Contained Markdown page](https://dev.to/about)
- [Here is an example of a full_within_layout page that uses HTML](https://dev.to/downloads)
- [Here is an example of a json page \(unprettified\)](https://dev.to/page/codeland_schedule)
- You can create more sophisticated pages, such as:
  - [A blend of static content with custom CSS + dynamic posts](https://dev.to/shecoded)
  - [A full-on conference experience](https://dev.to/codeland)
