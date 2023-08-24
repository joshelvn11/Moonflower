# Moonflower - Moon Website

![Devices Mockuo](/assets/misc/Devices%20Mockup.png "Moonflower - Devices Mockuo")

## Overview

Moonflower is website designed to provide general information, both current and historical, about the Moon to users seeking such information.

Moonflower provides four distinct types of information for users:

1. Current statistical - information regarding realtime statistics about the moon
2. General factual - general (unchanging) factual data about the moon
3. Historial - history and historical events about the moon
4. Interest - miscellaneous and interesting facts about the mooon

In addition to this it also has a final interactive section of a quiz.

## Accessability & Usability

The Moonflower site has multimedia elements to make user experience more interesting and engaging, including background video and sound. This has the potential to deacrease accessability for some audiences as well as decrease usuability for some as well, in order to prevent and mitigate this the site has options before enterting to turn it into high-contrast mode (removing background media) and enabling or disabling the ambient background sounds.

## Sections & Features

### Preloader

As I have used a few assets that are bit larger size as well as external assets the website may take slightly longer to load, primarily for users with slower internet connection. In order to inform users the website is working correctly while it loads, so as they do not navigate away while it loads thinking it is broken, I have implemented a preloader to accomplish this.

The preloader is a simple css animation meant to show the Sun, Earth and Moon orbiting each other. The preloader disapears on full page load.

### Navigation Bar & Menu

The navigation bar for the website is located in the top right hand corner of the website and is created to be fixed in position so as to be always accessible to the user. As this is a single page website the links simply navigate the user to appropriate sections of the page. The navigation bar also contains controls for the background audio and background particle (stars) options so they can quickly and easily adjust these in the case they would like to change their orginial choice they made on the welcome screen.

On mobile the navigation bar changes into a hamburger menu icon that, when clicked, launches a fullscreen menu modal. The menu icon, like in the desktop version, stays in a fixed position so as to be always accesible.

![Desktop Navigation](/assets/misc/desktop-nav.png "Desktop Navigation")
![Mobile Navigation](/assets/misc/mobile-menu.png "Mobile Navigation")

### Real Time Information Section

This section features current data about the Moon such as it's cycle day, current phase, astrological sign, etc. Currently this is updated manually daily but in future will fetch data in real time from an API.

This section is positioned first as it the most likely that users would want to access frequently, as it is always changing and the generally the most practically useful info for users.

It is designed using a card layout system where each piece of information is given its own seperate card in order to seperate information and make is easy for users to quickly distinguish between and find relevant pieces of info, as opposed to scanning through a list of table items for example. The design inspiration for this was taken from the weather app for MacOS, although this design style is quie common across many applications.

Creating this card grid layout also allows this layout to work well and be visually pleasing on a mobile layout as all the card simply stack on top of eacher on mobile.

![Real Time Data Mockup](/assets/misc/mockup-real-time-data.png "Real Time Data Mockup")

### Data & Statistics Section

This section is all about constant data about the Moon such as mass, orbit, geology, etc. This section is placed second, as its likely to be the second most visited section being what I would call 'reference' data, i.e data that people in specific fields of study may need to often reference for their work.

The different categories of data are broken up and each display in their own accordian widget to decrease the overall room taken up by this area making the information less overwhelming and easier to find what you are looking for. To view the section you want you can simply click the category title and the panel will open revealing data for that category.

The data inside the accordians is laid out in table format with each line having alternating colours to make it easier to match the title to it's relevant numerical value.

![Stats Mockup](/assets/misc/mockup-stats-data.png "Stats Mockup")

### History & Timeline Section

This section features majors historical events surrounding the Moon broken down by year. The data is displayed along a vertical timeline arranging events in chronological order, each event having their own title, description and possible images. Each section is collapsable to make the information more compact and allowing the user to expand on each event if they are interested.

On desktop each event appears on alternating sides of the timeline to make each more visually distinctive, however on mobile, where this is not possible, all the event are located on the same side of the timeline with the actual line itself being push to the end of the screen.

The alternating layout on desktop is created using an nth-of-type CSS function in order to make it very easy to insert new sections anywhere on the timeline and have the correct alternating layout updated automatically across the timeline.

![History Mockup](/assets/misc/mockup-hostory.png "History Mockup")

### Interesting Info (Facts) Section

This sections features miscelleanous interesting facts / information about the Moon. It displayed in a slide format allowing users to slide through one piece of information at a time, again making information more digestable and not too overwhelming. This format again allows users to optionally engage as engagement happens along a different dimensional axis.

On desktop the slide is navigated through using the arrow buttons on either side of the slider as this is the most common standard for a slide layout. However on mobile, where there isn't enought space to effectively place these buttons the slider is navigated by a touch swiping gesture. As this isn't necessarily obvious a simple lottie animation is displayed just above the slides along with text showing and saying to swipe to scroll through the slides.

![Info Mockup](/assets/misc/mockup-info.png "Info Mockup")

### Quiz Section

The final section is a quiz on the Moon, its history, mythology, and science. The quiz uses HTML forms with a variety of different input types to mix up the question format and make it more engaging.

The quiz primary business function is in fact to collecting emails for marketing purposes as users will need to submite their email in order to receive their results, of course opting in to email market is made consentual by a checkbox asking users if they would like to opt in when submitting their answers for the quiz.

In terms of mobile responsiveness in this section the checkbox and radio buttons are laid out horizontally inline on desktop however stack vertically on a mobile layout.

![QuizMockup](/assets/misc/mockup-quiz.png "Quiz Mockup")

## Testing

### Lighthouse Testing

Lighthouse test was conducted with the following results:

![Lighthouse Results](/assets/misc/lighthouse-results.png "Lighthouse Results")

### Browser Compatability Testing

The website was tested on Chrome, Firefox and Safari both on mobile and on desktop to ensure all features worked and every was displayed correctly across these browsers.

### Validator Testing

The website was passed through for W3C Validtor for markup validation and the Jigsaw Validator for style validation.

The markup validation returned two errors, both are for two instances of the same error regarding a label being used for a hidden form input. This occurs as the input elements for the sound and particle controls have to be visually hidden in order to implement the custom control styles. 

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
