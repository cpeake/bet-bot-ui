import { Mongo } from "meteor/mongo"

// import DocumentSchema from "./schemas/document-schema"

// ***************************************************************
// DOCUMENTS Collection
// ***************************************************************

export const Strategies = new Mongo.Collection("strategies");

// We use explicit methods, so deny everything
Strategies.allow({
    insert() {
        return false
    },
    update() {
        return false
    },
    remove() {
        return false
    }
});

Strategies.deny({
    insert() {
        return true
    },
    update() {
        return true
    },
    remove() {
        return true
    }
});

// Must remember to attach the schema to the collection
// Markets.attachSchema(MarketSchema)
