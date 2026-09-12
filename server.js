// server.js - Express backend for Family Travel and Tours
// This server provides API endpoints for the booking enquiry form and contact form.
// Run with: npm run build && npm run server
// The Next.js app should be built and started separately, OR you can run
// the production build via `next start` on a different port and configure
// the API URL accordingly.

const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Allow CORS for the Next.js frontend (adjust origin as needed)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Family Travel and Tours API" });
});

// Booking enquiry form endpoint
app.post("/api/enquiry", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      travelDate,
      travelers,
      destination,
      experience,
      message,
    } = req.body;

    if (!fullName || !email) {
      return res
        .status(400)
        .json({ success: false, error: "Name and email are required." });
    }

    console.log("New booking enquiry received:");
    console.log(JSON.stringify(req.body, null, 2));

    // Optionally send email via nodemailer if SMTP is configured
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

    res.status(200).json({
      success: true,
      message: "Enquiry submitted successfully. We will contact you soon.",
    });
  } catch (error) {
    console.error("Enquiry error:", error);
    res
      .status(500)
      .json({ success: false, error: "Something went wrong. Please try again." });
  }
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required.",
      });
    }

    console.log("New contact message received:");
    console.log(JSON.stringify(req.body, null, 2));

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

    res.status(200).json({
      success: true,
      message: "Message sent successfully. We will get back to you soon.",
    });
  } catch (error) {
    console.error("Contact error:", error);
    res
      .status(500)
      .json({ success: false, error: "Something went wrong. Please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`Family Travel and Tours API server running on port ${PORT}`);
});
