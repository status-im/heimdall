package mutations

import (
	"github.com/graphql-go/graphql"
	"go.mongodb.org/mongo-driver/bson"
	"context"

	"app/data"
)

var DeleteNotTodo = &graphql.Field {
	Type: graphql.String,
	Description: "Delete a not Todo",
	Args: graphql.FieldConfigArgument{
		"name": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
	},
	Resolve: func(params graphql.ResolveParams) (interface{}, error) {
		// get our params
		name, _ := params.Args["name"].(string)
		
		notTodoCollection := mongo.Client.Database("heimdall").Collection("Not_Todos")
		filter := bson.D{{ "name", name }}
		_, err := notTodoCollection.DeleteOne(
			context.Background(),
			filter,
		)
		if err != nil { panic(err) }

		return "true", nil
	},
}