---
description: A summary of User Organization Settings fields
sidebar_position: 4
---

# Organization Settings

This is a guide to the User Organization Settings, because organizations are created and managed under individual user account settings. The [Organization Pages documentation](https://admin.forem.com/docs/_managing-your-community/organization_pages) covers additional settings and configuration for Forem Admins.

If a user already has an organization configured, this page will display information about an existing organization by default.

## Organization members

### Grow the team

Organization admins can find or refresh the invite token to invite new members here. The new member inputs the token on their own `/settings/organization` (if they are already a member of one or more organizations, they will need to select **New Organization** from the drop-down menu at the top of the page in order to input a token code). New members must be signed up to the Forem with an individual account in order to join an organization.

## Organization details

Update all the organization information that was submitted at the creation of the organization, as well as additional information such as size, back story, and contact email.

### Call-to-action box

As a bonus feature, organizations can enable CTA boxes that appear in the sidebar on posts published under their banner to drive readers towards products and services.

![Optional CTA](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/orgCTAtriplebyte.png)

## Danger Zone

### Delete Organization

A user can delete their organization if they:

- are the only member in the organization
- are an admin of the organization
- the organization has no posts
- and the organization has no credits

To delete an organization, ensure the organization they want to delete is selected in the drop down menu at the top of the page and all the criteria are met. Due to known caching issues organizations may occasionally take a while to delete.

## New Organization Settings

In order to join an existing organization they are not a member of, or to create a new organization, users need to select **New Organization** from the drop down menu that appears in place of their username at the top of the page.

![If a user doesn't have any existing organizations, they don't see a menu at the top of their screen](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/userOrgNew.png)

![If a user has an organization already set up, they need to select New Organization from the menu at the top of their screen](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/userOrgAlt.png)

## Join An Organization

In order to join an existing organization that they are not already a member or admin for, users can enter the [secret code provided to them by an org admin](https://admin.forem.com/docs/_managing-your-community/organization_pages)

## Create An Organization

Anyone can create an organization by filling out the following fields:

- **Name**: The displayed name of the organization
- **Username**: The organization URL will be the Forem URL `/username`. This is also referred to as the **slug** on other forms.
- **Profile image**: Supports PNG, SVG, JPG
- **Website url**: Include the https://
- **Summary**: Text that will be displayed below the organization name on its landing page
- **Proof**: Asks the user to demonstrate their association with the organization to prevent unauthorized organizations being made in the name of companies or brands or individuals.

**The person who creates the organization will be the main organization admin. Organizations can have as many admins as they have members. Forems don't currently have distinctions between organization founders or members, only between admins and members.**

For more information about organizations for Forem Admins, see [the Organization Pages documentation](#).
