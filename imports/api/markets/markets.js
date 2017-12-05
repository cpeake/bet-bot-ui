import { Mongo } from "meteor/mongo"

// import DocumentSchema from "./schemas/document-schema"

// ***************************************************************
// DOCUMENTS Collection
// ***************************************************************

export const Markets = new Mongo.Collection("markets");

// We use explicit methods, so deny everything
Markets.allow({
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

Markets.deny({
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
