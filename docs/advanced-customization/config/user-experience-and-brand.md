---
description: How to go into "campaign mode" on the homepage.
position: 19
---

# User Experience and Brand

The Forem feed is perhaps _the_ core functionality of the service. It's an adaptation of a concept popularized by other social platforms in the past two decades, and it is something we need to develop with care in a way that empowers individual communities and users.

The core nature of "the feed" is that it needs to evolve and be flexible. We will learn new ideas over time. We need to take into account metrics, but also question the relevance and "goodness" of certain metrics. We want folks finding fulfilling and enriching content, not necessarily addictive content.

However, we are in the fairly naive early days of the feed, so primarily it is a matter of flexibility and experimentation.

### Feed Style

- `basic` is the standard feed, where only the top post in the feed will show its cover image
- `rich` displays the cover image on all posts in the feed

### Feed strategy

- `basic` is the default and recommended feed for most forems
  - More simple and chronological
- `large_forem_experimental` should be reserved for large forem communities
  - Introduces some split testing and optimizations

### Tag Feed Minimum Score

Minimum score needed for a post to show up on default tag page. We recommend keeping this at "0" for most Forems.

### Home Feed Minimum Score

Minimum score needed for a post to show up on the unauthenticated home page. We recommend keeping this at "0" for most Forems.

### Default Font

Select the default font that you'd like to display on your community

### Primary Brand Color Hex

This changes the look of several elements across the Forem, including buttons and links.

### Public

Checking this box will make your Forem public to all visitors. Registration will still be required to take actions such as commenting, reacting to content, publishing articles, etc.

Be **extremely cautious** in changing this, as it can cause substantial issues if you:

- Accidentally take a public forem back to private \(breaking links\)
- Accidentally take a private forem to public \(exposing private information\)
