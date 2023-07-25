package main

import (
	"fmt"
	"net/http"

	"github.com/lumi518/chat_system_in_go_and_react/pkg/websocket"
)

// define our WebSocket endpoint
func serveWs(w http.ResponseWriter, r *http.Request) {
	ws, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+V\n", err)
	}
	go websocket.Writer(ws)
	websocket.Reader(ws)
}

func setupRoutes() {
	http.HandleFunc("/ws", serveWs)
}

func main() {
	fmt.Println("Chat App v0.01!")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
