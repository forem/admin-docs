---
description: A high-level overview of the most important Forem features.
sidebar_position: 0
---

# Quickstart

## Introduction to the Forem Admin Docs

This documentation is meant to guide folks who have launched and are managing a Forem community. 

Using these docs, you'll learn:
* how to customize the appearance of your Forem
* how to use moderation tools to keep your community healthy
* how to wield a variety of other features to enhance the experience on your Forem

:::important

NOTE: this guide does not offer development guidance for setting up a Forem. For those who have yet to install the app that are hoping to self-host, please check out our [Forem Selfhost Installation Documentation](https://hackmd.io/6DljLehNR5OsowmNpD2FnA). If you would like to contribute to Forem as a developer, please read our [Forem Developer Documentation](https://docs.forem.com/).

:::

Below, we'll offer a quick video that walks you through what to do when first accessing your Forem. Underneath this section, we’ll offer a checklist that will walk you through the same information step by step.

## Getting Started with Forem in Under 10 minutes (Video)

Brand new Forem Creators should start off by [watching this quick introduction video](https://www.loom.com/share/4cd18f6e15b94a818a7178a7aab20753).  It covers the basics such as: accessing the admin area, setting a logo, changing colors, publishing a welcome thread, etc.

![https://www.loom.com/share/4cd18f6e15b94a818a7178a7aab20753](/img/screen-shot-2020-12-24-at-3.27.23-pm.png)

Once you’ve completed this video, please follow along with the checklist below.

## Getting Started with Forem Checklist

1. Set up and configure your Forem under `Customization > Config`
2. Create a Welcome Thread (and any other relevant posts…)
3. Update and customize your Forem tags
4. Create pages and sort them in the navigation sidebar
5. Invite people to join your Forem

### 1. Set Up and Configure Your Forem

Upon joining your Forem, you will be given `Super Admin` privileges which will allow you to configure your Forem.

Navigate to your Admin section by appending `/admin` to the homepage URL of your Forem (e.g. dev.to/admin). Next, you’ll need to navigate to `Customization > Config` using the sidebar menu.

Once in config, you will see a list of options for things that you can set up. The most important headings to click into first would be:
* Community Content
* Images
* User Experience and Brand

These three sections will allow you to set up the bulk of your design options, like choosing your logo, primary brand color, community name, etc.

### 2. Create a Welcome Thread

We always recommend that Forem admin set up a “welcome thread” early on. Providing a welcome thread to your users will give community members a gathering point to meet each other, introduce themselves, and ask questions when first logging onto your Forem.

You can set up a welcome thread just once and use it to welcome all folks who join your Forem or you can regularly create new welcome threads to greet new members in batches. It’s up to you!

The "official" Welcome Thread is the latest post published under the #welcome tag by the Site Staff User. You can adjust this Staff User ID in `Admin > Customization > Config > Community Content`.

After you’ve set yourself as the Site Staff User (or logged into the appropriate account) you’re ready to create a welcome thread. Just navigate to the homepage of your Forem and click “Create Post” in the top right-hand corner. Write out the content for your Welcome Thread (for inspiration, here’s what [DEV’s welcome thread](https://dev.to/welcome) looks like) and make sure to publish under the #welcome tag.

Now, if you append `/welcome` to your Forem’s URL, you should navigate straight to the welcome thread.

You can create other articles following this same process, while choosing appropriate tags for each post (avoid using #welcome).

### 3. Update and Customize Your Forem Tags

First off, note that any user on your Forem is able to create a tag simply by including it on their post and saving the article.

That said, as a Forem admin, you can create tags directly from the Admin — just navigate to `Admin > Content Manager > Tags` and click the `Make a Tag` button in the right-hand corner. You’ll be presented with a number of options to customize your tag. Most importantly, checking the “Supported” box will make it so that this tag is recommended to users via predictive text when they are adding tags to their posts.

Once you’ve created a handful of tags, you can pin them to the right-hand side of your homepage by navigating to `Admin > Customization > Config > Tags`. You should see an option to add “Sidebar tags” — these tags will appear in the order which you designate, top-to-bottom.

### 4. Create Pages and Sort Them in the Navigation Sidebar

Navigate to `Admin > Customization > Pages` to create and modify pages. 

Notice that beneath the “Override defaults” section there are a number of pages that come default with Forem. If you modify these pages, they will no longer be updated with newer Forem versions.

You can add pages by clicking “New page” in the top righ-thand corner. This is particularly useful for creating custom pages like an About page, a Contact page, or any number of authoritative pages.

Once you’ve created your pages, go to `Admin > Customization > Navigation Links` to add left-hand sidebar links on your homepage that will help folks discover these pages. Click `Add Navigation Link` and follow the prompts to create your nav links for your pages. Once you’ve created all the nav links, you can edit each one to customize their position in the list.

### 5. Invite People to Join Your Forem
Navigate to `Admin > Config > Authentication` and choose your specific authentication options.

If you want your community to remain private, keep `Invite-only mode` checked. If you choose this option, you’ll need to navigate to `Admin > People` and click the “Invitations” tab near the top of the page. Next, click “New” which should appear as a tab also near the top of the page beside “Invitations”. From here, you’ll be able to invite folks to join your Forem.

If you choose to make your community public via email and other registration options, you’ll be prompted to set up each registration option.

## We’re Just Getting Started

These are just the beginning steps for setting up your Forem. Now that you have the bare essentials, we recommend that you experiment with the site a bit and return to these docs as needed. If you have any questions, please check out our FAQ first, give other sections of this documentation a quick read, and don’t hesitate to post under [#help](https://forem.dev/t/help) on [forem.dev](https://forem.dev/), our meta-Forem for offering support to Forem creators.
