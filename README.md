# Bento Portfolio

A modern, bento-style personal developer portfolio built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern bento-grid layout inspired by iOS widgets
- 🌙 Dark/Light theme toggle with system preference detection
- 📱 Fully responsive design
- ⚡ Fast and optimized with Vite
- 🎭 Smooth animations with Framer Motion
- 🎯 Accessible and SEO-friendly
- 🚀 Easy to customize and deploy

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bento-portfolio.git
cd bento-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## Customization

### Personal Information

Edit the following in `src/App.jsx`:

- Update personal details in the About section
- Modify the projects array with your own projects
- Update skills array with your technologies
- Change social media links
- Update contact information

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `tailwind.config.js` and `src/index.css`
- **Layout**: Adjust the bento grid layout in `src/App.jsx`
- **Animations**: Customize animations in `src/App.jsx` and CSS files

### Images

Replace the placeholder images in the `public/images/` directory with your own:

- `about-akshita.jpg` - Your profile photo
- `project-*.png` - Your project screenshots
- Add any additional images as needed

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## Deployment

This project can be easily deployed to:

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use GitHub Actions
- **Any static hosting service**

## Project Structure

```
bento-portfolio/
├── public/
│   ├── images/           # Your images
│   └── vite.svg
├── src/
│   ├── App.jsx          # Main React component
│   ├── App.css          # Component-specific styles
│   ├── index.css        # Global styles and Tailwind imports
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md
```

## Features to Add

- [ ] Blog integration (MDX or headless CMS)
- [ ] Contact form with backend integration
- [ ] Project filtering and search
- [ ] Resume download functionality
- [ ] Spotify API integration for "Now Playing"
- [ ] Analytics integration
- [ ] Performance optimizations
- [ ] PWA capabilities

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from Apple's widget system
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ by [Akshita Gupta](https://github.com/akshita-gupta)
