# Ralph John Galindo Portfolio

[![Nuxt 4](https://img.shields.io/badge/Nuxt-4.2.0-00DC82?style=flat&logo=nuxt.js)](https://nuxt.com)
[![Deployed on Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=flat&logo=netlify)](https://ralphjohn.netlify.app/)

Personal portfolio website built with Nuxt 4 and Storyblok CMS.

**Live Site:** [ralphjohn.netlify.app](https://ralphjohn.netlify.app/)

## Tech Stack

- **Framework:** [Nuxt 4.2.0](https://nuxt.com) (Vue 3.5.22)
- **CMS:** [Storyblok](https://www.storyblok.com/) (Headless CMS)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + SCSS
- **Build Tool:** Vite 7
- **Server:** Nitro 2.12.9
- **Deployment:** Netlify

## Prerequisites

- Node.js 18+ (currently using v24.1.0)
- npm 7+ (currently using v11.3.0)

## Setup

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
STORY_BLOK=your_storyblok_access_token
```

## Development

Start the development server:

```bash
# Standard development server
npm run dev

# With SSL (required for Storyblok Visual Editor)
npm run dev-ssl
```

The site will be available at:
- HTTP: `http://localhost:3000`
- HTTPS: `https://localhost:3000` (with SSL certificates)
- Tailwind Viewer: `http://localhost:3000/_tailwind/`
- DevTools: Press `Shift + Option + D` in browser

### SSL Setup for Storyblok

For local development with Storyblok's Visual Editor, you need SSL certificates:

1. Follow the [Storyblok SSL guide](https://www.storyblok.com/faq/setting-up-https-on-localhost-in-nuxt-3)
2. Place `localhost.pem` and `localhost-key.pem` in the root directory
3. Run `npm run dev-ssl`

## Production

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

The production build outputs to `.output/` directory.

## Project Structure

```
ralph2022/
├── assets/          # SCSS styles and images
├── components/      # Vue components (Header, Footer)
├── layouts/         # Layout components
├── pages/           # File-based routing
├── plugins/         # Nuxt plugins (Disqus, scroll events)
├── public/          # Static assets
├── storyblok/       # Storyblok components
└── nuxt.config.js   # Nuxt configuration
```

## Features

- Static site generation with prerendering
- Blog with tags and filtering
- Storyblok Visual Editor integration
- Responsive design with Tailwind CSS
- SEO optimized with meta tags
- Dark Sass/SCSS architecture

## Documentation

- [Nuxt 4 Documentation](https://nuxt.com/docs)
- [Storyblok + Nuxt Guide](https://www.storyblok.com/tp/add-a-headless-CMS-to-nuxt-3-in-5-minutes)
- [Deployment Guide](https://nuxt.com/docs/getting-started/deployment)

## Recent Updates

**October 2025** - Upgraded to Nuxt 4
- Migrated from Nuxt 3 RC11 to Nuxt 4.2.0
- Updated all dependencies to latest versions
- Removed deprecated `@nuxtjs/style-resources` module
- Fixed deprecated JavaScript methods (`.substr()` → `.substring()`)
- Now using Vite 7 and Vue 3.5

## License

Personal portfolio project - All rights reserved
