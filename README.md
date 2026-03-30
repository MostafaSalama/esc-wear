# ESC Wear

ESC Wear is a Next.js 15 storefront application built with React 19, Tailwind CSS 4, and `next-intl`.

## Requirements

- Node.js 20+
- npm 10+

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Start local development server (Turbopack).
- `npm run build` - Create a production build.
- `npm run start` - Start production server.
- `npm run lint` - Run ESLint checks.

## Deploy (Recommended: Vercel)

1. Push your code to GitHub, GitLab, or Bitbucket.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Add required environment variables in Vercel project settings.
4. Deploy.

Vercel will automatically run the build and serve the app.

## Deploy on Your Own Server

On your server:

```bash
npm install
npm run build
npm run start
```

Run behind a reverse proxy (like Nginx) and expose port `3000`.

## Notes

- If your host has issues with `next build --turbopack`, change the build script in `package.json` to `next build`.
