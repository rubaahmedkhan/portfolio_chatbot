import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

// Email sending function
async function sendContactEmail(data: { name: string; email: string; subject: string; message: string }) {
  // Create transporter using environment variables
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'rubaahmedkhan786@gmail.com',
    subject: `Portfolio Contact: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7c3aed;">New Contact Form Submission</h2>
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
        </div>
        <div style="background: #ffffff; padding: 20px; border-left: 4px solid #7c3aed; margin: 20px 0;">
          <h3>Message:</h3>
          <p style="line-height: 1.6;">${data.message}</p>
        </div>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">
        <p style="color: #666; font-size: 14px;">This email was sent from your portfolio website contact form.</p>
      </div>
    `,
    replyTo: data.email,
  };

  // Send email
  await transporter.sendMail(mailOptions);
}

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      try {
        await sendContactEmail(validatedData);
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        // Continue with success response even if email fails
      }
      
      res.json({ success: true, message: "Thank you for your message! I will get back to you soon." });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get contact submissions (for admin purposes if needed)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact submissions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
