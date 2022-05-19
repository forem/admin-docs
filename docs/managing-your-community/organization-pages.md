# Organization Pages

## Overview

:::important

We're in the middle of some fast-moving changes to the Forem Admin experience, so we've paused documentation updates for the time being. You may find that the docs are now outdated in parts. If you have any questions, please visit [forem.dev](https://forem.dev) to request additional support. We thank you for your patience and hope you're liking the changes!

:::

Organization accounts are a free option for teams, companies, clubs, or anyone else that wants to participate on a Forem as part of an identifiable group.

### Features

- Dedicated Landing Page: organizations have a page to display key information, a list of organization members, and more. Here are a few examples from DEV:

  - [https://dev.to/twilio](https://dev.to/twilio)
  - [https//dev.to/heroku](https://dev.to/heroku)

![Org Page](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/orgDemoHeroku.png)

- Organization Branding on Posts: new posts published under the organization display additional branding in the header and sidebar.

![Org Branding](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/orgBrandingTwilio.png)

- Call-to-Action on Posts: drive readers towards products and services with a call-to-action unit alongside branded posts.

![Optional CTA](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/orgCTAtriplebyte.png)

- Content management: Organization Admins are able to change the author account and publish posts "under the organization"
- Enhanced Analytics: Measure performance by keeping track of view counts, reactions, and CTA clicks on each post.
- Build a Following: As community members follow an organization, they’ll receive notifications of new posts, and organization content will show up more prominently in their feed.

## Creating an organization page

Any user can create a new organization from their [User Organization Settings page](https://admin.forem.com/docs/forem-basics/user-settings/organization-settings). The person who creates the organization will be the main organization admin.

## Invite new members

Organization admins can find the invite token in their [User Organization Settings page](https://admin.forem.com/docs/forem-basics/user-settings/organization-settings) under **Grow the team**.

## Organization roles

There are only two types of roles in an organization: admin & member. Members can join multiple organizations; admins can admin multiple organizations; users can be a combination of members and admins of different organizations.

Organization admins and members can set the canonical_url in the Front Matter of each post. Both admins and members will see an option to enable organization branding at the top of every new post.

If you are the creator of an organization you'll automatically be made an admin. All admins of an organization are able to promote other members of their organization into admin roles. There can be any number of admins per organization. Note that all organization admins have the same abilities. There is no separate organization creator role at the moment.

Organization Admins are able to view analytics for all posts published under the organization on the organization dashboard.

## Changing post author

Organization admins can reattribute an organization post by visiting `/dashboard` and then clicking on the tab for the organization account (located just below **Posts**). Whereas their dashboard previously listed all their individual posts, the organization dashboard will list of all organization posts. Clicking on the `...` will offer additional options, including reattributing posts.

## Deleting an organization

To delete an organization, first make ensure the user is logged in as the admin of the organization they wish to delete. Navigate to their [User Organization Settings page](https://admin.forem.com/docs/forem-basics/user-settings/organization-settings) and scroll down to the bottom of the page where it says **Danger Zone** to delete the organization.
