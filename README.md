# Shortly URL Shortening API Project

This project is a fully responsive, interactive URL shortening application built using HTML, CSS, and JavaScript. It integrates with the Bitly URL Shortening API to generate shortened URLs dynamically and includes persistent storage using the browser's localStorage. The design is based on Figma files provided by Frontend Mentor.

---

## Live Demo
https://kaniyakm.github.io/project1-url-short-api/

---

## Project Overview

This application allows users to:
- Shorten any valid URL using the Bitly API  
- View shortened URLs as dynamic link cards  
- Copy shortened URLs to the clipboard  
- Preserve generated links using localStorage  
- Navigate on mobile devices using a hamburger menu  
- Experience a fully responsive interface across desktop, tablet, and mobile  
- View a user interface built directly from Figma designs  

---

## Features

### URL Shortening (Bitly API)
Users can input any valid URL and receive a shortened version generated through the Bitly API. Error handling is included to display meaningful messages for invalid requests.

### Copy to Clipboard
Each link card includes a button that copies the shortened URL. The button provides immediate visual feedback.

### Persistent Storage
Shortened URLs are saved in localStorage so the user's history is maintained across sessions.

### Responsive Design
The interface is fully responsive and optimized for multiple screen sizes. A mobile-only navigation menu is available for smaller devices.

### Code and UI Structure
The project is structured into semantic HTML, modular CSS, and organized JavaScript, following best practices for readability and maintainability.

---

## Technologies Used

- HTML5  
- CSS3 (Flexbox, Grid, Responsive Layouts)  
- JavaScript (ES6+)  
- Bitly URL Shortening API  
- Figma (UI Reference)  
- Git and GitHub  

---

## How It Works (Process Flow)

1.  User enters URL

2.  JavaScript validates input

3.  A POST request is sent to Bitly API

4. Shortened link is returned and displayed

5. Link is saved to localStorage

6. Cards are re-rendered when page loads

7. Copy button uses Clipboard API

## Project Reflection
Developing the Shortly URL Shortener application allowed me to apply multiple front-end development skills in a unified, real-world workflow. I began by examining the Figma design and breaking the UI into logical sections—navigation, hero, form box, statistics cards, and footer. This helped me translate the design into clean HTML structure and a scalable CSS system with reusable variables and responsive breakpoints.

One of the main challenges I faced was integrating the Bitly API. My early attempts returned errors because the request headers and payload needed very specific formatting. To solve this, I carefully reviewed the API documentation, debugged responses in the console, and applied async/await to simplify the logic. Once the connection stabilized, I implemented dynamic rendering so each shortened link appeared instantly in the UI.

Another challenge was ensuring a smooth mobile experience. Creating a fully functional hamburger menu required reorganizing the navigation for mobile-first behavior, adding toggle interactions, and merging desktop and mobile CSS cleanly. This significantly improved usability.

Successfully implementing persistent data storage through localStorage was a highlight. It allowed the app to remember previously shortened links, which made the experience feel more polished and user-friendly.

If I were to continue improving this project, I would add animations, a dark mode toggle, user accounts with dashboards, and deeper analytics by expanding Bitly API endpoints. Overall, this project strengthened my understanding of API-driven applications, responsive design, and production-quality front-end development.