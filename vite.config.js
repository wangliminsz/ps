import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue'

// Load .env files
// const env = loadEnv(true, process.cwd(), '');
const mode = process.env.NODE_ENV || 'development';
const raw = loadEnv(mode, process.cwd(), '');

const env = Object.keys(raw).reduce((env, key) => {
  env[key] = JSON.stringify(raw[key]);
  return env;
}, {});

// https://vitejs.dev/config/
export default defineConfig({
 
  plugins: [
    vue(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  // envDir: 'path/to/your/.env', 
  
  define: {
    //  'process.env': Object.keys(process.env).reduce((acc, key) => {
    //   acc[key] = JSON.stringify(process.env[key]);
    //   return acc;
    // }, {}),
    'process.env': env,
  },

})



// export default defineConfig({
//   mode: 'development',
//   // ... other configurations
//   envDir: 'path/to/your/.env', // This is optional if your .env file is in the root
//   define: {
//     // This will expose `VUE_APP_` prefixed env variables to your client-side code
//     'process.env': Object.keys(process.env).reduce((acc, key) => {
//       acc[key] = JSON.stringify(process.env[key]);
//       return acc;
//     }, {}),
//   },
//   // ... other configurations
// });
