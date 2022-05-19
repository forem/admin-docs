---
description: >-
  reCAPTCHA is used to prevent spam from hitting your report abuse page. This is
  an optional, but highly recommended protection against spam. More details
  here: https://www.google.com/recaptcha/about/

position: 8
---

# Google reCAPTCHA

:::important

We're in the middle of some fast-moving changes to the Forem Admin experience, so we've paused documentation updates for the time being. You may find that the docs are now outdated in parts. If you have any questions, please visit [forem.dev](https://forem.dev) to request additional support. We thank you for your patience and hope you're liking the changes!

:::

## Creating your reCAPTCHA App

1. First, visit the admin panel to create an app for your Forem: [https://www.google.com/recaptcha/admin/create](https://www.google.com/recaptcha/admin/create)
2. Fill out the appropriate fields:
   1. Label: **Your Forem name \(for ex. My Forem\)**
   2. reCAPTCHA Type: **reCAPTCHA v2**
      1. Choose the default, **"I'm not a robot" Checkbox**
   3. Domains: **your-domain.com**
3. Check the "Accept the Terms of Service" checkbox.

Before submitting, it should look like this:

![](/img/recaptcha-registration-example.png)

![](/img/recaptcha-checkbox-example.png)

Once you've clicked submit, you should see your site and secret keys:

![](/img/recaptcha-submit-example.png)

Please add them to your Forem's config section in the **Email** section of [`Config > Authentication`](/docs/advanced-customization/config/authentication).
