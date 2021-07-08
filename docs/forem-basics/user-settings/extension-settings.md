---
description: A summary of User Extension Settings fields
sidebar_position: 6
---

# Extension Settings

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

## Connect settings

Connect is Forem's built in direct messaging interface. The default settings are for users to only receive DMs from other users who they follow back. The **Inbox privacy** option allows users to switch between opening their inbox to messages from all other users of the Forem or keep their inbox private to mutual follows.

Users can optionally set guidelines or instructions for users who open a new Connect conversation with them.

## Publishing to Forem from RSS

Users can configure RSS feed settings to import content from another source every time they save these settings and periodically thereafter. Posts land in their `/dashboard` as drafts to allow them to make manual fixes to formatting before publishing. In the case of Medium, the full post is usually not imported by RSS and needs to be manually added to the stub post. Medium RSS feed URLs are https://medium.com/feed/@your_username
Users have the option to automatically mark the feed source as the canonical URL automatically and change any URLs included in the post to refer to the version of that article on your Forem (if available). This is primarily meant for users migrating their entire blog onto your Forem.

Your Forem installation includes an information page for RSS at `/p/publishing_from_rss_guide`

## Web monetization

This is a beta feature that allows for micropayments on posts. The user settings page includes a [link to a DEV article on the subject](https://dev.to/hacksultan/web-monetization-like-i-m-5-1418) and further information is available at [the Web Monetization Community Forem](https://community.webmonetization.org/)!

## Generate a personal blog from your Forem posts

Another beta feature that allows users to automatically generate a self-hosted static blog feed from their posts.

## GitHub

Users can pin their GitHub repositories to their profile homepage. Removing the OAuth association with GitHub also removes the repo links.
