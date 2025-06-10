import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Core aliases for cleaner imports
      '@src': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@models': path.resolve(__dirname, './src/models'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets'),
      // Feature-based aliases for modular architecture
      '@features': path.resolve(__dirname, './src/features'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      // Environment-specific aliases
      '@config': path.resolve(__dirname, './src/config'),
      // Creative alias for shared UI library (if applicable)
      '@ui': path.resolve(__dirname, './src/ui'),
    },
    // Preserve file extensions for explicit imports (optional for clarity)
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  // Optimize build for faster development
  build: {
    sourcemap: true, // Enable sourcemaps for debugging
  },
  // Creative Tip: Add custom base path for multi-environment deployments
  base: process.env.VITE_BASE_URL || '/',
});
