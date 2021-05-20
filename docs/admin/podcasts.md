# Podcasts

### Overview

Your Forem has a built-in player that can support various podcasts. Podcasts are listed on /pod and if a user 'follows' a podcast, they will get an update on their feed when a new episode for that podcast has launched. When a podcast is played on platform, a player will appear at the bottom of the screen and the user is free to browse your Forem as they listen.

### How To Add A Podcast

In order to add a podcast, navigate to /pod and click "suggest a podcast". You will be presented with a form with the following fields:

* I am the owner of this podcast: check if true
* Title: title of the podcast
* Description: brief description of the podcast
* Website URL: website URL of the podcast
* Feed URL: RSS feed of the podcast
* Twitter username: podcast twitter handle
* Slug: \(i.e. mypodcast if you want /mypodcast to be the link\)
* Main color hex:  color theme for your podcast page 
* Image: square image of your podcast album cover
* Pattern image: horizontal image of the banner that appears on your podcast page
* Android URL: listening link for Android
* Itunes URL: Apple podcast link
* Overcast URL: overcast URL
* Soundcloud URL: soundcloud URL

Click 'suggest' to enter the podcast into the system.

Once a podcast is suggested, navigate to /admin/content\_manager/podcasts and take these steps:

* Find your podcast and click the title
* Scroll to the bottom
* Check the checkbox "Reachable"
* Check the checkbox "Published"
* Click "Update Podcast"

Once these steps are taken, you should be able to navigate to your podcast page \(i.e. /mypodcast\) and see all recent podcasts.

{% hint style="info" %}
Anyone can suggest a podcast for your Forem, but it doesn't mean you have to approve it! You are free to curate your podcast offerings however you like.
{% endhint %}

### Fetch Episodes

If you notice that your podcast page isn't populated with the latest podcasts, take these steps:

* Navigate to /admin/podcasts
* Click on your podcast
* Check the 'Force' box
* Set the \# of episodes you'd like to fetch
* Click 'Fetch episodes

### Manage Admins

You can add multiple admins for a podcast. To do so, take these steps:

* Navigate to /admin/content\_manager/podcasts
* Click on your podcast
* Scroll to "Manage Admins"
* Add the User ID \# of the admin you'd like to add.
* Click "Add Admin"

### Edit Podcast

Once a podcast suggestion has been submitted, you can edit details in podcast by visiting /admin/content\_manager/podcasts.   


