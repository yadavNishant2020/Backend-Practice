import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYears: {
        type: Number,
        default: 0,
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
    
}, {timestamps: true});

export const Doctor = mongoose.model("Doctor", doctorSchema)