package mongo

import (
	"context"
	"time"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)
var ctx, _ = context.WithTimeout(context.Background(), 10*time.Second)
var Client, err = mongo.Connect(ctx, options.Client().ApplyURI("mongodb://petty:heimdallAdmin1@ds143559.mlab.com:43559/heimdall"))