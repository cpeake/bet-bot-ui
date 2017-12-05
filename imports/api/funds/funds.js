import { Mongo } from "meteor/mongo"

// import DocumentSchema from "./schemas/document-schema"

// ***************************************************************
// DOCUMENTS Collection
// ***************************************************************

export const Funds = new Mongo.Collection("account_funds");

// We use explicit methods, so deny everything
Funds.allow({
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

Funds.deny({
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
