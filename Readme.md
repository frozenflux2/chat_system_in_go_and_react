Realtime Chat Application in Go And ReactJS
=============================================

NOTE: at all stages of this project, in order to test server and frontend together, navigate to /frontend, and run $ npm start. This will begin your front end test server on localhost:3000. Then, navigate to /backend and run $ go run main.go. Then, in the browser of your choice, go to localhost:3000.

Dockerizing Backend
=============================================

Once you’ve installed docker and have it running locally, we can dive into creating our Dockerfile:
```
FROM golang:1.11.1-alpine3.8
RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN go mod download
RUN go build -o main ./...
CMD ["/app/main"]
```

Once we have defined our Dockerfile, we can go ahead and build our Docker image using the docker cli:
```
$ docker build -t backend .
Sending build context to Docker daemon  11.26kB
Step 1/8 : FROM golang:1.11.1-alpine3.8
 ---> 95ec94706ff6
Step 2/8 : RUN apk add bash ca-certificates git gcc g++ libc-dev
 ---> Running in 763630b369ca
 ...
```

Upon successfully completing the ```build``` step, we can then proceed to try running this like so:
```
$ docker run -it -p 8080:8080 backend
Distributed Chat App v0.01
WebSocket Endpoint Hit
Size of Connection Pool:  1
&{ 0xc000124000 0xc0000902a0 {0 0}}
Message Received: {Type:1 Body:test}
Sending message to all clients in Pool
```