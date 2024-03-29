import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact_no: {
        type: number,
        required: true
    },
    age: {
        type: number,
        required: true
    },
    blood_group : {
        type: String,
        required: true
    },
    gender : {
        type: String,
        enum: ["M", "F", "O"],
        required: true
    },
    dignosed_with : {
        type: String,
        required: true
    },
    assigned_doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    admited_in: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }

}, {timestamps: true});

export const Patient = mongoose.model("Patient", patientSchema)