# Recycle App

This project consists of a frontend built with Next.js and a backend built with Node.js. Docker is used to containerize the application.

## Project Structure

```
/recycle-app
    ├── frontend
    └── backend
    └── compose.yml
```

## Prerequisites

- Docker
- Docker Compose

## Getting Started

### Clone the repository

```bash
git clone
cd recycle-app
```

### Docker Setup

Create a `docker-compose.yml` file at the project root:

```yaml
version: '3.8'

services:
  frontend:
    build: ./frontend
    ports:
      - '3000:3000'
    depends_on:
      - backend

  backend:
    build: ./backend
    ports:
      - '3001:3001'
```

### Frontend Setup

Navigate to the `frontend` folder and create a `Dockerfile`:

```Dockerfile
# frontend/Dockerfile
FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
```

### Backend Setup

Navigate to the `backend` folder and create a `Dockerfile`:

```Dockerfile
# backend/Dockerfile
FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "index.js"]
```

### Running the Application

From the project root, run:

```bash
docker-compose up --build
```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:3001`.
