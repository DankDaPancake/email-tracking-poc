const nodemailer = require('nodemailer')

// CONFIGS
// 1. Paste Ngrok link (bỏ dấu / ở cuối)
const PUBLIC_URL = 'https://chance-noninfectious-cyndy.ngrok-free.dev'

// 2. Email cá nhân (sender / receiver)
const MY_EMAIL = 'minhdanglee2006@gmail.com'

// 3. Password email
const GMAIL_APP_PASSWORD = 'zvgu htpt uqon cfib'

async function sendTrackingEmail() {
    // Login configs
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: MY_EMAIL,
            pass: GMAIL_APP_PASSWORD,
        }
    })

    // Link tracking với URL public
    const openLink = `${PUBLIC_URL}/track/open?user=${MY_EMAIL}&campaign=test_real`
    const clickLink = `${PUBLIC_URL}/track/click?user=${MY_EMAIL}&target_url=https://www.google.com`

    const htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>Test Tracking Thật</h2>
            <p>Mail được gửi từ Node.js</p>

            <a href="${clickLink}" style="background-color: #0070f3; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                Click thử đi (Tracking Link)
            </a>

            <img src="${openLink}" width="1" height="1" style="display:none;" alt="" />
        </div>
    `

    try {
        let info = await transporter.sendMail({
            from: `"Test Bot" <${MY_EMAIL}>`,
            to: MY_EMAIL,
            subject: "Thư test Tracking Pixel",
            html: htmlContent,
        })
        console.log("Email đã gửi! Message ID:", info.messageId)
    }
    catch (error) {
        console.log("Lỗi gửi mail:", error)
    }
}

sendTrackingEmail()