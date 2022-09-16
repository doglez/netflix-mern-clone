import mongoose from "mongoose";

export interface IProfile {
    user: mongoose.Schema.Types.ObjectId;
    name: string;
    restrictions: string;
    type: string;
    picture: string;
}

const ProfileSchema = new mongoose.Schema<IProfile>(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true,
        },
        name: {
            type: String,
            required: [true, "Name is required."],
            trim: true,
            maxlength: [20, "Name can not be more than 20 characters."],
            minlength: [3, "Name must be at least 3 characters."],
        },
        restrictions: {
            type: String,
            enum: ["7+", "13+", "16+", "18+"],
            default: "18+",
        },
        type: {
            type: String,
            enum: ["adult", "kid"],
            default: "adult",
        },
        picture: {
            type: String,
            default: "img-1.png",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Profile", ProfileSchema);
