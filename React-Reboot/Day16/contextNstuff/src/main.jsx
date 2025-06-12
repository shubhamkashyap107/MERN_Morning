import {BrowserRouter} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserDataContext from "./Utils/UserDataContext.jsx"

createRoot(document.getElementById('root')).render(
    <UserDataContext>

<BrowserRouter>
    <App />
</BrowserRouter>

    </UserDataContext>
)
