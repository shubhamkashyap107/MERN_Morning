import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import "./index.css"
import { MeraContext } from '../utils/MeraContext.jsx'


createRoot(document.getElementById('root')).render(

    <MeraContext>


    <BrowserRouter>
        <App />
    </BrowserRouter>

    </MeraContext>

)
