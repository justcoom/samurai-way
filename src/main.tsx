import './index.css'
import {RootStateType} from "./redux/state.ts";
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store.ts";

const root = createRoot(document.getElementById('root')!)

const rerenderEntireThree = (state: RootStateType) => {
    root.render(
        <StrictMode>
            <BrowserRouter>
                <App
                    dispatch={store.dispatch.bind(store)}
                    state={state}
                    store={store}
                />
            </BrowserRouter>
        </StrictMode>,
    )

}

rerenderEntireThree(store.getState())

store.subscribe(() => {
    rerenderEntireThree(store.getState())
})