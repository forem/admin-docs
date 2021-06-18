---
description: A high-level overview of the most important Forem features.
sidebar_position: 0
---

# Posts

**Posts** (commonly referred to as **Articles**) are the format of content that populate Forem feeds. They can contain text (formatted in markdown), images, videos, and other embedded content. Post authors and Forem Admins have the option to enable/disable discussions on their posts, and Forem Admins have the option to Pin community posts to the top of the main feed.

Community members can create new posts in the editor by clicking `Create Post` from the top navigation or by navigating to `/new`. The post editor allows post authors to set various attributes like a cover image, tags (for discoverability), and a canonical_url (if the post was originally posted elsehwere first). Post authors can choose to publish their posts immediately or save a draft to work on the article later. Once posted, a community member's article will appear in the feed on the homepage.

## Overview

Navigating to `/new` as a community member allows you to:
* Draft a post
* Publish a post

Navigating to `/admin/content_manager/articles` as an admin allows you to:
* See all recently submitted posts 
* Boost (or lower) a post's visibility

## Creating a Post as a Community Member

Visiting `/new` navigates you to the Forem editor where you can create a new post.

The Forem editor has 2 optional user interfaces that you can select from `/settings/customization`:
1. **Basic markdown** - barebones Markdown editor with no GUI attributes
2. **Rich + markdown** - Markdown editor with some graphical enhancements (e.g. click to add cover image)

Once on `/new` you can follow the prompts on page to create your post. If using the Basic markdown editor, you'll need to change `published: false` to `published: true` and save in order to publish the post. If using the Rich + markdown editor, you'll need to click `Publish` at the bottom of the page in order to publish the article.

After publishing the article, it should appear on your profile page, in your user dashboard (`/dashboard`), and in the main feed under `/latest`.

## Using `/admin/content_manager/articles` as an Admin to Manage Posts

Visiting `/admin/content_manager/articles` allows you to easily view all recent submitted posts and provides you various abilities to manage a post:

* **Featured Number** - a calculation that decides how likely a post is to be seen. The number is auto-calculated based on factors like newness, how many reactions it received, how many times it was clicked, etc. The higher the Featured Number is for a post, the more likely it is to show up in someone's feed, and the lower this number is the less visibility the post will get. Admin can manually adjust feature numbers to manipulate an article's visibility (click `submit` after adjusting the number).
* **Author ID** - the identification number of the community member who authored the post.
* **Co-Author IDs (comma separated)** - can be used to add co-authors to a article.
* **Published at** - when an article was published.
* **Featured** - this highlights the box around the article in admin so that it's green. This can be a helpful visual indicator internally, but it doesn't do anything externally.
* **Approved** - if a post is using a tag that requires "approval", this box must be checked for the post to appear in the feed.
* **Boosted** - this is a deprecated feature.
* **Pinned** - this pins a post to the homepage

## Using `/moderate` as an Admin to Manage an Individual Post

If you want to access the above options for an individual post, you can append `/moderate` to the URL of a post (e.g. dev.to/username/name_of_post/moderate) which acts as quick way to navigate to the corresponding `admin/content_manager/articles/###` page for the specific post. The `/moderate` shortcut is very helpful!
