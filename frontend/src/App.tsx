import React, { useEffect } from "react"
import "./App.css"
import { connect, sendMsg } from "./api"
import Header from "./components/Header"
import ChatHistory from "./components/ChatHistory"

const App = () => {
    const [chatHistory, setChatHistory] = React.useState<any[]>([])

    useEffect(() => {
        connect((msg) => {
            console.log("New Message: ", msg)
            setChatHistory([...chatHistory, msg])
        })
    })

    const send = () => {
        console.log("hello world")
        sendMsg("hello world")
    }

    return (
        <div className="App">
            <Header />
            <ChatHistory chatHistory={chatHistory} />
            <button onClick={send}>Hit</button>
        </div>
    )
}

export default App
