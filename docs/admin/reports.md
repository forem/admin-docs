# X Reports

### Overview

The `/admin/moderation/reports` page is an area for admins to monitor activity on the platform and respond to reports of abuse.

### Suspicious Activity

#### Latest Articles

A quick overview of the most recently published articles across your Forem. Hitting toggle will bring you to a few quick links: 

* Article Moderation
* Article Admin
* Author profile page
* Author admin page - basic actions
* Author admin page - destructive actions

### Possible Spam/Abuse Users

This area surfaces potential spam users. We surface these users based on the age of their account, certain words in the user name, etc. Hitting toggle will bring you to a few quick links:

* User admin page - basic actions
* Author admin page - destructive actions

Please keep in mind that these users may not all be spam users. This list is meant to make it easier for admins to identify potential bad actors and to take action early on. 

### Abuse Reports

#### Vomit Reactions

When a trusted user moderates a post, comment, or user with the 'vomit' emoji, these reports are listed here for you to validate or invalidate. 

Vomit emojis have the immediate impact of reducing the visibility of the reported content or user across the platform. Trusted users are instructed to use the 'vomit' moderation tool when content or a user blatantly breaks the code of conduct. 

Hitting toggle will allow you to confirm the vomit report or mark it as invalid. If a report is marked as invalid, the content or user will regain their visibility on the platform. 

#### Manual Reports

This is the place to review all the reports that have come through your Forem's report abuse form. This area lists all the reports in chronological order. You can filter the reports by:

* The Reported URL or The Reporter
* Open, Invalid, or Resolve \(clicking the drop down\)

Here's an example of filtering for all 'open' reports:

![Filter for all &apos;open&apos; reports](/img/image-2020-10-15-at-5.42.44-pm.png)

{% hint style="info" %}
Please ignore the blue tab filters directly under the 'abuse reports' section. These filters are outdated and will not work properly - we are in the process of removing them.
{% endhint %}

In addition to filtering, you can also sort all reports by 'Reporter', 'Reported URL' or 'Creation Date' by clicking one of these links:

![Sort by Reporter, Reported URL, or Creation Date.](/img/image-2020-10-15-at-5.45.10-pm.png)

Each report will display who submitted the report, the URL of the page they are reporting, and their message to the admins. If a user is not logged-in at the time of submitting a report, then the reporter will be marked as anonymous.

In addition to the report, we also display a history of email messages with the reporter and an area to directly email the reporter, offender, and affected. These people are defined as follows:

* Reporter: person who submitted the report
* Offender: person who may have been abusive on the platform
* Affected: person who may have been affected by abuse

Note that when Reporters send in a report they are automatically messaged a standard email thanking them for their report. \([Example](https://share.getcloudapp.com/6quQnZOn)\)  
  
Oftentimes, the Reporter and Affected are the same person but there are many scenarios where the Reporter is a third party witness to the bad behavior.

The email form will pull in the reporter's email \(if applicable\) and provide a canned response for each type of email. You can customize this email however you'd like and click 'send email' when you'd like to send the email to each person.

Whether or not you send an email, you can update the status of this report as either open, resolved, or invalid. You must click 'save status' to update the status.

If you need to add a note about the report for fellow admins, you can do so in the 'Notes' section, just be sure to 'submit note' when you're done.

