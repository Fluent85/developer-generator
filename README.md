# Developer-generator

The goal of this project was to create a command-line application that dynamically generates a PDF profile from a GitHub username. The application will be invoked with the following command:

```sh
node index.js
```

The user will be prompted for a favorite color, which will be used as the background color for cards.

The PDF will be populated with the following:

* Profile image
* user name
* Links to the following:
  * User location via Google Maps
  * User GitHub profile
  * User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following


## User Story

AS A product manager

I WANT a developer profile generator

SO THAT I can easily prepare reports for stakeholders

## Business Context

When preparing a report for stakeholders, it is important to have up-to-date information about members of the development team. Rather than navigating to each team member's GitHub profile, a command-line application will allow for quick and easy generation of profiles in PDF format.

## Screenshot


<img src="assets/images/github.JPG" alt="github profile image">


## Motivation

Get better at writing code in Javascript and Node.js. 

## Links

https://github.com/Fluent85/developer-generator

https://fluent85.github.io/developer-generator/

## Issues and future development

Currently the application works, but there are some issues with pulling in work info.  I probably will work on design more, at some CSS.  Also figure out the bug with adding working info.

## Technologies Implemented

HTML 5, CSS, Bootstrap, Google Fonts, jQuery, JavaScript   



## Credits

--Richard Tshabalala