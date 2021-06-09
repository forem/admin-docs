---
description: A high-level overview of the most important Forem features.
sidebar_position: 0
---

# HTML Variants

## Overview

HTML Variants are HTML/CSS designs that are included in different areas of the platform. The most popular use of HTML Variants are as banner designs for the homepage banner. HTML Variants are versatile and will change between multiple variants if set for one location.

You can filter variants by:

* Leaderboard (published & approved)
* Mine (variants you have created)
* Admin (all variants, included unpublished and unapproved)
* Article show below article CTA (variants set to appear below each post)
* Badge Landing Page (variants set specifically to appear on `/badge`)
* Campaign (variants set to appear on the homepage banner) 

## Steps to Create a New HTML Variant

To create an HTML variant, navigate to `/admin/customization/html_variants` and click "New HTML Variant".

Fill the form with the following:

* Name: A descriptive name of your HTML Variant \(i.e. GithHub Actions Campaign Banner\)
* Group: Select which area you'd like this variant to appear.
* Target Tag: This is applicable for 'article show below article CTA' variants only. For example, a call-to-action for anything related to a tag that you'd like to appear under posts with that tag.
* HTML: This is where you can include the HTML and CSS of your design. 
  * For campaigns: Please see the code below to reference the proper classes and ids to use to ensure your banner functions appropriately.
* Published: Set published: true when your variant is ready to be used.
* Approved: An admin needs to set approved:true in order for your variant to go live.

The 'fork' button allows you to quickly duplicate an existing HTML Variant to make adjustments to your own version. The 'preview' button gives you a sense of what your variant will look like once it's published and approved.

NOTE: In order to publish your HTML Variant, you must navigate to `/admin/customization/config` and click on "Campaign". You then must enter the name of your HTML Variant into "Campaign hero HTML variant name" and save the update.

## Example HTML Variant

Below is an example of an HTML Variant that results in this banner: 

![Example HTML Variant](https://user-images.githubusercontent.com/16007075/121434737-c339b000-c94b-11eb-90f5-ef95d5edb9cc.png)

```text
<style>
  .campaignmode-hackathon {
    border-radius: 9px;
    background: white;
    margin: 20px auto;
    color: #0D122B;
    max-width: 1440px;
    width: 96%;
    font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    padding-bottom: 30px;
    position: relative;
    border: 2px solid #dfe3e6;
    box-shadow: 2px 2px 2px #dfe3e6;
  }
  
  .campaignmode-hackathon--first {
    width: 50%;
    display: inline-block;
    margin-left: 10%;
  }

  .campaignmode-hackathon--second {
    width: 30%;
    display: inline-block;
  }

  .campaignmode-hackathon img.campaignmode-hackathon--mainimage {
    width: 380px;
    height: 156px;
    max-width: 90%;
    margin-top: 25px;
    margin-left: -25px;
  }

  .campaignmode-hackathon .campaignmode-hackathon--clipart {
    width: 380px;
    vertical-align: -38px;
  }

  .campaignmode-hackathon h1 {
    margin: -5px auto 3px;
    font-size: 50px;
    font-weight: 900;
  }

  .campaignmode-hackathon h2 {
    margin: 20px auto 20px;
  }

  .campaignmode-hackathon h3 {
    margin: 10px 0px 1px;
    font-size: 32px;
    max-width: 90%;
    font-weight: 500;
  }

  .campaignmode-hackathon a {
    background: rgb(59, 73, 223);
    text-decoration: none;
    padding: 12px 25px;
    border-radius: 3px;
    color: #f9f9f9;
    font-size: 34px;
    display: inline-block;
    max-width: 80%;
  }

  .campaignmode-hackathon .closebutton {
    position: absolute;
    right: 18px;
    top: 0px;
    color: #0D122B;
    background: transparent;
    border: 0px;
    font-size: 45px;
    cursor: pointer;text-align: right;padding: 0px;
  }

  @media screen and (max-width: 1200px) {
    .campaignmode-hackathon--clipart {
      width: 80%;
      vertical-align: -18px !important;
    }
  }

  @media screen and (max-width: 800px) {
     .campaignmode-hackathon {
       border-radius: 0px;
       width: 80%;
       font-size: 0.9em;
  }
  
    .campaignmode-hackathon--first {
      width: 90%;
      margin-left: 5%;
    }

    .campaignmode-hackathon img.campaignmode-hackathon--mainimage {
      width: 304px;
      height: 124px;
    }

    .campaignmode-hackathon--second {
      display: none;
    }

    .campaignmode-hackathon a {
      font-size: 25px;
      width: 100%;
    }
    .campaignmode-hackathon h3 {
      font-size: 20px;
    }
  }

</style>

<div class="campaignmode-hackathon">
  <div class="campaignmode-hackathon--first">
    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--bSAG7XjP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/oxwqc6bgjb494hzlauiz.png" class="campaignmode-hackathon--mainimage">
    <h1>
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--a4_6tQ0n--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_420/https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg" style="vertical-align: -2px;width:42px;height:42px;"> Actions Hackathon</h1>
    <h3><span>Cash prizes and more!</span></h3>
    <h2><a href="https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn">Start Building Now</a></h2>
    <button class="closebutton" id="js-hero-banner__x">×</button>
  </div>
  <div class="campaignmode-hackathon--second">
    <img class="campaignmode-hackathon--clipart" src="https://res.cloudinary.com/practicaldev/image/fetch/s--gJgLqhKQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_420/https://dev-to-uploads.s3.amazonaws.com/i/z9y92jq4rn68ssaemohm.png">
  </div>
</div>
```
