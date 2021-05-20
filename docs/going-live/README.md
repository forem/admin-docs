---
description: Last-mile guidance on launching your Forem.
---

# Going Live

Guidance on launching your Forem 🚀

### Double-check your registration options and private/public settings

* [Be sure to review the Authentication settings in Config](../admin/config/authentication.md) to ensure that your Forem is configured properly.
* Is the community invite-only?  Fully public?  Make sure to configure your community properly under [Brand and UX](../admin/config/user-experience-and-brand.md#public).

### Setting a Custom Domain

You likely have a `forem.cloud` subdomain, but it's highly likely that you'll want to set a custom domain before you officially launch your Forem.

[Please refer to the CNAME documentation for full instructions](cname.md).

### Contact Support

_Currently_, you'll need to contact the Forem Support to have your community go live on its custom domain.  Please contact us at [team@forem.com](mailto:team@forem.com) \(or send us a Slack Message if you have Priority Support\) when you're ready to make the domain switch.

### Post Launch Checklist

* [ ] Update URLs in [relevant OAuth apps](../admin/config/authentication.md#generating-keys) to reflect the production domain 
* [ ] You will likely need to update the URL of your [navigation links](../admin/navigation-links.md)



