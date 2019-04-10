# Heimdall: High-Value Asset Monitoring
This repo is a start to a framework for monitoring smart contract details, and who is using them, and how.

The backend server is uses GraphQL and is written in Go.

The frontend client is written in Node, Apollo, and react, compiled with webpack.

### Dependencies
- dep
- go1.12.1
- node ^10.15.3
- mongodb (or an mlab.com or similar deployment)

### To start the server:

    export GOPATH=<path/to/this/repo>/server
    cd server/src/app
    dep ensure
    go run main.go

### To start the client:

    cd client
    npm i
    npm run dev

### TODOs for improvement
- [ ] Separate Components for better atomicity
  - Currently the `GetNotTodos` implements the `DeleteNotTodo`, these should be separate
- [ ] Create `Queries, Mutations, Subscriptions` folders in `Components` folder for better separation
- [ ] Implement user registration, login, etc
- [ ] add microservices framework for periodically checking for things and adding results to db
  - potentially queing system could work for this.
- [ ] Create secrets environment so they aren't hardcoded.