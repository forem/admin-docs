---
description: A high-level overview of the "Out of the Box" pages that are generated when you create your Forem.
sidebar_position: 0
---

# Generated Pages

**Generated Pages** are pages that are created for your when your Forem is created and spun up for the first time.

:::important

If you're looking for information about a custom page, please visit our [Pages documentation](/docs/forem-basics/pages).

:::

## Overview

Here's a high-level list of the pages you'll receive once your Forem is created.

- `/contact`
- `/about`
- `/faq`
- `/community-moderation`
- `/tag-moderation`
- `/terms`
- `/code-of-conduct`
- `/privacy`
- `/readinglist`
- `/events`
- `/listings`
- `/pod`
- `/listings`
- `/sponsors`

## Overriding a Generated Page

Certain pages can be overridden to display a custom page built by yourself or team. A great example of this would be the `/contact` page example.

:::note

Only certain pages are able to be be overridden. These pages are:

- `/about`
- `/about_listings`
- `/bounty`
- `/contact`
- `/community_moderation`
- `/faq`
- `/post_a_job`
- `/tag_moderation`

:::

### Getting Started

Navigate to your admin page and then to the pages section, `/admin/customization/pages`.

You'll see the "Override defaults" section below the "Pages" section. We'll click the "New page" button in the top right.

### Creating the Page

You'll be present a new page with a form to fill out:

![](/img/overridePageNewForm.png)

To override a page, contact in our case, we'll need to ensure we fill the form out with the proper "title", "slug", and "body markdown".

- **Title**: "Contact Us"
- **Slug**: "contact"
- **Body Markdown**:

```
### We'd love to hear from you
You can reach us at:
Email: example@yoursite.tld
Twitter: @yourHandle
```
