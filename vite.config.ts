import { defineConfig } from 'vite';

import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import vitePluginSvgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginSvgr({
      svgrOptions: {
        icon: true,
        exportType: 'default',
        dimensions: false,
      },
    }),
    react(),
    tsconfigPaths(),
  ],
});
