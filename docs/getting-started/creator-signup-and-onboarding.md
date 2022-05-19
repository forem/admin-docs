---
description: A high-level overview of the most important Forem features.
sidebar_position: 0
---

# Creator Signup and Onboarding

:::important

We're in the middle of some fast-moving changes to the Forem Admin experience, so we've paused documentation updates for the time being. You may find that the docs are now outdated in parts. If you have any questions, please visit [forem.dev](https://forem.dev) to request additional support. We thank you for your patience and hope you're liking the changes!

:::

When you first install your Forem, you will be invited to sign up and set up your Creator account. **Until you create your Creator account, the sign-up page will be accessible to anyone visiting your Forem’s URL.** It is important to complete this registration immediately upon spinning up your Forem because the Creator will be given [**Super Admin** privileges](https://admin.forem.com/docs/forem-basics/user-roles#super-admin) which will allow them to configure your Forem.

## Creator Signup

You will need to complete the signup process before being able to customize your Forem via the Creator Settings page.

![Screenshot of Creator Signup page](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/creatorSignupPage.png)

### Required Form Fields

**Name and Username:** We ask that you provide your name, which we use to generate a username for you. Should you wish to change your username, you’ll be able to edit it inline by clicking the pencil icon next to your proposed username.

**Email:** We request your email as a unique identifier and for future communication, like to receive the Creator newsletter as well as to receive community support.

**Password:** Your password must be a minimum of 8 characters. You can view your password in plain text by toggling the eye icon on the password field.

After submitting the completed form, you will be asked to verify your email address. It is important to note that you will not be able to proceed through the rest of the onboarding process until you have done so.

![Screenshot of Email Confirmation page](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/creatorEmailConfirmation.png)

Once logged in, you will be immediately redirected to the Creator Settings page, where you can customize your Forem.

## Creator Settings Page (Creator Onboarding)

Creators are provided with a personalized onboarding flow, which we refer to as the “Creator Settings Page.” Here, as a creator, you are able to personalize your Forem by setting your community name, uploading a logo, selecting a brand color for your Forem, and much more.

![Screenshot of Creator Settings page](https://raw.githubusercontent.com/forem/admin-docs/main/static/img/creatorSettingsPage.png)

### Required Form Fields

**Community Name:** This will be used to identify your community. Your [community name](https://admin.forem.com/docs/advanced-customization/config/community-content#community-name) will appear in places like the Code of Conduct, the Terms of Service, your Privacy Policy, and on page titles, for example.

**Logo:** The logo that is uploaded will appear in the left top navbar of your Forem. We accept the following logo types upon upload: PNG, JPG, and JPEG. Logos should not be more than 3 MB in size and should not be greater than 4096x4096px in dimensions for it to upload successfully.

**Brand Color:** The [brand color](https://admin.forem.com/docs/advanced-customization/config/user-experience-and-brand#primary-brand-color-hex) field allows you to customize the brand colors that will be used across your Forem. The brand color chosen will be reflected in the color of the buttons, focused inputs, borders, selected radio buttons and more.

You have an option to specify a brand color as a HEX color or to use the color picker to select a color. Once the color is selected, it will update the theming of the Creator Settings Page, providing you with a preview of what your Forem’s brand color will look like.

For accessibility purposes, we validate the color that is selected. Since the default theme for a new Forem is a light theme, we validate for a high contrast color. Hence, you may be asked to choose a darker color during this step.

**Who can join this community?:** By default, everyone can join a community but we provide you with the option to make it an [invite-only Forem](https://admin.forem.com/docs/advanced-customization/config/authentication#invite-only-mode).

**Who can view the content?:** By default, [everyone can view the content of the Forem](https://admin.forem.com/docs/advanced-customization/config/user-experience-and-brand#public), however, we provide you with the opportunity to restrict the content to members of your community only.

**Terms and Conditions and Code of Conduct:** We require that you accept Forem’s legal terms and code of conduct before finalizing the onboarding process.

Once you have completed your onboarding, you will be redirected to your Forem’s home page! Please note that you will be unable to navigate back to the Creator Onboarding pages once you have completed the onboarding process. However, these fields can be changed at a later stage from the **Admin Configuration Page** (`/admin/customization/config`).
