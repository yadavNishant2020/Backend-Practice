import mongoose from "mongoose";

const OrderItems = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    Quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    Customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    OrderItems: [OrderItems],
    Address: {
        type: String,
        required: true
    },
    Status:{
        type: String,
        enum: ["Pending", "Confirmed", "Delivered"],
        default: "Pending"
    }
}, {timestamps: true});

export const  Order = mongoose.model("Order", orderSchema);