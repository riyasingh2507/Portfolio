# Portfolio

Personal portfolio built with React, TypeScript, and Vite.

## Local install

Use Node.js 20.19+ or 22.12+ because the installed Vite version requires it.

```bash
npm install
```

## Local run

```bash
npm run dev
```

## Production build

```bash
npm run build
```

## Docker

This project includes a multi-stage Docker build:

- Stage 1 uses `node:22-alpine` to install dependencies and build the Vite app.
- Stage 2 uses `nginx:alpine` to serve the generated static files.

### Build the Docker image

For a normal root deployment such as `https://your-domain.com/`:

```bash
docker build -t portfolio-app .
```

For a subpath deployment such as `https://your-domain.com/Portfolio/`:

```bash
docker build -t portfolio-app --build-arg VITE_BASE_PATH=/Portfolio/ .
```

### Run the container

```bash
docker run -d -p 8080:80 --name portfolio-app portfolio-app
```

Then open:

```text
http://localhost:8080
```

## Deploy with Docker

Typical deployment flow:

1. Build the image.
2. Tag it for your registry.
3. Push it.
4. Run it on your server, VM, VPS, or container platform.

Example:

```bash
docker build -t portfolio-app .
docker tag portfolio-app your-dockerhub-username/portfolio-app:latest
docker push your-dockerhub-username/portfolio-app:latest
```

On the server:

```bash
docker pull your-dockerhub-username/portfolio-app:latest
docker run -d --restart unless-stopped -p 80:80 --name portfolio-app your-dockerhub-username/portfolio-app:latest
```

## Notes

- The Vite base path is configurable through the Docker build argument `VITE_BASE_PATH`.
- Nginx is configured with SPA fallback, so direct navigation to routes still serves `index.html`.
