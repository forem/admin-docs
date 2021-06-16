---
description: A high-level overview of the most important Forem features.
sidebar_position: 0
---

# Suspending Users

Suspending a user will stop the user from posting new posts and comments. It doesn't delete any of the user's content, just prevents them from creating new content while suspended.

Users are not notified of their suspension in the UI, so if you want them to know about this, you must email them.

## Steps to Suspend a User

To suspend a user, you must be logged into a super-admin account and:

1. Navigate to the user's corresponding admin page (`/admin/users/###`). Note: you can appended `/moderate` to the URL of a community member's profile page (e.g. dev.to/username/moderate) to quickly jump to their corresponding admin page.
2. Click the "manage user" button in the top right corner of the page.
3. Scroll down to "User Status" and click the drop-down menu beside "Select new user status".
4. Select "Suspend"

Note: You can also select "Comment Suspend" if you just want to stop the user from leaving comments but would like to allow them to continue to post articles.
