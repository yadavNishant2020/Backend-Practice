import mongoose from "mongoose";

const medicalSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types,
        ref:"Patient"
    },
    disease: {
        type: String,
        required: true
    }
}, {timestamps: true});

export const MedicalRecord = mongoose.model("MedicalRecord", medicalSchema)