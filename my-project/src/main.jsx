import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const anotherElement=(
    <a href="https://google.com" target='__blank'> Visit  google</a>
)
createRoot(document.getElementById('root')).render(
    anotherElement   
 
)
