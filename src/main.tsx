import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {state} from './redux/state.ts'


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App state={state}/>
        </BrowserRouter>
    </StrictMode>,
)
