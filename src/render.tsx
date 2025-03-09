import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, RootStateType, updateMessageText, updatePostText} from './redux/state.ts'

const root = createRoot(document.getElementById('root')!)

export const rerenderEntireThree = (state: RootStateType) => {
    root.render(
        <StrictMode>
            <BrowserRouter>
                <App
                    addPost={addPost}
                    state={state}
                    updatePostText={updatePostText}
                    updateMessageText={updateMessageText}
                    addMessage={addMessage}
                />
            </BrowserRouter>
        </StrictMode>,
    )

}

