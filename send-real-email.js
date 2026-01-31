const nodemailer = require('nodemailer')

// CONFIGS
// 1. Paste Ngrok link (bỏ dấu / ở cuối)
const PUBLIC_URL = 'https://chance-noninfectious-cyndy.ngrok-free.dev'

// 2. Email cá nhân (sender)
const SENDER_EMAIL = 'minhdanglee2006@gmail.com'
// 3. Password email
const SENDER_PASSWORD = 'zvgu htpt uqon cfib'

// 4. Receiver email
const RECIPIENT_EMAIL = 'ilikepancakesla62@gmail.com'

async function sendTrackingEmail() {
    // Cấu hình đăng nhập (Dùng tài khoản người gửi)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: SENDER_EMAIL,
            pass: SENDER_PASSWORD, 
        },
    });

    // Tạo link tracking (Gắn ID của người nhận để theo dõi họ)
    // Thêm Date.now() để tránh bị Google cache ảnh cũ
    const openLink = `${PUBLIC_URL}/track/open?user=${RECIPIENT_EMAIL}&ts=${Date.now()}_${Math.random()}`;
    const clickLink = `${PUBLIC_URL}/track/click?user=${RECIPIENT_EMAIL}&target_url=https://www.google.com`;

    const htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px dashed #333;">
            <h2>Chào bạn,</h2>
            <p>Đây là email test gửi từ <b>${SENDER_EMAIL}</b> đến <b>${RECIPIENT_EMAIL}</b>.</p>
            
            <p>
                <a href="${clickLink}" style="background-color: #e0245e; color: white; padding: 10px 15px; text-decoration: none; font-weight: bold;">
                    Bấm vào đây để test Click
                </a>
            </p>
            
            <p style="color: gray; font-size: 12px;">(Nhớ chọn 'Hiển thị hình ảnh' để test Open nhé)</p>

            <img src="${openLink}" width="1" height="1" style="display:none;" alt="spy-pixel" />
        </div>
    `;

    try {
        let info = await transporter.sendMail({
            from: `"Hệ thống Test" <${SENDER_EMAIL}>`, // Tên hiển thị
            to: RECIPIENT_EMAIL,                       // Gửi đến Mail B
            subject: `Test Tracking chéo: ${new Date().toLocaleTimeString()}`,
            html: htmlContent,
        });
        console.log(`✅ Đã gửi email thành công tới: ${RECIPIENT_EMAIL}`);
        console.log("Message ID:", info.messageId);
        console.log("Open Link:", openLink);
    } catch (error) {
        console.error("❌ Lỗi gửi mail:", error);
    }
}

sendTrackingEmail();