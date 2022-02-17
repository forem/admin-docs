---
description: Set your community email address and periodic email digest.
position: 6
---

# Emails

### Contact email address

The contact email address is used for any contact links. It will appear on auto-populated support pages, Code of Conduct, Terms of Use, Privacy Policy, and any other locations around the site where users may need to reach out for additional help.


### Periodic email digest

You can set the number of days between email digests a user receives.

Email digests are automated emails sent to **subscribed** users that highlight suggested posts tailored to their interests, based on the [tags they follow, users they follow, and a few other criteria](https://github.com/forem/forem/blob/main/app/services/email_digest_article_collector.rb).

Email digests are separate and distinct from [email newsletters](https://admin.forem.com/docs/advanced-customization/config/newsletter), which are sent and managed from a connected Mailchimp account. **You will need to have [Email Server Settings](http://admin.forem.com/docs/advanced-customization/config/email-server-settings) configured for your Forem in order to send email digests.** Your Forem will need at least 3 new posts per day before Email digests are triggered to send automatically.

Users can opt in or out of these digests at any time from their [Notification Settings](https://admin.forem.com/docs/forem-basics/user-settings/notification-settings) at `/settings/notifications`. They can adjust the content of their digests by following/unfollowing/blocking users and organizations, or [adjusting their tag weightings to reflect their interests](https://admin.forem.com/docs/forem-basics/tags).
