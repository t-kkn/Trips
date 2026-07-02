# Trips — เที่ยวไหนดี

A Thai travel guide web application that lets users search and browse trip articles with descriptions, photos, and tags. Content is sourced from [Wongnai Travel](https://www.wongnai.com/).

## Project Structure

```
Trips/
├── api-gateway/    # Express API server (port 9000)
├── data/           # JSON data store (db.json)
└── frontend/       # React frontend (port 3000)
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v12+)
- npm or yarn

## Getting Started

### 1. Start the API Gateway

```bash
cd api-gateway
npm install
node api.js
```

The API will be available at `http://localhost:9000`.

### 2. Start the Frontend

```bash
cd frontend
npm install
npm start
```

The app will be available at `http://localhost:3000`.

> **Note:** The `data/db.json` file is included in the repository and comes pre-populated with trip articles. No additional setup is needed for the data layer.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/trips` | Get all trips (raw data) |
| GET | `/api/trips?keyword=<term>` | Search trips by title, description, or tags |

### Search Behavior

The `/api/trips` search matches against:
- **Title** — partial match (case-insensitive)
- **Description** — partial match (case-insensitive)
- **Tags** — exact match (case-insensitive)

Leaving `keyword` empty returns all trips.

### Example Response

```json
[
  {
    "title": "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี?",
    "eid": "1",
    "url": "https://www.wongnai.com/trips/travel-koh-chang",
    "description": "...",
    "photos": [
      "https://img.wongnai.com/p/1600x0/2019/07/02/example.jpg"
    ],
    "tags": ["เกาะ", "ทะเล", "ธรรมชาติ", "ตราด"]
  }
]
```

## Tech Stack

- **Frontend:** React, Bootstrap, Axios
- **Backend:** Node.js, Express
- **Data:** JSON file (`data/db.json`)

## Screenshots

### Home Page
![Home Page](/frontend/public/screenshot1.jpg)

### Search
![Search](/frontend/public/screenshot2.jpg)
