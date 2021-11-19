---
description: A high-level overview of the most important Forem features.
sidebar_position: 1
---

# Tags

Tags are added to posts by authors and are used to categorize the post. Users can also follow tags which effect how often they are seen in the user's feed. Users can edit the follow weight of each tag from `/dashboard/following_tags` so that they see the tags more or less often.

## Editing a tag

As an admin, you have the ability to manipulate a number of traits for an individual tag by searching and clicking into the tag from `/admin/content_manager/tags`. After clicking on a tag name, you will be dropped into the `/admin/content_manager/tags/{tag-id}/edit` page and see the following options:

**Moderators**: add a user ID to add a tag moderator

**Supported**: checking this box will make the tag searchable to authors who are writing posts or listings. Note: adding a tag mod to a tag will automatically make it supported.

**Badge:** a square image that will appear at the top of the tag's landing page.

**Category:** \(needs documentation\) 

**Alias for:** typing in a tag name here will make it so that any time a person uses this tag (the one you are editing) it will lead to the tag it is an alias for. (e.g. if "js" is an alias for "javascript" then anytime someone uses the tag "js" in their post, it will be replaced by "javascript"

**Pretty Name:** Shown at the top of the tag page

**Short Summary**: Displayed on tag page

**Rules Markdown:** Displayed on tag page + in drop-down of rich editor. Filling out this field adds a "Create Post" button to the tag page, taking users straight to a new post in their Post Editor with this tag prefilled.

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
