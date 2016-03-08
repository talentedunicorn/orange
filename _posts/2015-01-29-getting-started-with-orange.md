---
layout: post
type: blog
title:  "Getting started with Orange"
date:   2015-01-29 14:01:29
snippet: Orange, an open source and free minimal Jekyll theme. It is a product of my attempt at learning Jekyll. This guide will help you get started with the theme’s basic customization and settings.
header_image: http://fakeimg.pl/1000x300/e88f0c/fff?text=A%20Quick%20Guide&font:lobster
header_image_alt: Welcome banner
---

Orange, an open source and free minimal [Jekyll](http://jekyllrb.com){:target="_blank"} theme. It is a product of my attempt at learning Jekyll. This guide will help you get started with the theme's basic customization and settings.

<figure class="image-figure">
	<img src="http://jekyllrb.com/img/logo-2x.png" alt="Jekyll logo">
	<figcaption>Jekyll logo</figcaption>
</figure>

<h2 class="t-underline">Table of contents</h2>
1. [Dependencies](#dependencies)
2. [Installation](#installation)
3. [Configuration](#configuration)
    1. [_config.yml](#configyml)
4. [Updates](#updates)

### 1. Dependencies
* [Ruby](https://www.ruby-lang.org/en/){:target='_blank'} >= 2.0.0
* [Jekyll](http://jekyllrb.com){:target='_blank'} ~ 2.5
* [Grunt](http://gruntjs.com/getting-started){:target='_blank'} *Requires npm & nodejs* <sup><a id="fn-1-ret" href="#fn-1">1</a></sup>

### 2. Installation 
* To install the theme clone the repository
`git clone https://github.com/talentedunicorn/orange.git`
* Copy `config.sample.yml` to `_config.yml`
* Open `_config.yml` and set up the necessary information
* Open your terminal program and inside the folder run `jekyll serve`

### 3. Configuration
Orange comes with a few configuration files each with their own usage

#### 3.1 _config.yml
This is the main configuration file. Edit these sections: 

* __title:__ This appears on your metadata and is part of your title tag
* __description:__ This is part of your metatag, keep it under 150 characters for SEO
* __avatar_path:__ The path to your avatar image
* __url:__ Your hosting url. Change this to your hosting url e.g. *http://[your_name].github.io* OR *http://localhost:4000* when running on localhost
* __Feature settings__
	* __tagManagerID:__ Orange has analytics support through [Google tag manager](http://www.google.com/tagmanager){:target='_blank'}. Add your container id from tag manager here.
	* __disqus_shortname:__ Comment support is through [Disqus](http://disqus.com). Create an account [here](https://disqus.com/admin/signup/?utm_source=New-Site) and add your shortname here. 
	* __formpost:__ A URL where your contact form will post to. If you need a free form post service try [formspree.io](http://formspree.io)

### 4. Updates
Updates to the theme will be available by tracking this repository's master branch. To do so;

* create a new branch e.g. `git branch theme` 
* Add the theme's remote e.g. `git remote add orange git@github.com:talentedunicorn/orange.git`
* Set the branch to track the master branch i.e. `git branch theme --set-upstream-to=orange/master`

<ol class="footnotes">
<li id="fn-1">For development and optimizing images <a href="#fn-1-ret">&#8617;</a></li>
</ol>
