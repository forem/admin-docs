---
description: A high-level overview of the most important Forem features.
sidebar_position: 1
---

# Billboards

:::important

We're in the middle of some fast-moving changes to the Forem Admin experience, so we've paused documentation updates for the time being. You may find that the docs are now outdated in parts. If you have any questions, please visit [forem.dev](https://forem.dev) to request additional support. We thank you for your patience and hope you're liking the changes!

:::

## Overview

**Billboards** are images, text, and/or links you can add to the upper right and lower left sidebars of your community homepage.

![Annotation of left and ride sidebar](https://user-images.githubusercontent.com/16007075/121432399-9e900900-c948-11eb-8f9d-db4cf3429477.png)

On `/admin/customization/billboards` you'll see these attributes from the billboards that have been created for your community:

- Organization ID \#
- Organization Name
- Placement area \(left or ride sidebar\)
- Body Markdown
- Published Status \(true or false\)
- Approved Status \(true or false\)
- Success Rate \(how often the ad is clicked\)

You'll also see an edit button to edit the billboard and a destroy button to completely remove it.

## How to Create a Billboard

Before you get started, you'll need an Organization ID # to to create the ad. If you have not created an organization yet, you can do so from your settings page. Once you've created an organization, you can look up the Organization ID \# by visiting `/admin/content_manager/organizations`.

To create a new billboard, click the "Make A New Billboard" button from `/admin/customization/billboards`. This will bring you to a form with the following fields:

- Organization ID: add your organization id \#
- Body Markdown: add the markdown or HTML for your ad
- Placement Area: select left or right sidebar
- Published (you will only see this if you are an admin)
- Approved (you will only see this if you are an admin)

Here is an example of the body markdown from the image up top:

```text
<a href="https://dev.to/devteam/join-us-in-celebrating-lgbtqia-pride-fp6">
    <img src="https://dev-to-uploads.s3.amazonaws.com/i/u0s38uu0cg1030f78uxw.png" height="300" width="300" />
</a>
<br>
<a href="https://dev.to/devteam/join-us-in-celebrating-lgbtqia-pride-fp6">
    <h2 style="text-align: center; line-height: 1.29em">Share Your Story</h2>
</a>
```

![Billboard Form](https://user-images.githubusercontent.com/16007075/121432893-3ee62d80-c949-11eb-9b80-e2ba4ce37197.png)

If you do not have publishing privileges, you'll need to ask a super admin to approve and publish your billboard.

_Please note: it'll take a few minutes for your billboard or any changes made to your billboard to appear on the home page._

_Additionally, if you attempt to publish a billboard and see an error, please make sure there is no space after the image source URL \(i.e. between `png`add the `"` mark in the example above\) as this can return an error._
