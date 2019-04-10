package queries

import (
	"context"

	"github.com/graphql-go/graphql"
	"github.com/mongodb/mongo-go-driver/bson"

	mongo "app/data"
	types "app/types"
)

type addressStruct struct {
	ADDRESS string `json:"address"`
	KIND    string `json:"kind"`
}

var GetAllAddresses = &graphql.Field{
	Type:        graphql.NewList(types.Address),
	Description: "Get all addresses",
	Resolve: func(params graphql.ResolveParams) (interface{}, error) {
		addressCollection := mongo.Client.Database("heimdall").Collection("Assets")

		addresses, err := addressCollection.Find(context.Background(), bson.D{})
		if err != nil {
			panic(err)
		}

		var addressesList []addressStruct

		for addresses.Next(context.Background()) {
			var address addressStruct
			err := addresses.Decode(&address)
			if err != nil {
				panic(err)
			}
			addressesList = append(addressesList, address)
		}
		return addressesList, nil
	},
}
