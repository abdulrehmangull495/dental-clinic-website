function sendToWhatsApp() {
        const name    = document.getElementById('f-name').value.trim();
        const phone   = document.getElementById('f-phone').value.trim();
        const service = document.getElementById('f-service').value;
        const time    = document.getElementById('f-time').value;
        const msg     = document.getElementById('f-msg').value.trim();

        if (!name || !phone) {
          alert('Please enter your name and phone number.');
          return;
        }
        const clinicWhatsApp = '923141458867'; // 👈 Clinic ka number yahan lagao

        const text = 
`🏥 *New Appointment Request*

👤 *Name:* ${name}
📞 *Phone:* ${phone}
🩺 *Service:* ${service}
⏰ *Preferred Time:* ${time}
💬 *Message:* ${msg || 'None'}

_Sent via Dr. Ahmed Clinic Website_`;

        const encoded = encodeURIComponent(text);
        window.open(`https://wa.me/${clinicWhatsApp}?text=${encoded}`, '_blank');
      }