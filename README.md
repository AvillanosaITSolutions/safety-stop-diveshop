# Safety Stop Diveshop MVP

Minimal full-stack bootstrap for local delivery.

## Stack
- Frontend: Vite + React + TypeScript + Flowbite React + Recharts
- Backend: NestJS + TypeScript + TypeORM + PostgreSQL
- Integrations: Stripe payment-intent endpoint, Chatwoot webhook endpoint, dispo.now container
- Infra: Single `docker-compose.yml`

## Quick Start (Docker + Local Frontend)
1. Ensure Docker Desktop is running.
2. From project root, run:

```bash
docker compose up --build
```

3. Run frontend locally:

```bash
cd frontend
npm install
npm run dev
```

## Local URLs
- Frontend (local dev): http://localhost:5173
- Backend: http://localhost:3001
- Backend health: http://localhost:3001/health
- Chatwoot: http://localhost:3000
- dispo.now: http://localhost:8080
- PostgreSQL: localhost:5432

## Basic API checks
- `GET /catalog/services`
- `POST /bookings`
- `POST /payments/intent`
- `POST /chat/webhook`
- `GET /ops/summary`

## Environment
- A fully populated `.env` is included at project root for local setup.
- Replace Stripe keys in `.env` when moving from stub mode to real payments.
