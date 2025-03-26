import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Debug log the incoming request
    console.log("Received contact form submission:", { name, email, message });

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Debug log environment variables (without exposing sensitive data)
    console.log("Environment check:", {
      hasUser: !!process.env.GMAIL_USER,
      userEmail: process.env.GMAIL_USER,
      hasPass: !!process.env.GMAIL_PASS,
    });

    // Check if environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error("Missing email configuration:", {
        hasUser: !!process.env.GMAIL_USER,
        hasPass: !!process.env.GMAIL_PASS,
      });
      return NextResponse.json(
        { error: "Server configuration error: Missing email credentials" },
        { status: 500 }
      );
    }

    // Gmail SMTP setup with specific configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "login",
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      debug: true,
      logger: true,
    });

    // Verify transporter configuration
    try {
      console.log("Verifying SMTP connection...");
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (verifyError: any) {
      console.error("SMTP verification failed:", {
        message: verifyError.message,
        code: verifyError.code,
        command: verifyError.command,
      });
      return NextResponse.json(
        { error: `Email server configuration error: ${verifyError.message || 'Unknown error'}` },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> <p>${message}</p></p>
      `,
    };

    try {
      console.log("Attempting to send email...");
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
      return NextResponse.json({ message: "Email sent successfully" });
    } catch (sendError: any) {
      console.error("Failed to send email:", {
        message: sendError.message,
        code: sendError.code,
        command: sendError.command,
      });
      return NextResponse.json(
        { error: `Failed to send email: ${sendError.message || 'Unknown error'}` },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Email sending error:", {
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    });
    return NextResponse.json(
      { error: `Server error: ${error instanceof Error ? error.message : "Unknown error"}` },
      { status: 500 }
    );
  }
}