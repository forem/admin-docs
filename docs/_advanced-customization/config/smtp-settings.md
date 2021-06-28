---
description: Configure your Forem's SMTP server settings.
position: 16
---

# SMTP Settings

These settings are required for your Forem to send emails. If you wish to send invites (for example, for an invite-only Forem), email digests, activity notifications, you need to specify which email provider will relay those messages for you. When choosing your email host, check that the maximum send limit allows for your Forem to send all the emails it needs to. Some providers, especially free ones, set a cap to minimize spam. If your send limit is too low, emails from your Forem may not be sent, and this may impact the user experience of new or existing members. 

### Address
Address of the remote mail server, e.g. **smtp.gmail.com**

### Port
The port that your mail server runs on, available from your email host. E.g. **25**

### Authentication
If your mail server requires authentication, you need to specify the authentication type here, e.g. **plain**, **login**, or **cram_md5**

### User name
If your mail server requires authentication, copy the username from your server. This might be the username before the **@** sign, or it may be your entire email address. Check with your SMTP host.

### Password
If your mail server requires authentication, copy the password from your server.

### Domain
If you need to specify a HELO domain, you can do it here.

