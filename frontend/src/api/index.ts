var socket = new WebSocket('ws://localhost:8080/ws');

let connect = (cb: (arg0: MessageEvent<any>) => void) => {
    console.log("Attempting to connect...");

    socket.onopen = () => {
        console.log("Successfully Connected!");
    };
    
    socket.onclose = (event) => {
        console.log("Socket Closed Connection: ", event);
    };
    
    socket.onmessage = (msg) => {
        console.log(msg);
        cb(msg);
    };

    socket.onerror = (error) => {
        console.log("Socket Error: ", error);
    };

}

let sendMsg = (msg: string | ArrayBufferLike | Blob | ArrayBufferView) => {
        console.log("Sending Message: ", msg);
        socket.send(msg);
}
    
export { connect, sendMsg };