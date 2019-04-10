package mutations

import (
	"context"

	"github.com/graphql-go/graphql"
	"go.mongodb.org/mongo-driver/bson"

	mongo "app/data"
)

var DeleteAddress = &graphql.Field{
	Type:        graphql.String,
	Description: "Delete an address",
	Args: graphql.FieldConfigArgument{
		"address": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
	},
	Resolve: func(params graphql.ResolveParams) (interface{}, error) {
		// get our params
		address, _ := params.Args["address"].(string)

		addressCollection := mongo.Client.Database("heimdall").Collection("Assets")
		filter := bson.D{{"address", address}}
		_, err := addressCollection.DeleteOne(
			context.Background(),
			filter,
		)
		if err != nil {
			panic(err)
		}

		return "true", nil
	},
}
