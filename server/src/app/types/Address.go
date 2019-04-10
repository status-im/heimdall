package types

import (
	"github.com/graphql-go/graphql"
)

var Address = graphql.NewObject(graphql.ObjectConfig{
	Name: "Address",
	Fields: graphql.Fields{
		"address": &graphql.Field{
			Type: graphql.String,
		},
		"kind": &graphql.Field{
			Type: graphql.String,
		},
	},
})
