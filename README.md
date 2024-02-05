# Marvel

# Marvel Comic Book Library App

## Overview

The Marvel Comic Book Library App is a digital platform designed to provide comic book enthusiasts with easy access to a vast collection of Marvel comics. It offers an intuitive interface for exploring, discovering, and reading Marvel comics.

### Front-End Functionality

The Marvel Comic Book Library App is a full-stack application that showcases a seamless integration with the Marvel API, utilizing React and advanced JavaScript techniques for efficient state management and data propagation. The frontend is designed with a focus on the dynamic generation of character and comic book listings, where data is adeptly passed as props to components, ensuring a reactive and engaging user experience.

Key frontend routes include:
- **Search**: A robust search feature allowing users to find characters and comics.
- **Character List**: An interactive list displaying Marvel characters.
- **Comic Book List**: A curated selection of comic books where each entry provides a gateway to Marvel's official site for further details.

### Back-End Functionality

The server-side of the Marvel Comic Book Library App is powered by Node.js, with Express as the web application framework and CORS to enable cross-origin resource sharing. This robust setup ensures that the backend is well-structured, secure, and capable of handling complex data flows.

Key Endpoints
- `POST /Character`: Fetches a list of Marvel characters.
- `POST /Character/:id/Comic`: Retrieves the comics associated with a specific character ID.

### Mockups
<img width="1130" alt="Screenshot 2024-02-05 at 3 48 59 PM" src="https://github.com/Mlee8812/marvel-comic-book/assets/97935821/88ebaaa8-0a58-46ca-818f-70523f24caa8">
<img width="1083" alt="Screenshot 2024-02-05 at 3 49 07 PM" src="https://github.com/Mlee8812/marvel-comic-book/assets/97935821/7f95b355-95c4-4e01-a4f7-fa8bb8a3a9ad">
<img width="1064" alt="Screenshot 2024-02-05 at 3 49 13 PM" src="https://github.com/Mlee8812/marvel-comic-book/assets/97935821/b6669108-bea7-493e-a251-a8e45148150c">

### Setup

- Clone Repo
- Install Node.js and npm if not already installed
- Navigate to the backend directory

### Install dependencies 
npm install 

### Start the server 
npm start

### Start the client
- Navigate to the frontend directory

### Install dependencies 
npm install

### Start the client 
npm start

