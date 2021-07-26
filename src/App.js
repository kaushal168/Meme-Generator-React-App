import React from "react"
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"
import "./style.css"

function App() {
    document.title = `Meme Generator`
    return (
        <div>
            <Header />
            <MemeGenerator />
        </div>
    )
}

export default App
