# veryable-take-home

Demonstrate a basic understanding of a RESTful API, specifically in a NodeJS environment by creating a backend server.

## Features

- Utilized Prisma functionalities to effectively facilitate the process of working with the database, effectively incoporating with PostgresQL

- Using Postman to test endpoints.

## Installation

Install dependencies:

```bash
npm install
```

Set up Prisma:

```bash
npm install prisma --save-dev
npx prisma
npx prisma init
```

Connect database:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
```

Run Prisma migration to create/maintain database tables:

```bash
npx prisma migrate dev
```

Seed the database:

```bash
npx prisma db seed
```

Start server:

```bash
npm run dev
```

## Todo/Improve

- Add foreign keys for effective data retrieval.
- Error handling in services
- Input validation
- Read more about Prisma, learn more useful functionalities
- Read RestAPI Design
