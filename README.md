This is a [Next.js](https://nextjs.org/) web application built with [Tailwind CSS](https://tailwindcss.com/) for styling and [Prisma](https://www.prisma.io/docs/getting-started/quickstart) as the ORM to interact with a PostgreSQL database. The purpose of this application is to allow users to make requests for books that they are finding difficult to find. Users can submit their book requests, and administrators can manage and fulfill those requests.


## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features

- User with the ability to submit and manage book requests
- Responsive design using Tailwind CSS

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- PostgreSQL database set up and running.
- A Prisma schema file configured with your database connection.
- Tailwind CSS for styling.

## Getting Started

```bash
git clone https://github.com/narayan-raghuwanshi/rarity.git
```
```bash
cd rarity
```
```bash
npm install
# or
yarn install
```
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project's codebase is structured as follows to maintain a clear and organized development process:

- `/prisma`
  -`/prisma/migrations`
- `/public`
- `/src`
  -`/src/app`

## Environment Variables

This application relies on several environment variables to configure its settings and secrets. You should define these environment variables either in a `.env` file or directly in your deployment environment. Below is a list of the required environment variables and their descriptions:

- `DATABASE_URL`
- `DIRECT_URL`

## License

This project is licensed under the MIT License