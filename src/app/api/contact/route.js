import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    console.log("New contact message received:");
    console.log(JSON.stringify(body, null, 2));

    if (process.env.SMTP_HOST) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_RECIPIENT || process.env.SMTP_USER,
        subject: "New Contact Message - Family Travel and Tours",
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });
    }

    return Response.json({
      success: true,
      message: "Message sent successfully. We will get back to you soon.",
    });
  } catch (error) {
    console.error("Contact error:", error);
    return Response.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}