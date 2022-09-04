import mongoose from "mongoose";

export interface IToken {
    user: mongoose.Schema.Types.ObjectId;
    token: string;
    status: string;
}

const TokenSchema = new mongoose.Schema<IToken>(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true,
        },
        token: {
            type: String,
            require: true,
        },
        status: {
            type: String,
            require: true,
            enum: ["enable", "disable"],
            default: "enable",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Token", TokenSchema);
