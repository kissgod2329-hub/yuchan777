# **Project: Lotto Draw App**

## **Overview**
A modern, framework-less web application for drawing lotto numbers. It provides a clean, responsive interface for users to generate random number sets.

## **Project Outline**
- **Core Features:**
  - Random lotto number generation (6 numbers from 1 to 45).
  - Ability to generate 5 sets of numbers at once.
  - **Social Login System (Google & Kakao).**
  - **Auth-Restricted Access:** The lotto draw tool is **hidden** by default and only becomes visible and usable after login.
- **Design & Style:**
  - Dark-themed UI with a **Lotto-related background image**.
  - Modern typography and interactive buttons with glow effects.
  - Mobile-responsive layout.
  - **Centered Header Title: "준서네 로또방" (Large & Animated).**
  - **Login menu positioned in the top right (Absolute).**
- **Technology Stack:**
  - HTML5, CSS3 (Baseline features), Vanilla JavaScript.
  - Web Components for UI consistency.
  - **Firebase Authentication (for Google Login).**
  - **Kakao JavaScript SDK (for Kakao Login).**

## **Current Task: Conditional UI Visibility based on Auth State**
- **Plan:**
  1. Hide the entire lotto drawing UI (container) by default.
  2. Implement logic to show the lotto drawing UI only when a user is successfully logged in.
  3. Ensure the UI hides again upon logout.
- **Steps:**
  - [x] Update `index.html` with an ID for the main container and initial `display: none`.
  - [x] Update `main.js` to toggle `lottoMain.style.display` based on `isAuthenticated`.
  - [x] Verify that the lotto tool is invisible to guests and visible to users.
