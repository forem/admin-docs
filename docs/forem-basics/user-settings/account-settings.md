---
description: A summary of User Account Settings fields
sidebar_position: 3
---

# Account Settings

:::important

We're in the middle of some fast-moving changes to the Forem Admin experience, so we've paused documentation updates for the time being. You may find that the docs are now outdated in parts. If you have any questions, please visit [forem.dev](https://forem.dev) to request additional support. We thank you for your patience and hope you're liking the changes!

:::

## Set new password

If your Forem is configured for OAuth and users created their accounts using social account authentication, they have the option to additionally enable email log in.

Note: email log in is in addition to social log in rather than a replacement for it, so all user accounts created via social authorization will continue to require a social account to be connected to them.

## Account emails

Users can have multiple email addresses, for instance, the email address(es) for any connected social log in(s).

## API Keys

The API is still in its beta stage, and users can experiment with person API keys. The [API documentation](https://docs.forem.com/api) contains further information.

## Export content

Currently we only support the export of posts and comments. Users can request them by email.

## Danger Zone

Users can choose to delete their own accounts. Self-deletion will:

- Delete their profile, along with any authentication associations. This does not include applications permissions, which need to be deleted from the apps themselves.
- Delete any and all content saved to the account, such as articles, comments, reading lists, or chat messages.
- Allow their username to become available to anyone.
