# **Project: Lotto Draw App**

## **Overview**
A modern, framework-less web application for drawing lotto numbers. It provides a clean, responsive interface for users to generate random number sets.

## **Project Outline**
- **Core Features:**
  - Random lotto number generation (6 numbers from 1 to 45).
  - Ability to generate 5 sets of numbers at once.
  - **Social Login System (Google & Kakao).**
  - **Auth-Restricted Access:** Drawing numbers requires a logged-in session.
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

## **Current Task: Enhanced UI and Auth Access Control**
- **Plan:**
  1. Center the "준서네 로또방" title and significantly increase its size.
  2. Implement a background image related to lotto/gambling.
  3. Restrict the lotto draw functionality to authenticated users only.
  4. Provide visual feedback (locked state) for unauthenticated users.
- **Steps:**
  - [x] Update `style.css` with centered title, background image, and locked button styles.
  - [x] Update `main.js` to check auth state before allowing lotto draws.
  - [x] Add auto-opening login modal when unauthenticated users try to draw.
  - [x] Verify all UI changes and functionality.
