---
description: Configure your user log-in options.
position: 1
---

# Authentication

:::important

NOTE: if you intend to use Twitter or GitHub [liquid tags for embeds in your Forem posts](https://developers.forem.com/frontend/liquid-tags), you will need to configure authentication for these OAuth apps as detailed below - **even if you don't want to use OAuth for log in/sign in** - otherwise these liquid tags will return authentication errors.

:::


## Setting Forem view-access

If you'd like to change whether your Forem can be viewed by everyone or only registered users, be sure to address this in [**User Experience and Brand**](https://admin.forem.com/docs/advanced-customization/config/user-experience-and-brand) before setting your Authentication options.

###  General settings

#### Block email domains

This field allows you to block registration from specified domains using a comma-separated list. It's particularly useful if you've noticed a significant volume of spam users registering with a given domain. Entering "domain.com" blocks the domain and subdomains (e.g. user@domain.com and user@extra.domain.com).

#### Invite Only Mode

Check this option if you'd like your Forem to be private. The only way that people will be able to create an account is if you send them an invite.

### Authentication Methods

At this point, you can choose to enable any/all of:

- Email
- GitHub
- Twitter
- Facebook

### Email and Password

You can configure whether community members can use email/password to register and/or login.'

You can optionally restrict which emails are allowed to join. Useful for internal company forems or college emails, etc. Within this setting you can specify whether you want the list of allowed emails to be publicly visible. \(It is most likely a better experience if the list is visible, but you may want to keep it private for any reason.\) 

You will additionally have the option of enabling Google reCAPTCHA for email/password registration. Refer to the [reCAPTCHA page for more info](/docs/advanced-customization/config/google-recaptcha).

### Generating Keys

Choose which authentication providers users can log in from. We currently offer:

- Twitter
  - [More info here](https://docs.forem.com/backend/auth-twitter/)
  - First, apply for a developer account at [developer.twitter.com](http://developer.twitter.com/) \(the approval process normally takes about a day\)
  - Then, [follow these instructions](https://developer.twitter.com/en/docs/authentication/guides/log-in-with-twitter) to generate the keys.
  - Callback URLs:
    - `https://{forem-url.com}/users/auth`
    - `https://{forem-url.com}/users/auth/twitter`
    - `https://{forem-url.com}/users/auth/twitter/callback`
    - `https://www.{forem-url.com}/users/auth`
    - `https://www.{forem-url.com}/users/auth/twitter`
    - `https://www.{forem-url.com}/users/auth/twitter/callback`
  - Be sure to select the "[request email address from users](https://user-images.githubusercontent.com/22895284/51078803-9a9a2700-16bb-11e9-8f27-dbfe04b52031.png)" option
    - You may need to ensure that your app points to a valid Terms of Service + Privacy page to see this option as available \([details](https://developer.twitter.com/en/docs/apps/app-permissions)\)
- [GitHub OAuth instructions](https://docs.github.com/en/developers/apps/creating-an-oauth-app) (be sure to create an OAuth App rather than a standard GitHub App)
  - [More information here](https://docs.forem.com/backend/auth-github/)
  - Callback URL: `https://{your-forem-url.com}/users/auth/github`
- [Facebook OAuth instructions](https://developers.facebook.com/docs/apps)
  - [More information here](https://docs.forem.com/backend/auth-facebook/)

Apple and Google are coming soon.

In order to use these providers, you need to add their respective keys. You can create keys for these providers by visiting their developer portals, linked above.
