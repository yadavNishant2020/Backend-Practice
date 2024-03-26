import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
   {
    userName: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
   },
   {timestamps: true}
);

export const User = mongoose.model("User", UserSchema)