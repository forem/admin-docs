---
description: The primary payment method for your community.
position: 4
---

# Credits

### About Credits

Credits enable users to purchase [classified listings](https://admin.forem.com/docs/advanced-customization/listings) from your site. Listings can be considered a marketplace for the community: users can offer their services, share events, list items for sale, etc.

### Credit Prices

We recommend tiered bulk pricing for credits (i.e. the more credits someone buys, the cheaper each credit becomes).

You can include up to four tiers of credit pricing:

- Small: less than 10 credits
- Medium: 10-99 credits
- Large: 100-999 credits
- Extra Large: 1000 credits or more

To define the price of a single credit, please include the USD cent value of one credit at each tier. Here's an example of our tiers:

- Small: 500 cents per credit
- Medium: 400 cents per credit
- Large: 300 cents per credit
- Extra Large: 250 cents per credit

**In order to sell credits, you will need to have** Stripe API **configured under your Forem's [Monetization settings](https://admin.forem.com/docs/advanced-customization/config/monetization)**. Users can purchase credits from `/credits/purchase` - if Stripe is not configured correctly they will see an error message.

![Error message visible on credits purchase page due to incorrect or incomplete Stripe settings](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/creditsPurchasePage.png)
