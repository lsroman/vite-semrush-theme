import { defineConfig } from 'vite'
import path from "node:path";
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    babel({
      babelConfig: {
        plugins: [
          ["@semcore/babel-plugin-react-semcore", {
            theme: path.resolve(process.cwd(), 'src', 'theme'),
            verbose: true
          }]
        ]
      },
    })
  ]
})
