# 📧 Email Tracking Proof of Concept (PoC)

A lightweight Node.js application demonstrating the underlying mechanics of Email Marketing Analytics. This project illustrates how major platforms track **Open Rates** (via Spy Pixels) and **Click-Through Rates** (via Link Wrapping/Redirects).

> [!WARNING]
> **DISCLAIMER: EDUCATIONAL PURPOSE ONLY**
>
> This repository is created strictly for educational and research purposes to demonstrate how HTTP requests and redirects are used in digital marketing.
>
> * **Do not use this to track individuals without their explicit consent.**
> * Unauthorized tracking may violate privacy laws such as **GDPR** (Europe), **CCPA** (California), or other local regulations.
> * The author assumes no responsibility for any misuse of this code. Always respect user privacy.

## 🚀 Features

* **Open Tracking:** Detects when an email is opened using a transparent 1x1 GIF pixel.
* **Click Tracking:** Detects link clicks using an intermediate redirect server.
* **Real-time Logging:** Displays user actions (`OPEN` or `CLICK`) directly in the server console.
* **Live Email Sending:** Integrated with Nodemailer to send real test emails via Gmail.

## 🛠 Tech Stack

* **Runtime:** Node.js
* **Server Framework:** Express.js
* **Email Service:** Nodemailer (SMTP)
* **Tunneling:** Ngrok (to expose localhost to the internet)

## 📂 Project Structure

```text
.
├── server.js             # The tracking server (handles pixel & redirects)
├── send-real-email.js    # Script to send the email with tracking codes
├── package.json          # Dependencies
└── README.md             # This file