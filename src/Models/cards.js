const { Schema, model } = require("mongoose");

const CardsSchema = new Schema ({
    card_id: {
        type: "number",
        required: true
    },
    type_card: {
        type: "string",
        required: true
    },
    name: {
        type: "string",
        required: true
    },
    hp: {
        type: "number",
        required: true
    },
    attack: {
        type: "number",
        required: true
    },
    defense: {
        type: "number",
        required: true
    },

    speed: {
        type: "number",
        required: true
    },
    energy: {
        type: "number",
        required: true
    },
    total_power: {
        type: "number",
        required: true
    },
    
});

module.exports = model ("Cards", CardsSchema );