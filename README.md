# Trips

A travel guide web application that lets users search and browse trip articles with descriptions, photos, and tags.

## Project Structure

```
Trips/
├── api-gateway/    # Express API server (port 9000)
├── json-server/    # JSON data store (db.json)
└── web/            # React frontend (port 3000)
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v12+)
- npm or yarn

## Getting Started

### 1. Start the API Gateway

```bash
cd api-gateway
node api.js
```

The API will be available at `http://localhost:9000`.

### 2. Start the Web App

```bash
cd web
npm install
npm start
```

The app will be available at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/trips` | Get all trips |
| GET | `/api/trips?keyword=<term>` | Search trips by title, description, or tags |

## Tech Stack

- **Frontend:** React, Bootstrap, Axios
- **Backend:** Node.js, Express
- **Data:** JSON file (`db.json`)

## Screenshots

### JSON Response
![JSON Response](/frontend/public/screenshot1.jpg)

### Home Page
![Home Page](/frontend/public/screenshot2.jpg)

### Search
![Search](/frontend/public/screenshot3.jpg)
