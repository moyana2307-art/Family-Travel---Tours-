import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      travelDate,
      travelers,
      destination,
      experience,
      message,
    } = body;

    if (!fullName || !email) {
      return Response.json(
        { success: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    console.log("New booking enquiry received:");
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
        to: process.env.ENQUIRY_RECIPIENT || process.env.SMTP_USER,
        subject: "New Booking Enquiry - Family Travel and Tours",
        html: `
          <h2>New Booking Enquiry</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Travel Date:</strong> ${travelDate || "N/A"}</p>
          <p><strong>Number of Travelers:</strong> ${travelers || "N/A"}</p>
          <p><strong>Preferred Destination:</strong> ${destination || "N/A"}</p>
          <p><strong>Preferred Experience:</strong> ${experience || "N/A"}</p>
          <p><strong>Message:</strong> ${message || "N/A"}</p>
        `,
      });
    }

    return Response.json({
      success: true,
      message: "Enquiry submitted successfully. We will contact you soon.",
    });
  } catch (error) {
    console.error("Enquiry error:", error);
    return Response.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}