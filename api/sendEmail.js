import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, message } = req.body;

    // Setup transporter using your email service
    const transporter = nodemailer.createTransport({
        service: "gmail", // Change if using another email provider
        auth: {
            user: process.env.EMAIL_USER, // Your email
            pass: process.env.EMAIL_PASS  // Your email app password
        }
    });

    try {
        // Send email to yourself (website owner)
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: "prashant@gaaplications.com", // Your email
            subject: "New Contact Form Submission",
            text: message,
        });

        // Send auto-reply to the user
        await transporter.sendMail({
            from: "prashant@gaaplications.com",
            to: email,
            subject: "Thank you for reaching out!",
            text: `Hello ${name},\n\nThank you for contacting us. We will get back to you soon.\n\nBest regards,\nYour Team`
        });

        return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        return res.status(500).json({ message: "Error sending email", error: error.message });
    }
}
