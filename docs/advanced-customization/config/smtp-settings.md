---
description: Configure your Forem's SMTP server settings.
position: 16
---

# SMTP Settings

:::important

NOTE: Once you submit your SMTP settings for your Forem, all users will be automatically logged out and required to confirm their email addresses to be able to log in again. Only the First User won't have to do this. **Please ensure that your [First User](https://admin.forem.com/docs/getting-started/first-user-registration) is still a [Super Admin](https://admin.forem.com/docs/forem-basics/user-roles) and that you still have [access to that account](https://admin.forem.com/docs/forem-basics/user-settings/account-settings) before proceeding with these settings. Without this, you may possibly lose access to your Forem if the SMTP settings configuration fails.**

::: 

These settings are required for your Forem to send emails. If you wish to send invites (for example, for an invite-only Forem), email digests, activity notifications, you need to specify which email host will relay those messages for you. 

## Choosing a SMTP provider

When choosing your transactional email service, check that the rate limit (maximum number of emails you can send) allows for your Forem to send all the emails it needs to. Some providers, especially free ones, set a cap to minimize spam. If your rate limit is too low, emails from your Forem may not be sent, and this may impact the user experience of new or existing members.

In order to configure SMTP for your Forem, you will need to obtain an email service. Some suggested SMTP providers are

- [Twilio Sendgrid](https://docs.sendgrid.com/for-developers/sending-email/integrating-with-the-smtp-api)
- [SparkPost (EU)](https://developers.sparkpost.com/api/smtp/)
- [Mailgun](https://documentation.mailgun.com/en/latest/user_manual.html#smtp-relay)

You may also have email service bundled with your domain or DNS provider (again, check your rate limits here).

Before you can configure your Forem for SMTP, many SMTP providers require you to set up domain authentication manually. Refer to your SMTP provider's documentation to confirm these steps, e.g.

- [Sendgrid](https://docs.sendgrid.com/ui/account-and-settings/how-to-set-up-domain-authentication)
- [SparkPost](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#domain-setup)
- [Mailgun's domain verification documentation](https://help.mailgun.com/hc/en-us/articles/360026833053-Domain-Verification-Walkthrough)

## SMTP Settings

Expand your **SMTP Settings** under `/admin/customization/config` 

**Remember: submitting these settings will lock out all users who haven't confirmed their email address (by requesting an email confirmation at the log in screen, which will be sent to the email address they supplied at registration). Ensure you have full access to your First User (user ID 1) complete with Super Admin permissions before proceeding.**

### Address

Address of the remote mail server, e.g. **smtp.gmail.com** or **smtp.sendgrid.net**

### Port

The port that your mail server runs on. This could be 25 or 587 for unencrypted/TLS email, or 465 for SSL-encrypted email, so it's best to confirm these settings with your SMTP service provider.

### Authentication

If your mail server specifies authentication type, you will need to make sure that this field reflects this. The default is usually "login" (which will send password Base64 encoded), with other options being "plain" (will send the password in the clear) or "cram_md5" (combines a Challenge/Response mechanism to exchange information and a cryptographic Message Digest 5 algorithm to hash important information).

### User name

Username specified for your SMTP service (not always the username for accessing your account). This varies from provider to provider. For some, this may be the username before the **@** sign, or it may be your entire email address. [For Sendgrid, this is always "apikey"](https://docs.sendgrid.com/for-developers/sending-email/upgrade-your-authentication-method-to-api-keys#upgrade-to-api-keys-for-your-smtp-integration). Check with your SMTP host if you are unsure.

### Password

Password specified for your SMTP service (not always the password for accessing your account). Sendgrid users will need to generate an API key instead, and [use the full API key as the password](https://docs.sendgrid.com/for-developers/sending-email/upgrade-your-authentication-method-to-api-keys#upgrade-to-api-keys-for-your-smtp-integration). [Sendinblue users will need to request an SMTP password from Support before being able to use SMTP](https://help.sendinblue.com/hc/en-us/articles/209463245).

### Domain

If you need to specify a HELO domain, you can do it here. If not, leave this field blank.
