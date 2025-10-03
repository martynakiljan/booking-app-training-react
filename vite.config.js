import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [
		react({
			jsxRuntime: 'automatic', // <- nowy JSX Transform, import React niepotrzebny
		}),
	],
})
