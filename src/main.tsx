import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/globals.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import Layout from './features/Layout.tsx'
import '@/helpers/i18n.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout />
      </ThemeProvider>
    </React.Suspense>
  </React.StrictMode>,
)
