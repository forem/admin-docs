---
sidebar_position: 2
description: Answering some frequently asked questions.
---

# FAQ

### How do I set the logo on my Forem?

Be sure to fill out all fields on the [Config &gt; Images](../admin/config/images.md) page.  Due to caching, it may take a few minutes for your changes to appear.

### How do I change the background image of the onboarding screens?

Head over to [Config &gt; Onboarding](../admin/config/onboarding.md) to change the background image.  This will add a nice spruce of personality as new members join your forem.

### How do I upload an image to get its direct image URL?

You can go to /admin/advanced/tools in your Forem Admin page to upload an image.

![](/img/screencapture-localhost-3000-admin-advanced-tools-2021-05-06-12_55_40.png)

Your image URL will look something like this: `dev-to-uploads.s3.amazonaws.com/i/alk5808pwnt3j8sb8th3.png`

### If we wanted to create “verified” user profiles, would badges be the best way to achieve that?

Great question. Yes, using “badges” would be the best way to indicate that a user is “verified.” Depending on the precise need, you could also set up an “Organization” and add members into that Org.

A badge would be best for “verified artist,” an organization association would be best for “verified employee at XYZ.”

### Can we create custom user roles? Is it possible to create private tags or tags that only certain user roles can access? I was wondering if it is possible to restrict access to certain areas of the forem.

This is a great request and is on our road-map, but is not currently available.

### Should our community be invite-only until we reach 50-100 users?

It’s oftentimes a good idea to keep the community private and invite-only until you’ve built some momentum. It’s definitely not necessary, and every community is different, but it’s certainly a common and effective tactic.

### Email digest frequency: does a user have to enable this feature in their email notification settings? I noticed for dev.to it was disabled by default. Are the email templates customizable? 

New users will be prompted to opt-in to these Digest emails as part of Onboarding.  They can also always adjust via their preferences in their Settings.  The email templates at this point are not customizable.

