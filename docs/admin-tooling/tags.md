---
description: Information on using the Tags section
---

# X - Tags

The `/admin/content_manager/tags` page displays all tags associated with posts on your Forem. By default, they are sorted by "taggings count," or the number of times they've been used in a post.

### Editing a tag

To edit a tag, click on the tag name. You will be dropped into the `/admin/content_manager/tags/{tag-id}/edit` page.

**Moderators**: add a user ID to add a tag moderator

**Supported**: checking this box will make the tag searchable to authors who are writing posts or listings. Note: adding a tag mod to a tag will automatically make it supported.

**Badge:** \(needs documentation\)

**Category:** \(needs documentation\)

**Alias for:** \(needs documentation\)

**Pretty Name:** Shown at the top of the tag page

**Short Summary**: Displayed on tag page

**Rules Markdown:** Displayed on tag page + in drop-down of rich editor

**Submission Template**: Placeholder text that appears when creating a new post under the tag. You can share these templates by directing people to `/new/{tag_name}`. This is especially useful when encouraging members to post about a topic in a structured format. This field takes markdown.

Here's an example of the template used for [dev.to/new/shecoded](https://dev.to/new/shecoded):

```text
---
title: Nevertheless, PARAM_0 Coded
published: true
tags: shecoded
---
<!-- ✨This template is only meant to get your ideas going, so please feel free to write your own title & narrative! ✨ -->

## Equality in tech looks like…

## I’m an expert at…

## My advice for allies to support self-identifying women and non-binary folks who code is...

<!-- Once your post is published, it will not appear on the /t/shecoded page until an admin approves it. This is an extra step to ensure there is no abuse on this important tag. -->
```

Note that the template will also be accessible from the tag landing page by clicking on "write post" in the submission guidelines. The submission guidelines must be set for this to appear.

**Wiki Body Markdown**: Displayed on tag page

**BG + Text color hex**: Used as tag colors, ensure contrast meets a11y requirements

![Annotating a few fields](/img/screen_shot_2020-10-19_at_1_59_53_pm.png)

![Rules body markdown is also used in the tag selector area of the rich edito](/img/screen-shot-2020-10-19-at-2.01.07-pm.png)
