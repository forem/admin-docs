---
description: A summary of User Extension Settings fields
sidebar_position: 6
---

# Extension Settings

:::important

We're in the middle of some fast-moving changes to the Forem Admin experience, so we've paused documentation updates for the time being. You may find that the docs are now outdated in parts. If you have any questions, please visit [forem.dev](https://forem.dev) to request additional support. We thank you for your patience and hope you're liking the changes!

:::

## Comment templates

All users can create and save comment templates for reuse. Templates are composed in markdown, just like posts. They may be GIF-based greetings, or helpful hints and tips for other users, the possibilities are endless. Once a user has comment templates set up, they can manage them from here (delete or edit):

![Manage comment templates from User Extension Settings](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/commentTemplateDelete.png)

# To use a comment template in a post discussion

Users can activate the Comment textbox as if to comment, and they will see the option to use a Template:

![Select Template from the footer of the Comment text box](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/commentTemplateSelect.png)

By clicking on Template, they will see their available templates appear in a list:

![Templates are listed below the Comment textbox](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/commentTemplateMenu.png)

Moderators will be offered the choice of Personal or Moderator templates:

![Moderators get a choice of selecting from Personal templates](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/commentTemplatePersonal.png)

![Or Moderator templates](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/commentTemplateModerator.png)

Clicking on **Insert** will insert the template markdown into the Comment textbox. Clicking on **Preview** will render the markdown, and if the user is happy with the comment they can submit it right away, or otherwise return to the markdown editor:

![Comment template rendered in Preview](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/commentTemplatePreview.png)

## Publishing to Forem from RSS

Users can configure RSS feed settings to import content from another source every time they save these settings and periodically thereafter. Posts land in their `/dashboard` as drafts to allow them to make manual fixes to formatting before publishing. In the case of Medium, the full post is usually not imported by RSS and needs to be manually added to the stub post. Medium RSS feed URLs are https://medium.com/feed/@your_username
Users have the option to automatically mark the feed source as the canonical URL automatically and change any URLs included in the post to refer to the version of that article on your Forem (if available). This is primarily meant for users migrating their entire blog onto your Forem.

Your Forem installation includes an information page for RSS at `/p/publishing_from_rss_guide`

## Web monetization

This is a beta feature that allows for micropayments on posts. The user settings page includes a [link to a DEV article on the subject](https://dev.to/hacksultan/web-monetization-like-i-m-5-1418) and further information is available at [the Web Monetization Community Forem](https://community.webmonetization.org/)!

## GitHub

Users can pin their GitHub repositories to their profile homepage. Removing the OAuth association with GitHub also removes the repo links.
