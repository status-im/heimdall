# go-graphql-react-app Boilerplate

I use this to start projects that use these technologies.

Much was taken from [this](https://medium.com/@chrischuck35/how-to-build-a-simple-web-app-in-react-graphql-go-e71c79beb1d) tutorial.

It was a bit outdated, so it was updated through the [mongo-go-driver](https://github.com/mongodb/mongo-go-driver/) docs.

### Dependencies
- dep
- go1.12.1
- node ^10.15.3

### To start the server:

    export GOPATH=<path/to/this/repo>/server
    cd server/src/app
    dep ensure
    go run main.go

### To start the client:

    cd client
    npm i
    npm run dev