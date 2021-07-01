---
description: A summary of User Notification Settings fields
position: 3
---

# Notification Settings

![Users can customize what they are notified about](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/userNotificationsFullpage.png)

## Email notifications
The most common encounter most admins have with this page is to help direct users who wish to reduce their notification volume. Some users may opt into the [Newsletter](https://admin.forem.com/docs/_advanced-customization/config/newsletter) or [Digest](https://admin.forem.com/docs/_advanced-customization/config/email-digest-frequency) during Onboarding, without realizing that these can be frequent emails, and later wish to opt out.

Your Forem needs to have [SMTP settings configured](https://admin.forem.com/docs/_advanced-customization/config/smtp-settings) in order to send digests and other email notifications. 

- **Send me weekly newsletter emails**: This is where users opt in or out of your [Newsletters](https://admin.forem.com/docs/_advanced-customization/config/newsletter). Although they're described as "weekly newsletters" your newsletters may be more or less frequent. You manage this frequency yourself via your newsletter provider.
- **Send me a periodic digest of top posts from my tags**: Digests are sent at [the frequency you specify in your Admin Config](https://admin.forem.com/docs/_advanced-customization/config/email-digest-frequency). 

## Mobile notifications
Currently in beta, additional settings will be rolled out as new notification features are made available.

## General notifications
These are notifications that only appear on the notifications page (accessible when a user is logged in by clicking the 🔔 icon in the top-right corner of the screen or appending `/notifications` to the Forem URL).

## Moderator notifications
Only moderators will see this option. [For more information on **User Roles**, check out this guide](https://admin.forem.com/docs/_forem-basics/user_roles).
