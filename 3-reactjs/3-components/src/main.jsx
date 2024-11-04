import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ExContadorFunctionalComponent from './components/ExContadorFunctionalComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExContadorFunctionalComponent />
  </StrictMode>,
)
