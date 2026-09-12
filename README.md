## Portfolio

This portfolio keeps the Assignment 2 React frontend intact while moving project data and contact submissions behind an Express backend in the `server` folder.

// Demo video

## Architecture

- Frontend: Vite + React app in the project root
- Backend: Express API in `server/`
- Data storage choice: in-memory arrays for projects and contact submissions
- Environment config: `.env` values loaded via `dotenv`

## Backend setup

From the `server` directory:

```bash
cd server
cp .env.example .env
npm install
npm start
```

For development with auto-restart:

```bash
cd server
npm run dev
```

The Express server reads the `PORT` value from `.env`, defaults to `5000` if it is missing, and enables CORS for the Vite frontend.

## Frontend setup

From the project root:

```bash
npm install
npm run dev
```

The Vite dev server proxies `/api` requests to the backend at `http://localhost:5000`.

## API endpoints

### 1) GET /

Returns the server health status.

Request:

bash
curl http://localhost:5000/

Response:

json
{ "status": "ok" }


### 2) GET /api/projects

Returns all portfolio projects.

Request:

```bash
curl http://localhost:5000/api/projects
```

Response:

```json
[
  {
    "id": "opiniote",
    "title": "Opinote",
    "description": "A dynamic opinion and voting system for a college campus.",
    "techStack": ["React", "Python", "RestAPIs"],
    "image": "/images/digivote.PNG",
    "link": "https://github.com/lakshrng/DigiVote"
  }
]
```

### 3) GET /api/projects/:id

Returns a single project by ID.

Request:

```bash
curl http://localhost:5000/api/projects/opiniote
```

Success response:

```json
{
  "id": "opiniote",
  "title": "Opinote",
  "description": "A dynamic opinion and voting system for a college campus.",
  "techStack": ["React", "Python", "RestAPIs"],
  "image": "/images/digivote.PNG",
  "link": "https://github.com/lakshrng/DigiVote"
}
```

Failure response:

```json
{ "error": "Project not found" }
```

### 4) POST /api/contact

Accepts a contact message payload.

Request body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hello from the portfolio site."
}
```

Success response:

```json
{
  "message": "Message sent successfully.",
  "submission": {
    "id": "1",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "message": "Hello from the portfolio site.",
    "createdAt": "2026-09-04T00:00:00.000Z"
  }
}
```

Validation failure examples:

```json
{ "error": "Email is required." }
```

```json
{ "error": "Enter a valid email address." }
```

### 5) GET /api/contact

Returns all stored contact submissions.

This endpoint is intentionally open and unauthenticated by design.

Request:

```bash
curl http://localhost:5000/api/contact
```

Response:

```json
[
  {
    "id": "1",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "message": "Hello from the portfolio site.",
    "createdAt": "2026-09-04T00:00:00.000Z"
  }
]
```

### 6) Undefined routes / JSON errors

Any undefined route returns a JSON payload instead of HTML.

Example:

```bash
curl http://localhost:5000/not-real-route
```

Response:

```json
{ "error": "Route not found" }
```

### 7) CORS and environment configuration

The backend is configured for CORS with the allowed origin defined in `server/.env.example`.

Required environment variables:

```env
PORT=5000
ALLOWED_ORIGIN=http://localhost:5173
PROJECTS_DATA_PATH=./data/projects.js
CONTACT_DATA_PATH=./data/contactSubmissions.js
```

The actual `.env` file is local-only and should not be committed to source control.

## Notes

- The project data and contact submissions are stored in memory, not duplicated in the React app.
- The frontend fetches project data and project details from the backend API instead of importing local JSON files.
- Contact form submissions are persisted on the server and can be retrieved through the open `/api/contact` endpoint.

## Component summary

- App: router and layout composition
- Layout: shared page shell and navigation
- Navbar: navigation links and theme toggle
- Home: landing page and loading state
- About: technical and personal profile content
- Projects: loads from `/api/projects`
- ProjectDetail: loads from `/api/projects/:id`
- Contact: page layout and contact form
- ContactForm: client validation plus server submission handling
- ThemeContext: theme state persistence

