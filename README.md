# go-graphql-react-app Boilerplate

I use this to start projects that use these technologies.

Much was taken from [this](https://medium.com/@chrischuck35/how-to-build-a-simple-web-app-in-react-graphql-go-e71c79beb1d) tutorial.

It was a bit outdated, so it was updated through the [mongo-go-driver](https://github.com/mongodb/mongo-go-driver/) docs.

The backend server is written in Go.

The frontend client is written in node and react, compiled with webpack.

## Notes and Details

Currently there is no front-end style framework, it is minimalistic just to get something working, and allow for anything to be added and change based on the style-framework de jour.  

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