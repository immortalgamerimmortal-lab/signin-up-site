# signin-up-site

A modern, responsive sign-in/sign-up landing page built with plain HTML, CSS, and JavaScript.

## Overview

This project recreates a classic authentication UI with a sliding panel that switches between:

- Sign in
- Create account
- Social sign-in buttons
- Password recovery link
- Form messages for unconnected actions

The design includes a clean, card-based layout, soft gradient background, and mobile-friendly responsive behavior.

## Features

- Animated toggle between sign-in and sign-up forms
- Elegant glass-like / card styling with contrasting color palette
- Social account buttons for Google, Facebook, LinkedIn, and GitHub
- Email/password inputs with accessible labels and form validation
- Responsive layout for desktop and mobile screens
- JavaScript mock feedback messages for actions not yet connected to a backend

## Project structure

```text
signin-up-site/
├── README.md
└── Blender projects/
    ├── index.html
    ├── style.css
    └── app.js
```

## How to run

Open the HTML file directly in a browser:

```bash
open "Blender projects/index.html"
```

Or serve the folder locally with a simple static server:

```bash
cd "Blender projects"
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Notes

This is a frontend-only authentication mockup. The forms and social buttons are intentionally non-functional and show status messages such as:

- "Authentication is not connected yet."
- "Password recovery is not connected yet."
- "Social sign-in is not connected yet."

## Technologies used

- HTML5
- CSS3
- JavaScript
- Font Awesome icons

## License

This project is provided as a demo/example for learning and front-end design purposes.