---
sidebar_position: 12
description: Answering some frequently asked questions.
---

# Frequently Asked Questions

:::tip
Still have a question? Head over to [forem.dev](https://forem.dev), our community of Forem Creators and Developers
:::

<details open class="testDetail">

<summary>
Who are these docs for?
</summary>

This documentation is meant to guide folks who have launched and are managing a Forem community.

:::important

NOTE: this guide does not offer development guidance for setting up a Forem. For those who have yet to install the app that are hoping to self-host, please check out our [Forem Selfhost Installation Documentation](https://github.com/forem/selfhost-devel). If you would like to contribute to Forem as a developer, please read our [Forem Developer Documentation](https://docs.forem.com/).

:::

Using these docs, you'll learn:

- how to customize the appearance of your Forem
- how to use moderation tools to keep your community healthy
- how to wield a variety of other features to enhance the experience on your Forem

If you are setting up your Forem for the first time, we recommend reading the Getting Started section first.

If you have joined on with an established Forem as an admin, you may want to skip ahead to the Forem Basics section.

</details>

<details open class="testDetail">

<summary>
How do I set the logo on my Forem?
</summary>

Be sure to fill out the "Favicon URL", "Logo PNG", and "Logo SVG" fields under "Images" available from the `admin/customization/config` page. Due to caching, it may take a few minutes for your changes to appear.

</details>

<details open class="testDetail">

<summary>
How do I change the background image of the onboarding screens?
</summary>

Navigate to `/admin/customization/config` and select "Onboarding" to change out the background image. This will add a nice spruce of personality as new members join your forem.

</details>

<details open class="testDetail">

<summary>
How do I upload an image to get its direct image URL?
</summary>

You can go to /admin/advanced/tools in your Forem Admin page to upload an image.

![](/img/screencapture-localhost-3000-admin-advanced-tools-2021-05-06-12_55_40.png)

Your image URL will look something like this: `dev-to-uploads.s3.amazonaws.com/i/alk5808pwnt3j8sb8th3.png`

</details>

<details open class="testDetail">

<summary>
What data does Forem collect?
</summary>

We collect and aggregate data about how Forem is being used so that we can focus product development efforts where creators and users are finding the most value, facilitate the delivery of the product, measure engagement and resource consumption, and assess the ongoing health of our infrastructure. The data is generally aggregated but may include identifiers such as Forem Cloud instances.

Please find below a current exhaustive list of the endpoints that comprise our telemetry data sources.

---

| **URL endpoint**                | **Description**                    | **Metric**  |
| :------------------------------ | :--------------------------------- | :---------- |
| **/admin/customization/config** | Admin panel configuration settings | Click count |
| **/admin/invitations**          | Admin panel user invitations       | Click count |
| **/admin/content_manager/tags** | Admin panel tag management         | Click count |
| **/admin/apps/welcome**         | Admin panel onboarding             | Click count |

_Last update: 6/17/21_

</details>
