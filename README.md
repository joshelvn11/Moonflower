# Moonflower - Moon Website

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

### 1. Real Time Information Section

This section features current data about the Moon such as it's cycle day, current phase, astrological sign, etc. Currently this is updated manually daily but in future will fetch data in real time from an API.

### 2. Data & Statistics Section

This section is all about constant data about the Moon such as mass, orbit, geology, etc. The different categories of data are broken up and each display in their own accordian widget to decrease the overall room taken up by this area making the information less overwhelming and easier to find what you are looking for.

### 3. History & Timeline Section

This section features majors historical events surrounding the Moon broken down by year. The data is displayed along a vertical timeline arranging events in chronological order, each event having their own title, description and possible images. Each section is collapsable to make the information more compact and allowing the user to expand on each event if they are interested.

### 4. Interesting Info (Facts) Section

This sections features miscelleanous interesting facts / information about the Moon. It displayed in a slide format allowing users to slide through one piece of information at a time, again making information more digestable and not too overwhelming. This format again allows users to optionally engage as engagement happens along a different dimensional axis.

### 5. Quiz Section

The final section is a quiz on the Moon, its history, mythology, and science. The quiz uses HTML forms with a variety of different input types to mix up the question format and make it more engaging.

## Testing

## Deployment

This repo is deployed to two locations: GitHub pages and a Linode instance.

The repo is configured to automatically to deploy GitHub pages using GitHub actions every time commit is pushed to the main branch.

I then also manually deploy the website to my Linode instance running an OpenLiteSpeed webserver using Cyberpanel by copying the files from my local machine to the server via SFTP.

## Credits

### Content

### HTML & CSS

#### Toggle Switches

https://www.w3schools.com/howto/howto_css_switch.asp <br>

### Preloader

### Javascript

#### particle.js

Github repo - https://github.com/VincentGarreau/particles.js <br>
Usage tutorial - https://www.geeksforgeeks.org/how-to-use-particle-js-in-javascript-project/

#### flickity.js

Usage tutorial - https://css-tricks.com/creating-responsive-touch-friendly-carousels-with-flickity/

### Icons

<a href="https://www.flaticon.com/free-icons/full-moon" title="full moon icons">Full moon icons created by vectorsmarket15 - Flaticon</a>

### Images

Moon Image - http://pngfre.com/
