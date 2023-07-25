import React from "react"
import "./ChatHistory.scss"

type ChatHistoryProps = {
    chatHistory: any[]
}

const ChatHistory = ({ chatHistory }: ChatHistoryProps) => {
    const messages = chatHistory.map((message, index) => {
        return <p key={index}>{message?.data}</p>
    })

    return (
        <div className="ChatHistory">
            <h2>Chat History</h2>
            {messages}
        </div>
    )
}

export default ChatHistory
