
<div align="center">
  <img src="public/favicon.svg" alt="Cosmic Markdown Previewer Logo" width="120">
  <h1 align="center">Cosmic Markdown Previewer 🚀</h1>
  <p align="center">
    A modern, real-time Markdown previewer that blends powerful functionality with a stunning, animated cosmic aesthetic.
    <br />
    <strong>Instantly render Markdown to styled HTML, with tools to clear input and copy the generated code.</strong>
    <br />
    <br />
    <a href="#"><strong>View Live Demo (coming soon) »</strong></a>
    <br />
    <br />
    <a href="#-project-philosophy">Philosophy</a> ·
    <a href="#-key-features">Features</a> ·
    <a href="#-how-it-works">How It Works</a> ·
    <a href="#-getting-started">Setup</a> ·
    <a href="#-license">License</a>
  </p>
</div>

<!-- BADGES -->
<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/marked.js-4.x-444444?style=for-the-badge" alt="Marked.js">
  <br/>
  <img src="https://img.shields.io/github/license/hsinidev/cosmic-markdown-previewer?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge" alt="PRs Welcome">
  <img src="https://img.shields.io/github/stars/hsinidev/cosmic-markdown-previewer?style=for-the-badge&social" alt="GitHub stars">
</div>

---

<div align="center">
  <h3>Project Demo</h3>
  <img src="https://i.imgur.com/your-demo.gif" alt="Project Demo GIF">
  <p><em>(Note: Replace with an actual GIF of the application in action)</em></p>
</div>

---

### 🌌 Project Philosophy

Why build another Markdown previewer? This project was born from a desire to create a tool that is not only highly functional but also a joy to use. We believe that development tools should be inspiring. The **Cosmic Markdown Previewer** combines a fast, client-side rendering engine with a beautiful, immersive user interface to create a workspace that encourages creativity and focus. It's built on the principles of privacy (100% client-side), performance, and powerful aesthetics.

---

### ✨ Key Features

-   **Live Rendering Engine:** Instantly see your Markdown rendered as styled HTML as you type.
-   **Dual-Panel View:** A clean, responsive, side-by-side interface for efficient writing and previewing.
-   **Stunning UI:** A unique, animated nebula background provides a beautiful, distraction-free environment.
-   **Code Syntax Highlighting:** Fenced code blocks are automatically highlighted for readability (powered by `marked.js`).
-   **Essential Tools:**
    -   📋 **Copy HTML:** One-click button to copy the generated HTML source code.
    -   🗑️ **Clear Input:** Quickly clear the editor to start fresh.
-   **Privacy First:** 100% client-side. Your data never leaves your browser.
-   **Fully Responsive:** A seamless experience on desktops, tablets, and mobile devices.

---

### 🛠️ How It Works

The application is a single-page application (SPA) built with a modern, lightweight tech stack, running entirely in the user's browser.

1.  **ReactJS Core:** The UI is structured into reusable functional components using React. This manages the application's state, such as the Markdown input and the generated HTML output.
2.  **Real-time Input:** The `<textarea>` for Markdown input has an `onChange` event listener. Every keystroke updates the component's state.
3.  **Markdown Parsing:** When the state updates, a `useEffect` hook triggers the `marked.js` library. This powerful, lightweight parser takes the raw Markdown string and converts it into an HTML string.
4.  **HTML Rendering:** The resulting HTML string is then safely injected into the preview `<div>` using React's `dangerouslySetInnerHTML` prop. This entire process is nearly instantaneous, creating the real-time preview effect.
5.  **Styling with Tailwind CSS:** The entire interface, from the layout to the styled HTML preview (`prose` classes), is built using the utility-first classes of Tailwind CSS. The cosmic background is a custom CSS animation applied to a background layer.

---

### 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

#### Prerequisites

You only need a modern web browser. To run locally from the source files, a simple local server is recommended to avoid any potential CORS issues.

#### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/hsinidev/cosmic-markdown-previewer.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd cosmic-markdown-previewer
    ```
3.  **Serve the files:**
    Open the `index.html` file directly in your browser, or for a better experience, serve the directory using a local server. For example, with Node's `serve` package:
    ```sh
    npx serve .
    ```
    Or with Python's built-in server:
    ```sh
    python -m http.server
    ```

---

### 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

### 📄 License

Distributed under the MIT License. This means you are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software.

**Copyright (c) 2023 HSINI MOHAMED**

---

### 📧 Contact

**HSINI MOHAMED**

-   **GitHub:** [@hsinidev](https://github.com/hsinidev)
-   **Website:** [doodax.com](https://doodax.com)
-   **Email:** [hsini.web@gmail.com](mailto:hsini.web@gmail.com)

**Project Link:** [https://github.com/hsinidev/cosmic-markdown-previewer](https://github.com/hsinidev/cosmic-markdown-previewer)
