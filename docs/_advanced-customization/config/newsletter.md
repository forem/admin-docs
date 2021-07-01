---
description: How to configure Mailchimp newsletters with your Forem
position: 12
---

# Newsletter

Newsletter settings allow you to integrate your Mailchimp newsletter audience with your Forem community members. Newsletters are sent from your Mailchimp account and are different from your [Forem Email Digests](https://admin.forem.com/docs/_advanced-customization/config/email-digest-frequency). 

It's up to you how often you want to create and send your Mailchimp newsletters. You will create and manage these and their sending frequency entirely in Mailchimp, with the API (settings below) sharing the subscribers list with Mailchimp.

Currently, Forem is only configured for Mailchimp newsletter management. If you'd like to request additional integrations, [find out how to contribute feature requests on forem.dev here](https://admin.forem.com/docs/_community-resources/connect_with_forem_builders).


## Configuring your Forem Newsletters with Mailchimp

If you don't already have [a Mailchimp account, sign up for one](https://login.mailchimp.com/signup/). 

### Mailchimp API Key

Once you've created your account, you'll need to make an API key. To get your API key, follow the [instructions on Mailchimp](https://mailchimp.com/help/about-api-keys/).

![Mailchimp API Key management page](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/mailchimpAPI.png)

![Your API end page should look something like this](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/mailchimp-api-example.png)

Copy and paste **Your API Key** from Mailchimp into the **Mailchimp API Key** field under **Newsletter** in `/admin/customization/config`.

![Paste the API key from Mailchimp into your Forem Config](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/mailchimpAPItoConfig.png)

### Main Newsletter

This is the newsletter you will send to all your Forem members. Mailchimp calls these newsletters **Audiences**. 

If already have an audience set up that you want to use for this Newsletter, skip to Step 2 below. Otherwise, go ahead and create one in Step 1.

![Mailchimp New Audience form](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/mailchimpCreateAudience.png)

1. [Create a New Audience in Mailchimp](https://us12.admin.mailchimp.com/lists/new-list/). Fill out the fields accordingly and save.
2. Once you have an audience you want to use (whether you already had one set up or just created it) Go to the **Settings > Audience name and defaults**
3. On the right hand side, you'll see the **Audience ID**. Copy and paste it into the **Main Newsletter** field in `/admin/config`:

![Enter the Audience ID under Main Newsletter](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/mailchimpMainNewsletterAudienceID.png)

### Sustaining Members Newsletter

This is currently a DEV specific newsletter. 

### Tag Moderators Newsletter

This is currently a DEV specific newsletter.

### Community Moderators Newsletter

This is currently a DEV specific newsletter.

## GDPR Deletion
The way your Forem integrates contact details with Mailchimp requires you to [manually remove users from your Mailchimp audience](https://mailchimp.com/help/delete-contacts/) after you delete them from your Forem.

