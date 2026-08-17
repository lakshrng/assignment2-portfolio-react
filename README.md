# My Portfolio

This portfolio is a Vite + React app built with plain JavaScript and JSX. It includes a light/dark theme toggle, responsive navigation, project cards, a detail page, and a contact form.

## Setup and run

npm install
npm run dev

(for production build)
   npm run build

## Component tree

App: sets up the router and page layout.
Layout: gives the header, routed content, and footer throughout all pages
Navbar: contains the navigation links and the theme toggle.
Home: landing page hero section with a loading state.
About: biography, skills, and achievements.
Projects: maps project data into reusable cards.
ProjectCard: shows each project card and contains its own states
TechStack: receives the tech stack array and renders the tags.
ProjectDetail: matches the URL to the correct project and shows detail content.
Contact: contains the contact details and the form.
ContactForm: controlled inputs with validation and disabled submit state.
ThemeContext: provides the global theme state to the app.

Theme State

Essentially used context instead of props because that theme can be passed through to all the various pages.

Images

Instead of using src/assets for images, but the project data stores image paths as string values such as /images/digivote.PNG and passes them directly to an img src attribute. In Vite, those paths resolve from the public folder, so the project images are intentionally stored in public/images instead of src/assets. 

useEffects: 

Home page loading simulation: there is a timeout on the homescreen for about a second, then reveals the real content. Cleanup clears the timeout to avoid state updates after unmount.

ThemeContext persistence: the theme is saved to localStorage whenever it changes and restored on initial load, so whenever the page is refreshed it remains on the theme it was on.

Navbar resize listener: a window resize event listens for mobile/tablet breakpoints so the nav can collapse or expand appropriately, and the listener is removed on unmount.

