import { Mongo } from "meteor/mongo"

// import DocumentSchema from "./schemas/document-schema"

// ***************************************************************
// DOCUMENTS Collection
// ***************************************************************

export const Statistics = new Mongo.Collection("statistics");

// We use explicit methods, so deny everything
Statistics.allow({
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

Statistics.deny({
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
