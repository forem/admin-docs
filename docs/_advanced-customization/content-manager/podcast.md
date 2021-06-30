---
description: Adding and approving podcasts
position: 0
---

# Podcasts

### Overview

Every Forem comes configured to stream podcasts from a variety of feed sources. Available podcasts are listed on `/pod`. If a user follows a podcast, they will see an item in their feed that updates when new episodes are published. 

![New podcast episodes appearing in a user's feed](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/podcastEpisodesInFeed.png)

When a podcast is played on platform, a player will appear at the bottom of the screen and the user is free to browse your Forem as they listen.

![Podcast player at the bottom of the browser window while a user browses the Forem](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/podcastBrowserPlayer.png)

### How To Add A Podcast

In order to add a podcast, navigate to `/pod` and click **Suggest a Podcast** at the end of the list of available podcasts (depending on how many podcast your Forem hosts, you may need to scroll), or navigate directly to `/podcasts`. 

![Suggest a Podcast appears at the end of the list of available podcasts](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/podcastSuggest.png)

The **Suggest a Podcast** form contains the following fields:

* **I am the owner of this podcast:** check this box to confirm ownership of (and the right to publish) this podcast
* **Title:** title of the podcast, written as it should be displayed (required)
* **Description:** brief description of the podcast that appears beneath the title on the podcast's homepage
* **Website URL:** website URL of the podcast, if applicable
* **Feed URL:** RSS feed address of the podcast (required)
* **Twitter username:** podcast Twitter handle, if applicable
* **Slug:** the address of the podcast's homepage on your Forem i.e. **mypodcast** if you want `/mypodcast` to be the podcast homepage. This can't be an address that already exists (e.g. a username or organization name that is already in use) and we recommend lower case only as there have been issues with UPPER CASE characters in the past. (required)
* **Main color hex:**  color theme for your podcast page 
* **Image:** square image of your podcast album cover (required)
* **Pattern image:** horizontal image of the banner that appears on your podcast page (this is not required, but certain colour combinations of Main color hex will render the podcast title text unreadable, so we recommend uploading a suitably contrasting **Pattern image**)
* **Android URL:** listening link for Android
* **Itunes URL:** Apple podcast link
* **Overcast URL:** Overcast URL
* **Soundcloud URL:** Soundcloud URL

![Suggest a Podcast form](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/podcastSuggestionForm.png)

Click 'Suggest' to submit the podcast for consideration.

Once a podcast is suggested, navigate to `/admin/content_manager/podcasts` to approve and publish it:

* Find your podcast and click the title
* Scroll to the bottom
* Check the checkbox **Podcast is reachable**
* Check the checkbox **Published**
* Click **Update Podcast**

![Podcast is Reachable + Published](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/podcastPublish.png)

You should be able to navigate to your podcast page \(e.g. `/mypodcast`\) and see all recent podcasts.

{% hint style="info" %}
Anyone can suggest a podcast for your Forem, but it doesn't mean you have to approve it! You are free to curate your podcast offerings however you like.
{% endhint %}

### Fetch Episodes

If you notice that your podcast page isn't populated with the latest podcasts, take these steps:

* Navigate to `/admin/content_manager/podcasts`
* Click on your podcast
* Check the **Force** box
* Set the \# of episodes you'd like to fetch
* Click **Fetch episodes**

![Force fetch podcast episodes](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/podcastFetch.png)

### Manage Admins

You can add multiple admins for a podcast. To do so, take these steps:

* Navigate to `/admin/content_manager/podcasts`
* Click on your podcast
* Scroll to **Manage Admins**
* Add the User ID \# of the admin you'd like to add.
* Click **Add Admin**

### Edit Podcast

Once a podcast suggestion has been submitted, you can edit details in podcast by visiting `/admin/content_manager/podcasts`.   

### Upload a Pattern Image

In the even that the podcast title is unreadable, due to color selection, upload a contrasting background to act as the header image:

![Upload a Pattern Image](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/podcastBackgroundImage.png)


