import nodemailer from "nodemailer";
import {
    FROM_EMAIL,
    FROM_NAME,
    SMTP_EMAIL,
    SMTP_HOST,
    SMTP_PASSWORD,
    SMTP_PORT,
} from "../config/Config";

interface IOption extends Object {
    email: string;
    subject: string;
    text: string;
}

const SendEmails = async (options: IOption) => {
    // Create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: false,
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD,
        },
    });

    // Set the message
    let message = {
        from: `${FROM_NAME} <${FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.text,
    };

    // Send mail with defined transporter object
    const info = await transporter.sendMail(message);

    console.log(`Message sent: %s${info.messageId}`);
};

export default SendEmails;
