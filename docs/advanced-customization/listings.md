---
description: How to manage Forem Listings
sidebar_position: 12
---

# Listings

## Overview
Listings can be considered a marketplace for the community: users can offer their services, share events, list items for sale, etc. Listings are paid for with [credits](https://admin.forem.com/docs/advanced-customization/config/credits), which can be obtained through two main methods: 
- awarded from [Badges](https://admin.forem.com/docs/forem-basics/badges);
- purchased from `/credits/purchase` using Stripe's API (configurable in [Monetization Settings](https://admin.forem.com/docs/advanced-customization/config/monetization)).

## View Listings
Listings can be viewed by appending `/listings` to a Forem URL, although some Forems choose to add a [Navigation Link](https://admin.forem.com/docs/advanced-customization/navigation-links) to their sidebar specifically to aid users to find and use Listings.

### Create Listings
Any registered user can create a new listing by navigating to `/listings/new`. They will need to have the required [credits](https://admin.forem.com/docs/advanced-customization/config/credits) to submit their listing (although they can save the draft even without having sufficient credits to publish).

![Create a new listing](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/listingsCreateNew.png)

- **Title**: The displayed title of the listing. 128 characters max, plain text.
- **Body Markdown**: Although there are no images allowed in listings, markdown is encouraged. The listings body can contain 400 characters max, 12 line break max.
- **Category**: A drop-down menu offering available categories and their credits cost.
- **Category details/rules**: Expandable/collapsible list of all categories and their rules.
- **Tags**: Users can add up to 8 tags to support listing searchability.
- **Custom Expire Date**: If applicable for time sensitive events, deadlines, etc. If not specified, the listing will expire 30 days from the posting date.
- **Post under an organization**: Posting on behalf of an organization spends organization credits rather than credits from the individual who creates the listing.
- ** Location**: 32 characters max, plain text

![Create a new listing with expanded category details](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/listingsCreateNewExpandCategories.png)

### Listings Dashboard for Users
Each user has a personal Listings Dashboard on a Forem, accessed by adding `/listings/dashboard` to the Forem URL:

![Individual Listings Dashboard](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/listingsDashboardNoOrg.png)

If a user is a member of an organization as well, they will see a separate listings dashboard for their individual and organization accounts:

![Organization Listings Dashboard](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/listingsDashboardOrg.png)

If a user has created any listings in the past, they will be saved in their Listings Dashboard in a feed format. Draft, published, and expired listings are all visible here:

![DEV Team Listings Dashboard showing active, draft, and expired listings](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/listingsDashboardExpired.png)

Users are able to make changes to all fields of a draft from the Listings Dashboard. Users are also able to make changes to all fields of a published listing within 24 hours of submitting it by navigating to their Listings Dashboard. After 24 hours, only Forem Admins can make changes, and only to limited fields.

Listings expire 30 days after they are published or "bumped". 

![Bumping a listing from the Listings Dashboard](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/listingsBump.png)

Bumping a listing relists the same listing for the full 30 days and resets the 24-hour window for making edits. A bump costs the full credit value of the original listing.

### Managing user Listings
Sometimes it might be necessary for a Forem Admin to make changes to a listing. To recategorize/unpublish a specific Listing, append `/moderate` to the listing URL, e.g `dev.to/listings/events/name-of-listing/moderate` 

The **Listings overview** page allows for searching by keyword and/or filtering by category, with the option to limit the search to only published listings or to include unpublished listings. It can be found in your **Admin Portal** under **Apps > Listings** or by navigating to `/admin/apps/listings`

## Listings Categories

### View Listings Categories
To view or modify **Listings Categories**, either click on **Listings Categories** at the top-right of the **Listings** page, or navigate to `/admin/apps/listings/categories`

- **ID**: This is automatically assigned by the Forem	
- **Name**:	Category title
- **Cost**: Amount it costs in credits to post a listing in this category **It does not cost users credits to save a draft listing.**
- **Rules**: Listings in this category should meet this description.
- **Slug**:	Short address to category, e.g. `/listings/slug`
- **Color**: The social preview color in hexadecimal
- **Decription**: A note for admins about this category.

### Modify Listings Categories
To add a listing category, click on **Make a Listing Category** in the top-right corner of `/admin/apps/listings/categories` or navigate to `/admin/apps/listings/categories/new`. To modify a category, click on **Edit** beside the category in the list, or click on the category ID.

The **Make a new Listing Category** and **Edit Listing Category** share the same fields:

![Create a new listings category](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/listingsNewCategory.png)

- **Name**: Displayed on the right-hand sidebar of the Listings page of the Forem, and the title of the category that appears in the drop-down menu on the **Create a new listing** form.
- **Cost**: Shown beside the listing category name in the drop-down menue on the **Create a new listing** form. Choose any amount in full credits, either using the up/down arrows or entering a numerical value without decimal points.
- **Rules**: A short, accurate description of the requirements for the category. Displayed in a expandable list on the **Create a new listing** form.
- **Slug**: The page for this category e.g. `/listings/slug`
- **Social preview color**: Used for the listings text whenever a listing gets shared on social. Displayed on a white background.
- **Description**: Provides space to give more information about this category. Only visible by Admins from `/admin/apps/listings/categories`

