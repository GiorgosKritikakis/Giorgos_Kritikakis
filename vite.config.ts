// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Render every page to plain HTML files at build time so the site can be
    // hosted as static files (e.g. GitHub Pages).
    // crawlLinks off: the builder was following the CV download link and
    // failing on GitHub's runner. Links on the page don't need build-time checks.
    pages: [{ path: "/", prerender: { crawlLinks: false } }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
  vite: {
    base: "/Landing_Page/",
  },
});
