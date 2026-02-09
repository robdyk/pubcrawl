# Stockholm Pub Crawl

A simple web app for discovering and sharing pub crawl routes in Stockholm, Sweden.

## Features

- 🍺 Pre-planned pub crawl routes across Stockholm
- 🗺️ Interactive maps with route visualization
- 📍 Detailed pub information and specialties
- 🔗 Share routes with friends
- 📱 Responsive design for mobile and desktop
- 🚀 No build step required - just open and run!

## Getting Started

Simply open `index.html` in your web browser. That's it!

Or use a local server:
```bash
python -m http.server 8000
# or
npx serve
```

Then open http://localhost:8000

## Tech Stack

- Pure HTML, CSS, and JavaScript
- Leaflet.js for interactive maps
- OpenStreetMap tiles
- No frameworks or build tools needed

## Project Structure

- `index.html` - Main HTML file
- `styles.css` - All styling
- `app.js` - Application logic and routing
- `data.js` - Pub and crawl route data

## Adding New Routes

Edit `data.js` to add new pub crawl routes with pub details and coordinates.

## Deployment

Upload all files to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Any web server
