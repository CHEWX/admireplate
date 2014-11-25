# Admireplate - Boilerplate

This is a MAMP specific boilerplate but can be adapted to your own needs.

## Features
* Uses SCSS partials to help structure the CSS.
* Uses Compass to take advantage of CSS3 mixins so you don't have to worry about browser prefixes (-webkit- etc.).
* Grunt to take care of watching SASS, JS and minification.
* Uses Font-Awesome icon fonts for icons.
* Uses Normalize to reset browser styles.

### Install Ruby
Admireplate uses SASS, Compass and Grunt, which rely on Ruby and NodeJS.

### Install the compass gem
Open up terminal (or command line) and install compass .
```
$ gem update --system
$ gem install compass
```

## Grunt

Grunt will do the watching and production part of your website.

### To use for sass watch

Open up terminal (or command line)
```
npm install
```
Then use 'grunt' in the command line to run the watch task in compass.

Once you are ready to push live use 'grunt deploy' in the command line to run concatination and minification.

## CSS

# Base
* `_animations.scss` Put your CSS3 animations here.
* `_mixins.scss` Reusable SASS mixins e.g. clearfix.
* `_print.scss` Basic print stylesheets to make your pages look better when printed.
* `_reset.scss` This is normalize.
* `_type.scss` Basic styling for your typography.
* `_varibles.scss` Put all your variables in here e.g. colors, padding, border radius - this helps with consistency across your project.

# Layout
* `_grid.scss` Place your grid here depending on project.
* `_ie.scss` Any styles that you need to add in order for Internet Explorer to work.
* `_layout.scss` This is where your main styles go. I typically have header, footer, logo classes here.
* `_shame.scss` Keep this to hand for any quick and dirty CSS you need to add but plan to tidy later.
* `_site.scss` Any site specific styles - keep this to smaller parts, anything that doesn't warrent it's own Ui file.

#Modules
* `_elements.scss` All re-usable styles in here to keep to OOCSS - Remember DRY.
* `_forms.scss` Some basic form styles.
* `_helper.scss` Helper classes.
* `_icons.scss` This is Font Awesome's CSS stylesheet.
* `_links.scss` Styles for any text links and/or buttons.
* `_notifications.scss` Alerts to notify or give feedback to the user
* `_tables.scss` Styles for tables.

#Ui
* `slideshow.scss` All Ui specific styles go here in their own file. E.G - Slideshow

* `main.scss` This brings all the partials together.

## JavaScript ##
* I've included some basic Javascript including the latest jQuery and the document ready function. You only need to edit /assets/js/src/global.js for your site styles. You would then put any plugins with-in /assets/js/libs.

While dev'ing locally on MAMP, you will need to add you plugins directly into the footer. Once running Grunt this will concat into one main.min.js file, but this is for go live only.

## Fonts ##
* Included font awesome for icons

## Further Documentation ##
* <a href="http://compass-style.org/">Compass Framework</a>
* <a href="http://gruntjs.com/">Grunt</a>
* <a href="http://sass-lang.com/">SASS</a>
* <a href="http://necolas.github.com/normalize.css/">normalize.css</a>
* <a href="http://fontawesome.io/">Font Awesome</a>

## Credit

Admireplate was originally based on Motherplate written by Lee Munroe.
