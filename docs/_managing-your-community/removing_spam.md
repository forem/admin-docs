---
description: A high-level overview of the most important Forem features.
sidebar_position: 0
---

# Removing Spam

The best way to remove spam is to banish the user creating it.

Note: after banishing a user, you cannot recover their account, so be extremely careful when doing this.

## Steps to Banish a User

To banish a user, you must be logged into a super-admin account and:

1. Navigate to the user's corresponding admin page (`/admin/users/###`). Note: you can appended `/moderate` to the URL of a community member's profile page (e.g. dev.to/username/moderate) to quickly jump to their corresponding admin page.
2. Click the "manage user" button in the top right corner of the page.
3. Scroll down to "Destructive Actions" and click "Toggle".
4. Click "Banish User for Spam!"

## What if the individual post a spammy post, but I'm not entirely sure that they are spammer and so don't want to banish them?

You can always [unpublish a user's article](/docs/_managing-your-community/how_do_I_delete_a_post_or_comment) and then suspend them instead of banishing them.

## Steps to Suspend a User

To suspend a user, you must be logged into a super-admin account and:

1. Navigate to the user's corresponding admin page (`/admin/users/###`). Note: you can appended `/moderate` to the URL of a community member's profile page (e.g. dev.to/username/moderate) to quickly jump to their corresponding admin page.
2. Click the "manage user" button in the top right corner of the page.
3. Scroll down to "User Status" and click the drop-down menu beside "Select new user status".
4. Select "Suspend"

Note: Suspending a user will stop the user from posting new posts and comments. It doesn't delete any of the user's content, just prevents them from creating new content while suspended.
