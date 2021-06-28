---
description: How to configure Mailchimp newsletters with your Forem
position: 12
---

# Newsletter

To set these newsletters, you'll first have to [make a Mailchimp account](https://login.mailchimp.com/signup/). Once you've created your account, you'll need to make an API key:

### Mailchimp API Key

To get your API key, follow the[ instructions on Mailchimp.](https://mailchimp.com/help/about-api-keys/) Your end page \([https://us12.admin.mailchimp.com/account/api/](https://us12.admin.mailchimp.com/account/api/)\) should look something like this:

![](/img/mailchimp-api-example.png)

Copy and paste "Your API Key" into the /admin/config field:

![](/img/screen-shot-2020-10-21-at-11.26.22-am (1).png)

### Main Newsletter

This is what DEV uses as their weekly newsletter that gets sent out every Tuesday. You can use this as your weekly newsletter through Mailchimp. Mailchimp calls these newsletters "audiences".

1. First, create an audience in Mailchimp: [https://us12.admin.mailchimp.com/lists/new-list/](https://us12.admin.mailchimp.com/lists/new-list/)
2. Fill out the fields accordingly and save.
3. Go to the "Settings" -&gt; "Audience name and defaults" 
4. On the right hand side, you'll see an Audience ID. Copy that and paste it into the Main Newsletter field in /admin/config:

![](/img/screen-shot-2020-10-21-at-11.26.10-am.png)

### Sustaining Members Newsletter

This is currently a DEV specific newsletter. 

### Tag Moderators Newsletter

This is currently a DEV specific newsletter.

### Community Moderators Newsletter

This is currently a DEV specific newsletter.

