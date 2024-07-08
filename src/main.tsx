import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/globals.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import Layout from './features/Layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout />
    </ThemeProvider>
  </React.StrictMode>,
)
