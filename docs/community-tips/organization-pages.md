# X - Organization Pages

## Overview

Organization accounts are a free option for teams, companies, clubs, or anyone else that wants to participate on a Forem as part of an identifiable group.

### Features

- Dedicated Landing Page: organizations have a page to display key information, a list of organization members, and more. Here are a few examples from DEV:

     * [https://dev.to/twilio](https://dev.to/twilio)
     * [https//dev.to/heroku](https://dev.to/heroku)

![Org Page](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/orgDemoHeroku.png)

- Organization Branding on Posts: new posts published under the organization display additional branding in the header and sidebar.

![Org Branding](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/orgBrandingTwilio.png)

- Call-to-Action on Posts: drive readers towards products and services with a call-to-action unit alongside branded posts.

![Optional CTA](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/orgCTAtriplebyte.png)

- Content management: Organization Admins are able to change the author account and publish posts "under the organization"
- Enhanced Analytics: Measure performance by keeping track of view counts, reactions, and CTA clicks on each post.
- Build a Following: As community members follow an organization, they’ll receive notifications of new posts, and organization content will show up more prominently in their feed.

## Creating an organization page

Anyone can create an organization. The person who creates the organization can visit `/settings/organization` (organizations are found under a user's personal settings) and fill out the following fields:

- **Name**: The displayed name of the organization
- **Username**: The organization URL will be the Forem URL `/username`. This is also referred to as the **slug** on other forms.
- **Profile image**: Supports PNG, SVG, JPG
- **Website url**: Include the https://
- **Summary**: Text that will be displayed below the organization name on its landing page
- **Proof**: Asks the user to demonstrate their association with the organization to prevent unauthorized organizations being made in the name of companies or brands or individuals.

## Invite new members 

New members must be signed up to the Forem with an individual account. Organization admins can find the invite token in their organization settings at `/settings/organization` under **Grow the team**. The new member inputs the token on their own `/settings/organization` (if they are already a member of one or more organizations, they will need to select **New Organization** from the drop-down menu at the top of the page in order to input a token code).

## Organization roles

There are only two types of roles in an organization: admin & member. Members can join multiple organizations; admins can admin multiple organizations; users can be a combination of members and admins of different organizations.

Organization admins and members can set the canonical_url in the Front Matter of each post. Both admins and members will see an option to enable organization branding at the top of every new post.

If you are the creator of an organization you'll automatically be made an admin. All admins of an organization are able to promote other members of their organization into admin roles. There can be any number of admins per organization. Note that all organization admins have the same abilities. There is no separate organization creator role at the moment.

Organization Admins are able to view analytics for all posts published under the organization on the organization dashboard.

## Changing post author

Organization admins can reattribute an organization post by visiting `/dashboard` and then clicking on the tab for the organization account (located just below **Posts**). Whereas their dashboard previously listed all their individual posts, the organization dashboard will list of all organization posts. Clicking on the `...` will offer additional options, including reattributing posts. 

## Deleting an organization

A user can delete their organization if they:

- are the only member in the organization
- are an admin of the organization
- the organization has no posts
- and the organization has no credits

To delete an organization, first make ensure the user is logged in as the admin of the organization they wish to delete. Navigate to `/settings/organization` and scroll down to the bottom of the page where it says **Danger Zone** to delete the organization. Due to known caching issues organizations may occasionally take a while to delete.

