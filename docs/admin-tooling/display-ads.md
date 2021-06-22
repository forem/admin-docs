---
description: How to create Display Ads for your community.
---

# X - Display Ads

### Overview

Display ads are images/text/links you can add to the upper right and lower left sidebars of your community homepage.

![Annotation of left and ride sidebar](/img/image-2020-10-19-at-3.38.53-pm.png)

On /admin/customization/display_ads you'll see these attributes from the display ads that have been created for your community:

- Organization ID \#
- Organization Name
- Placement area \(left or ride sidebar\)
- Body Markdown
- Published Status \(true or false\)
- Approved Status \(true or false\)
- Success Rate \(how often the ad is clicked\)

You'll also see an edit button to edit the display ad and a destroy button to completely remove it.

### How to Create a Display Ad

Before you get started, you'll need an Organization ID \# to to create the ad. If you have not created an organization yet, you can do so from your settings page. Once you've created an organization, you can look up the Organization ID \# by visiting /admin/organizations.

To create a new display ad, click the "Make A New Display Ad" button from /admin/display_ads. This will bring you to a form with the following fields:

- Organization ID: add your organization id \#
- Body Markdown: add the markdown or html for your ad
- Placement Area: select left or right sidebar
- Published \(you will only see this if you are an admin\)
- Approved \(you will only see this if you are an admin\)

Here is an example of the body markdown from the image above:

```text
<a href="https://dev.to/devteam/join-us-in-celebrating-lgbtqia-pride-fp6">
    <img src="https://dev-to-uploads.s3.amazonaws.com/i/u0s38uu0cg1030f78uxw.png" height="300" width="300" />
</a>
<br>
<a href="https://dev.to/devteam/join-us-in-celebrating-lgbtqia-pride-fp6">
    <h2 style="text-align: center; line-height: 1.29em">Share Your Story</h2>
</a>
```

![Display Ad Form](/img/image-2020-10-19-at-3.58.42-pm.png)

If you do not have publishing privileges, you'll need to ask an admin to approve and publish your display ad.

_Please note: it'll take a few minutes for your display ad or any changes made to your display ad to appear on the home page._

_Additionally, if you attempt to publish a display ad and see an error, please make sure there is no space after the image source URL \(i.e. between `png`add the `"` mark in the example above\) as this can return an error._
