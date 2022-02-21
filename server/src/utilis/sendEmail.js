import nodemailer from "nodemailer";
import config from "../config/config.js";

const sendEmail = async (options) => {
    // create reusable transporter object using the default smtp transporter
    let transporter = nodemailer.createTransport({
        host: config.SMTP_HOST,
        port: config.SMTP_PORT,
        auth: {
            user: config.SMTP_EMAIL,
            pass: config.SMTP_PASSWORD,
        },
    });

    // Set message
    let message = {
        from: `${config.FROM_NAME} <${config.FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    // Send email with defined transporter object
    const info = await transporter.sendMail(message);

    if (config.NODE_ENV === "development") {
        console.log("Message sent: %s", info.messageId);
    }
};

export default sendEmail;
