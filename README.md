# Simple AI Guide

Welcome to the **Simple AI Guide** repository! This project is the source code for [simpleaiguide.tech](https://simpleaiguide.tech), a comprehensive resource dedicated to AI tools, news, comparisons, and prompt engineering.

## 🚀 Built With

This website is built using modern web technologies to ensure performance, SEO, and maintainability:

*   **[Astro](https://astro.build/)**: The core web framework (v4).
*   **[Tailwind CSS](https://tailwindcss.com/)**: For utility-first styling.
*   **[MDX](https://mdxjs.com/)**: For writing dynamic content in Markdown.
*   **[Fuse.js](https://fusejs.io/)**: For client-side fuzzy search.
*   **Python**: Helper scripts for content extraction and image optimization.

## 🛠️ Getting Started

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm
*   Python (for image optimization and content scripts)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mittai17/simpleaiguide.git
    cd simpleaiguide
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

### Building for Production

This project is configured to build into the `docs/` directory, which is set up for GitHub Pages deployment.

```bash
npm run build
```

## 📂 Project Structure

*   `src/components`: Astro components (UI elements like Layout, Header, Footer).
*   `src/content`: MDX content for the blog and learn sections.
*   `src/pages`: Astro page routes.
*   `public`: Static assets.
*   `docs`: The production build output (do not edit manually).
*   `optimize_images.py`: Python script to optimize images for the web.
*   `extract_docx_content.py`: Tool to extract blog content from DOCX files.

## 📝 Content Management

The site uses Astro's **Content Collections**. Blog posts and learning modules are located in `src/content/`.

### Helper Scripts

*   **`optimize_images.py`**: usage `python optimize_images.py` - Scans directory for images and optimizes them (Resize/WebP).
*   **`extract_docx_content.py`**: Helper to convert DOCX drafts into compatible content formats.

## 🤝 Contributing

1.  Fork the repo.
2.  Create a feature branch.
3.  Commit your changes.
4.  Push to the branch.
5.  Open a Pull Request.

## 📄 License

[MIT License](LICENSE) (or appropriate license)
