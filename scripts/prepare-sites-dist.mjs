import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const serverDir = join(process.cwd(), "dist", "server");
const workerPath = join(serverDir, "index.js");

const worker = `const textTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
]);

function contentTypeFor(pathname) {
  const match = pathname.match(/\\.[a-z0-9]+$/i);
  return match ? textTypes.get(match[0].toLowerCase()) : undefined;
}

function withHeaders(response, pathname) {
  const headers = new Headers(response.headers);
  const contentType = contentTypeFor(pathname);

  if (contentType && !headers.has("content-type")) {
    headers.set("content-type", contentType);
  }

  if (pathname.startsWith("/assets/")) {
    headers.set("cache-control", "public, max-age=31536000, immutable");
  } else {
    headers.set("cache-control", "public, max-age=0, must-revalidate");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request, env) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const url = new URL(request.url);
    const assetResponse = await env.ASSETS.fetch(request);

    if (assetResponse.status !== 404) {
      return withHeaders(assetResponse, url.pathname);
    }

    const indexUrl = new URL("/index.html", request.url);
    const indexResponse = await env.ASSETS.fetch(new Request(indexUrl, request));
    return withHeaders(indexResponse, "/index.html");
  },
};
`;

await mkdir(serverDir, { recursive: true });
await writeFile(workerPath, worker);
console.log(`Prepared Sites worker at ${workerPath}`);
