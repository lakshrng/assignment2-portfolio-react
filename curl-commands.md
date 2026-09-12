# Backend curl checks for Assignment 3

Start the backend from the /server folder:

```bash
cd server
npm install
cp .env.example .env
npm start
```

## B1 — health check

```bash
curl -i http://localhost:5000/
```

Expected:

```json
{"status":"ok"}
```

## B2 — list all projects

```bash
curl -i http://localhost:5000/api/projects
```

## B3 — fetch a valid project

```bash
curl -i http://localhost:5000/api/projects/opiniote
```

## B3 failure case — bad project id

```bash
curl -i http://localhost:5000/api/projects/does-not-exist
```

Expected:

```json
{"error":"Project not found"}
```

## B4 — valid contact submission

```bash
curl -i -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com","message":"Hello from curl."}'
```

## B4 failure case — invalid email

```bash
curl -i -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane-at-example.com","message":"Bad email test"}'
```

## B5 — get all stored contact submissions

```bash
curl -i http://localhost:5000/api/contact
```

## B6 — undefined route

```bash
curl -i http://localhost:5000/not-real-route
```

Expected:

```json
{"error":"Route not found"}
```

## B7 — CORS check

```bash
curl -i -H "Origin: http://localhost:5173" http://localhost:5000/
```

The response should include the CORS headers for the allowed origin.
