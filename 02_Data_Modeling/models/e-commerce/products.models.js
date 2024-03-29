import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    productImage: {
        type: String,
    },
    price: {
        type: number,
        default: 0,
    },
    stock: {
        type: number,
        default: 0,
    },
    caterogy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true });

export const Product = mongoose.model("Product", ProductSchema)