# **Project: Lotto Draw App**

## **Overview**
A modern, framework-less web application for drawing lotto numbers. It provides a clean, responsive interface for users to generate random number sets.

## **Project Outline**
- **Core Features:**
  - Random lotto number generation (6 numbers from 1 to 45).
  - Ability to generate 5 sets of numbers at once.
  - **Social Login System (Google & Kakao).**
- **Design & Style:**
  - Dark-themed UI with a black background.
  - Modern typography and interactive buttons with glow effects.
  - Mobile-responsive layout.
  - **Custom Title: "준서네 로또방" in the header.**
  - **Login menu positioned in the top right.**
- **Technology Stack:**
  - HTML5, CSS3 (Baseline features), Vanilla JavaScript.
  - Web Components for UI consistency.
  - **Firebase Authentication (for Google Login).**
  - **Kakao JavaScript SDK (for Kakao Login).**

## **Current Task: Social Login System Implementation**
- **Plan:**
  1. Add a login button/menu to the top right of the application.
  2. Implement a dropdown or modal for login options (Google, Kakao).
  3. Integrate Firebase Authentication for Google login.
  4. Integrate Kakao JavaScript SDK for Kakao login.
  5. Handle authentication state and display user profile (if logged in).
  6. **Add "준서네 로또방" title to the header.**
- **Steps:**
  - [x] Update `index.html` with login button and modal structure.
  - [x] Add styles for the login menu and social buttons in `style.css`.
  - [x] Initialize Firebase and Kakao SDKs in `main.js`.
  - [x] Implement login/logout logic for both providers.
  - [x] Add "준서네 로또방" header logo and styling.
  - [x] Verify functionality and UI.
