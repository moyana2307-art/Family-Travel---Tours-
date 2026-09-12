"use client";

import { useState } from "react";
import Button from "@/components/Button";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

export default function EnquiryForm() {
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    travelers: "",
    destination: "",
    experience: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch(`${API_URL}/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", message: data.message });
        setForm({
          fullName: "",
          email: "",
          phone: "",
          travelDate: "",
          travelers: "",
          destination: "",
          experience: "",
          message: "",
        });
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong." });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "Could not reach the server. Please try again or contact us by phone.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const destinations = [
    "Victoria Falls",
    "Hwange National Park",
    "Zambezi River",
    "Chobe National Park",
    "Livingstone",
    "Matobo",
    "Custom / Not sure yet",
  ];

  const experiences = [
    "Victoria Falls Experience",
    "Zambezi Sunset Cruise",
    "Hwange Safari",
    "Chobe Day Trip",
    "Zambezi River Adventure",
    "Helicopter Experience",
    "White Water Rafting",
    "Cultural Experiences",
    "Family Holiday Package",
    "Custom Experience",
  ];

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <div className="form-field full">
        <label htmlFor="fullName">
          Full Name <span>*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          value={form.fullName}
          onChange={handleChange}
          placeholder="Your full name"
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">
          Email Address <span>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
      </div>

      <div className="form-field">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="+263 ..."
        />
      </div>

      <div className="form-field">
        <label htmlFor="travelDate">Travel Date</label>
        <input
          id="travelDate"
          name="travelDate"
          type="date"
          value={form.travelDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="travelers">Number of Travelers</label>
        <input
          id="travelers"
          name="travelers"
          type="number"
          min="1"
          value={form.travelers}
          onChange={handleChange}
          placeholder="e.g. 4"
        />
      </div>

      <div className="form-field">
        <label htmlFor="destination">Preferred Destination</label>
        <select
          id="destination"
          name="destination"
          value={form.destination}
          onChange={handleChange}
        >
          <option value="">Select a destination</option>
          {destinations.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="experience">Preferred Experience</label>
        <select
          id="experience"
          name="experience"
          value={form.experience}
          onChange={handleChange}
        >
          <option value="">Select an experience</option>
          {experiences.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field full">
        <label htmlFor="message">Additional Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us more about the trip you have in mind..."
        />
      </div>

      {status && (
        <div className={`form-status ${status.type} full`}>{status.message}</div>
      )}

      <div className="form-field full">
        <Button type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Send Enquiry"}
        </Button>
      </div>
    </form>
  );
}
