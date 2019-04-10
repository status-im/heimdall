package mutations

import (
	"context"

	"github.com/graphql-go/graphql"

	mongo "app/data"
	types "app/types"
)

type addressStruct struct {
	ADDRESS string `json:"address"`
	TYPE    string `json:"kind"`
}

var AddAddress = &graphql.Field{
	Type:        types.Address,
	Description: "Add an address to monitor",
	Args: graphql.FieldConfigArgument{
		"address": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
		"kind": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
	},

	Resolve: func(params graphql.ResolveParams) (interface{}, error) {
		// get our params
		address, _ := params.Args["address"].(string)
		kind, _ := params.Args["kind"].(string)

		addressCollection := mongo.Client.Database("heimdall").Collection("Assets")

		_, err := addressCollection.InsertOne(context.Background(), map[string]string{"address": address, "kind": kind})
		if err != nil {
			panic(err)
		}

		return addressStruct{address, kind}, nil
	},
}
