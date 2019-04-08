package queries

import (
	"github.com/mongodb/mongo-go-driver/bson"
	"github.com/graphql-go/graphql"
	"context"

	"app/data"
	types "app/types"
)

type todoStruct struct {
	NAME        string `json:"name"`
	DESCRIPTION string `json:"description"`
}

var GetNotTodos = &graphql.Field{
	Type:        graphql.NewList(types.NotTodo),
	Description: "Get all not todos",
	Resolve: func(params graphql.ResolveParams) (interface{}, error) {
		notTodoCollection := mongo.Client.Database("heimdall").Collection("Not_Todos")

		todos, err := notTodoCollection.Find(context.Background(), bson.D{}, )
		if err != nil {
			panic(err)
		}

		var todosList []todoStruct

		for todos.Next(context.Background()) {
			var todo todoStruct
			err := todos.Decode(&todo)
			if err != nil {
				panic(err)
			}
			todosList = append(todosList, todo)
		}
		return todosList, nil
	},
}
