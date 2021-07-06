---
description: Configure your Forem's SMTP server settings.
position: 16
---

# SMTP Settings

These settings are required for your Forem to send emails. If you wish to send invites (for example, for an invite-only Forem), email digests, activity notifications, you need to specify which email host will relay those messages for you. When choosing your transactional email service, check that the rate limit (maximum number of emails you can send) allows for your Forem to send all the emails it needs to. Some providers, especially free ones, set a cap to minimize spam. If your rate limit is too low, emails from your Forem may not be sent, and this may impact the user experience of new or existing members. 

In order to configure SMTP for your Forem, you will need to obtain an email service. Some suggested SMTP providers are 
- [Twilio Sendgrid](https://docs.sendgrid.com/for-developers/sending-email/integrating-with-the-smtp-api)
- [SparkPost (EU)](https://developers.sparkpost.com/api/smtp/)
- [Mailgun](https://documentation.mailgun.com/en/latest/user_manual.html#smtp-relay)
You may also have email service bundled with your domain or DNS provider (again, check your rate limits here).

Before you can configure your Forem for SMTP, many SMTP providers require you to set up domain authentication manually. Refer to your SMTP provider's documentation to confirm these steps, e.g. 
- [Sendgrid](https://docs.sendgrid.com/ui/account-and-settings/how-to-set-up-domain-authentication)
- [SparkPost](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#domain-setup)
- [Mailgun's domain verification documentation](https://help.mailgun.com/hc/en-us/articles/360026833053-Domain-Verification-Walkthrough)

### Address
Address of the remote mail server, e.g. **smtp.gmail.com** or **smtp.sendgrid.net**

### Port
The port that your mail server runs on. This could be 25 or 587 for unencrypted/TLS email, or 465 for SSL-encrypted email, so it's best to confirm these settings with your SMTP service provider.

### Authentication
If your mail server requires authentication, you need to specify the authentication type here, e.g. **plain**, **login**, or **cram_md5**

### User name
If your mail server requires authentication, copy the username from your server. This might be the username before the **@** sign, or it may be your entire email address. [For Sendgrid, this is always `api key`](https://docs.sendgrid.com/for-developers/sending-email/upgrade-your-authentication-method-to-api-keys#upgrade-to-api-keys-for-your-smtp-integration). Check with your SMTP host if you are unsure.

### Password
If your mail server requires authentication, copy the password from your server. Sendgrid users will need to generate an API key instead, and [use the full API key as the password.](https://docs.sendgrid.com/for-developers/sending-email/upgrade-your-authentication-method-to-api-keys#upgrade-to-api-keys-for-your-smtp-integration)

### Domain
If you need to specify a HELO domain, you can do it here.

