# Marvel

# Marvel Comic Book Library App

## Overview

What is your app? Brief description in a couple of sentences.

The Marvel Comic Book Library App is a digital platform designed to provide comic book enthusiasts with easy access to a vast collection of Marvel comics. It offers an intuitive interface for exploring, discovering, and reading Marvel comics.

### Problem

Why is your app needed? Background information around any pain points or other reasons.

The app addresses the need for a centralized, user-friendly repository for Marvel comics, catering to the evolving digital consumption habits of comic book readers. It aims to enhance the reading experience by providing a comprehensive and easily navigable library of Marvel comics.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

The primary users are comic book enthusiasts, particularly those who are fans of the Marvel universe. They will use the app to search for their favorite Marvel characters and access the comics associated with them. The app must be intuitive, responsive, and inclusive, accommodating a wide range of users from casual readers to avid collectors.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

Functionality:
Search functionality to browse through Marvel's characters and their associated comic books.
Ability to fetch detailed information about comic books featuring specific characters.
User-friendly interface for seamless navigation and reading experience.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

Tech Stack:
Frontend: React.js, SCSS
Backend: Node.js

Some dependicies that I would need to add will be:

"react"
"react-dom"
"axios"
"react-router-dom"

### APIs

List any external sources of data that will be used in your app.

APIs:
Marvel's official API for accessing character and comic book data.

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

Sitemap:
Character Page: Enables users to search for Marvel characters.
Comic Book Page: Displays comic books related to the selected character.

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.
![image](https://github.com/Mlee8812/Marvel/assets/97935821/46bed3eb-c809-4c61-a244-c66c202e2038)


### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out. 

The app will handle data related to Marvel characters and their comic books, including titles, publication dates, authors, and storylines.

![diagram](https://github.com/Mlee8812/Marvel/assets/97935821/ead430e8-f9e3-403c-a077-17146ee5b10f)


### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

GET /characters: Retrieves a list of characters.
GET /comics: Retrieves comics associated with a specific character.

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

No authentication or user profile functionality is currently planned for this version of the app.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

Sprint 1: Develop the homepage with a search box and integrate character data fetching.
Sprint 2: Implement functionality to display a list of characters based on search input.
Sprint 3: Develop feature to show a list of comics associated with a selected character.

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

Future implementation of a user login page.
Addition of animations and interactive elements using JavaScript libraries.
