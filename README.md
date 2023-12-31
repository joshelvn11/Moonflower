# Moonflower - Moon Website

![Devices Mockup](https://i.imgur.com/ctCUrG4.png
 "Moonflower - Devices Mockup")

## Overview

Moonflower is a website designed to provide general information, both current and historical, about the Moon to users seeking such information.

Moonflower provides four distinct types of information for users:

1. Current statistical - information regarding realtime statistics about the moon
2. General factual - general (unchanging) factual data about the moon
3. Historial - history and historical events about the moon
4. Interest - miscellaneous and interesting facts about the mooon

In addition to this it also has a final interactive section of a quiz.

The primary audience for the website are students in a field of study relating to the moon and astronomy, hence the more high level reference in the second section. It is intended to be a useful and visually appealing refernce website to routinely access current live data and reference data.

The secondary audience would be students in a highschool level area of study as source of information for project work and potentially just as website to spark interest and curiosity about the moon.

## Accessability & Usability

The Moonflower site has multimedia elements to make user experience more interesting and engaging, including background video and sound. This has the potential to deacrease accessability for some audiences as well as decrease usuability for some as well, in order to prevent and mitigate this the site has options before enterting to enable/disable the background particles and enable/disable the ambient background sounds.

## Design

The design for the website was first created in Figma before starting any development work. The original design file used to start can be found [here.](https://imgur.com/WWjftNk)

## Sections & Features

### Preloader

As I have used a few assets that are bit larger size as well as external assets the website may take slightly longer to load, primarily for users with slower internet connections. In order to inform users the website is working correctly while it loads, so as they do not navigate away while it loads thinking it is broken, I have implemented a preloader to accomplish this.

The preloader is a simple css animation meant to show the Sun, Earth and Moon orbiting each other. The preloader disapears on full page load.

### Navigation Bar & Menu

The navigation bar for the website is located in the top right hand corner of the website and is created to be fixed in position so as to be always accessible to the user. As this is a single page website the links simply navigate the user to appropriate sections of the page. The navigation bar also contains controls for the background audio and background particle (stars) options so they can quickly and easily adjust these in the case they would like to change their orginial choice they made on the welcome screen.

On mobile the navigation bar changes into a hamburger menu icon that, when clicked, launches a fullscreen menu modal. The menu icon, like in the desktop version, stays in a fixed position so as to be always accesible.

![Desktop Navigation](https://i.imgur.com/yoAx4YQ.png "Desktop Navigation")
![Mobile Navigation](https://i.imgur.com/K2UXXwx.png "Mobile Navigation")

### Real Time Information Section

This section features current data about the Moon such as it's cycle day, current phase, astrological sign, etc. Currently this is updated manually daily but in future will fetch data in real time from an API.

This section is positioned first as it the most likely that users would want to access frequently, as it is always changing and the generally the most practically useful info for users.

It is designed using a card layout system where each piece of information is given its own seperate card in order to seperate information and make is easy for users to quickly distinguish between and find relevant pieces of info, as opposed to scanning through a list of table items for example. The design inspiration for this was taken from the weather app for MacOS, although this design style is quie common across many applications.

Creating this card grid layout also allows this layout to work well and be visually pleasing on a mobile layout as all the card simply stack on top of eacher on mobile.

![Real Time Data Mockup](https://i.imgur.com/BB76iNm.png "Real Time Data Mockup")

### Data & Statistics Section

This section is all about constant data about the Moon such as mass, orbit, geology, etc. This section is placed second, as its likely to be the second most visited section being what I would call 'reference' data, i.e data that people in specific fields of study may need to often reference for their work.

The different categories of data are broken up and each display in their own accordian widget to decrease the overall room taken up by this area making the information less overwhelming and easier to find what you are looking for. To view the section you want you can simply click the category title and the panel will open revealing data for that category.

The data inside the accordians is laid out in table format with each line having alternating colours to make it easier to match the title to it's relevant numerical value.

![Stats Mockup](https://i.imgur.com/1VmzUDx.png "Stats Mockup")

### History & Timeline Section

This section features majors historical events surrounding the Moon broken down by year. The data is displayed along a vertical timeline arranging events in chronological order, each event having their own title, description and possible images. Each section is collapsable to make the information more compact and allowing the user to expand on each event if they are interested.

On desktop each event appears on alternating sides of the timeline to make each more visually distinctive, however on mobile, where this is not possible, all the event are located on the same side of the timeline with the actual line itself being push to the end of the screen.

The alternating layout on desktop is created using an nth-of-type CSS function in order to make it very easy to insert new sections anywhere on the timeline and have the correct alternating layout updated automatically across the timeline.

![History Mockup](https://i.imgur.com/hNeL2Ig.png "History Mockup")

### Interesting Info (Facts) Section

This sections features miscelleanous interesting facts / information about the Moon. It displayed in a slide format allowing users to slide through one piece of information at a time, again making information more digestable and not too overwhelming. This format again allows users to optionally engage as engagement happens along a different dimensional axis.

On desktop the slide is navigated through using the arrow buttons on either side of the slider as this is the most common standard for a slide layout. However on mobile, where there isn't enought space to effectively place these buttons the slider is navigated by a touch swiping gesture. As this isn't necessarily obvious a simple lottie animation is displayed just above the slides along with text showing and saying to swipe to scroll through the slides.

![Info Mockup](https://i.imgur.com/EjbRGTy.png "Info Mockup")

### Quiz Section

The final section is a quiz on the Moon, its history, mythology, and science. The quiz uses HTML forms with a variety of different input types to mix up the question format and make it more engaging.

The quiz primary business function is in fact to collecting emails for marketing purposes as users will need to submite their email in order to receive their results, of course opting in to email market is made consentual by a checkbox asking users if they would like to opt in when submitting their answers for the quiz.

In terms of mobile responsiveness in this section the checkbox and radio buttons are laid out horizontally inline on desktop however stack vertically on a mobile layout.

![QuizMockup](https://i.imgur.com/yn7F9Jl.png "Quiz Mockup")

## Features Left To Implement

There three primary features left to implement as they currently fall out of the scope of time and ability for myself to implement, they are:

### Live Data
As mentioned to current live data system is currently designed to be manually updated once daily but in future this data will be pulled from an API and updated upon page refresh.

### Saved Preferences
This refers to the sound and background paricles options. Currently these options are reset on every browser session but in future when a user turns either option on or off this will be saved via means of cookies so the options stay in the same state selected by the user every browser session for the duration of the cookie lifetime.

### Working Quiz

Currently the quiz is submitted to a form dump endpoint but in future this will be sent to a server which will check a users answers and automatically send them their score via email.

## Testing

### Lighthouse Testing

Lighthouse test was conducted with the following results:

![Lighthouse Results](https://i.imgur.com/wXckmJr.png "Lighthouse Results")

### Browser Compatability Testing

The website was tested on Chrome, Firefox and Safari both on mobile and on desktop to ensure all features worked and every was displayed correctly across these browsers.

### Validator Testing

The website was passed through for W3C Validtor for markup validation and the Jigsaw Validator for style validation.

The markup validation returned no erroes.

The CSS styling validator returned with no errors.

### Usability Testing

For actually human usability testing the website was given to a small group of test users of different ages and technical backgrounds to ensure the website was intuitive and easy to use for all audiences. The feedback was positive across all test users confirming the site was intuitive and usable.

## Deployment

This repo is deployed to two locations: GitHub pages and a Linode instance.

The repo is configured to automatically to deploy GitHub pages using GitHub actions every time commit is pushed to the main branch.

The steps to set up this deployment process are as folows: <br>

1. Naviagte to the setting tabs of the GitHub reository.
2. Navigate to the Pages section using the naviagtion panel on the left.
3. Under the Source dropdown make sure 'Deploy from a branch' is selcted.
4. Under 'Branch' select the branch you wish to deploy from, in this case it's 'main'.
5. Click 'Save' and now every time a commit is pushed to this branch on this repo it will be autpomatically deploy to GitHub pages.

GitHub Pages Website - https://joshelvn11.github.io/Moonflower/

I then also manually deploy the website to my Linode instance running an OpenLiteSpeed webserver on Ubuntu using Cyberpanel by copying the files from my local machine to the server via SFTP. The application I am currently using for SFTP transfers is PortX available on the Mac App Store.

Linode Site - https://moonflower.ddns.net/

## Known Bugs

There is currenlty one known active whereby the slide container in the Interesting Information section does not automatically adjust to fit the longest piece of content. Currently it has just been set to use a set height to accomdate all information but this is not an ideal solution as it will need to be constantly changes if longer pieces of information are added.

## Credits

### Content

All the long-form written content was written by ChatGPT by finding relevant info / headlines from the following articles and then asking ChatGPT to expand on them. <br>
https://www.nhm.ac.uk/discover/factfile-the-moon.html <br>
https://www.nationalgeographic.co.uk/space/2019/01/10-amazing-facts-about-the-moon <br>
https://www.space.com/12841-moon-exploration-lunar-mission-timeline.html <br>
https://www.rmg.co.uk/stories/topics/interesting-facts-about-moon <br>

Statistical data comes from the following source:
https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html

### HTML & CSS

#### Toggle Switches

W3Schools Tutorial - https://www.w3schools.com/howto/howto_css_switch.asp <br>

#### Preloader

CSS Portal - https://www.cssportal.com/css-loader-generator/

#### Glassmorphism Styling

Hype4Academy Glassmorphism Generator - https://hype4.academy/tools/glassmorphism-generator

#### Nav Link Hover State Underline Animation

30 Seconds of Code - https://www.30secondsofcode.org/css/s/hover-underline-animation/

### Javascript

#### particle.js

Github repo - https://github.com/VincentGarreau/particles.js <br>
Usage tutorial - https://www.geeksforgeeks.org/how-to-use-particle-js-in-javascript-project/

#### flickity.js

Flickity Site - https://flickity.metafizzy.co/ <br>
Flickity GitHub - https://flickity.metafizzy.co/ <br>
Usage tutorial - https://css-tricks.com/creating-responsive-touch-friendly-carousels-with-flickity/ <br>

### Icons

Favicon Icons, Code & Manifest - https://realfavicongenerator.net/ <br>
<a href="https://www.flaticon.com/free-icons/full-moon" title="full moon icons">Full moon icons created by vectorsmarket15 - Flaticon</a> <br>
Astrology Symbols - https://www.flaticon.com/ <br>
Other Icons -

### Images

Moon Image - https://pngfre.com/moon-png/moon-52/

### Music

Voyager - Johnny Easton (Royalty Free) - https://www.youtube.com/watch?v=HKinw3NqWFQ
