import './index.css'
import {RootStateType, store} from "./redux/state.ts";
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";

const root = createRoot(document.getElementById('root')!)

const rerenderEntireThree = (state: RootStateType) => {
    root.render(
        <StrictMode>
            <BrowserRouter>
                <App
                    dispatch={store.dispatch.bind(store)}
                    state={state}
                    // updatePostText={store.updatePostText.bind(store)}
                    // updateMessageText={store.updateMessageText.bind(store)}
                    // addMessage={store.addMessage.bind(store)}
                />
            </BrowserRouter>
        </StrictMode>,
    )

}

rerenderEntireThree(store.getState())

store.subscribe(rerenderEntireThree)