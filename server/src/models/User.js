import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the name"],
            trim: true,
            maxlength: [50, "The name can not be more than 50 characters"],
        },
        email: {
            type: String,
            required: [true, "Please add an email"],
            unique: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please add a valid email",
            ],
            maxlength: [50, "The email can not be more than 50 characters"],
            lowercase: true,
        },
        role: {
            type: String,
            enum: ["user", "publisher"],
            default: "user",
        },
        phone: {
            type: String,
            required: [true, "Please enter the phone number"],
            trim: true,
            maxlength: [
                50,
                "The phone number can not be more than 50 characters",
            ],
        },
        password: {
            type: String,
            required: [true, "Please add a password"],
            minlength: 6,
            select: false,
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date,
    },
    { timestamps: true }
);

// Standarization for name uppercase the first character of each word
UserSchema.pre("save", async function (next) {
    const splitStr = this.name.toLowerCase().split(" ");
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] =
            splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    this.name = splitStr.join(" ");
});

// Encrypt password using bcrypt
UserSchema.pre("save", async function (next) {
    // Validation used to determine if the user is new or if he is changin his password
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Generate and hash password token
UserSchema.methods.getResetPassToken = function () {
    // Generate token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hash token and set to resetPasswordToken field
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    // Set expire
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

    return resetToken;
};

export default mongoose.model("User", UserSchema);
