import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig(({ command }) => {
  const isVercel = !!process.env["VERCEL"];
  const preset = isVercel ? "vercel" : (process.env["NITRO_PRESET"] || "cloudflare-module");

  return {
    plugins: [
      tsconfigPaths({ projects: ["./tsconfig.json"] }),
      tanstackStart({
        server: { entry: "server" },
      }),
      command === "build"
        ? nitro({
            preset,
          })
        : null,
      react(),
      tailwindcss(),
    ].filter(Boolean),
  };
});
