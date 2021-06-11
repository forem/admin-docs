---
description: A high-level overview of the most important Forem features.
sidebar_position: 0
---

# User Roles

A user's role indicates the level of permissions they have across the site.

To update a user's role, you'll need to:

* Find them via `/admin/users`
* Click the "Manage User" button
* Select their new role\(s) in the drop-down

![This is the page available at /admin/users](https://user-images.githubusercontent.com/16007075/121750769-024a3b80-cadb-11eb-93e8-e7ce7dcd672b.png)

![This is the page to manage users](https://user-images.githubusercontent.com/16007075/121751111-90bebd00-cadb-11eb-9e2e-310acacac4f7.png)

Admins have the ability to remove any role other than the "Super Admin" role from users. Admins do not, however, have the ability to remove roles from themselves. To remove a user's role, you'll need to:

* Find them via `/admin/users`
* Click the "Manage User" button
* Click the "X" button next to the role\(s\) you wish to remove

![This is where admins can remove roles from users other than themselves](https://user-images.githubusercontent.com/16007075/121752322-e2684700-cadd-11eb-87b7-42ae6e2f77b6.png)


## Base Roles

### Comment Suspend

Users with the 'comment suspend' role are users that no longer have the privilege to comment on posts. This role is typically reserved for users who struggle to behave appropriately in the comments section.

### Suspend

Users with the 'suspend' role no longer have the privilege to publish posts or comments across the site. Typically, a user is suspended when they have broken the Code of Conduct or Terms multiple times.

### Regular Member

A regular member is a user in good standing. They have access to all basic privileges \(publishing posts, writing comments, etc\) but they do not have higher access such as community moderation or site administration. 

### Trusted

Users with the 'trusted' role are community moderators. They have access to `/mod` and see a moderate icon on every post.

### Warn

Users with the 'warn' role are users that admins flag to one another because of their previous behavior across the site. These are typically users that have broken the code of conduct previously but are currently suspened. We want to make sure their previous actions are taken into consideration if they break the code of conduct again. 

Users with the 'warn' role have all the same privileges as users with good standing.

Changing a user's status to the warn role does not automatically send an email to the user (though, we do recommend that you consider letting them know they are in a 'warned' state). 

## Special Roles

### Admin

Admins have access to all `/admin` pages on the site but do not have the ability to make site configuration changes (i.e. `admin/customization/config`). We recommend limiting the number of people who have admin permissions and considering single resource admin privileges first.

Admins can unpublish articles by appending `/edit` to the end of an article URL and updating the article manually. 

### Resource Admin

Resource Admins have access to select `/admin` pages. For example,`Resource Admin: Articles` gives access to `/admin/content_manager/articles` only. You can give someone as many Resource Admin roles as you'd like. 

### Super Admin

Super admins have the highest level of permissions across the site, including making changes to `/admin/customization/config`.

