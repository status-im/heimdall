package mongo

import (
	"context"
	"github.com/mongodb/mongo-go-driver/mongo"
)

var Client, err = mongo.Connect(context.Background(), "mongodb://petty:heimdallAdmin1@ds143559.mlab.com:43559/heimdall", nil)