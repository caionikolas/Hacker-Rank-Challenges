//Você pode gerar uma senha de uso único (OTP) para seu site usando JavaScript.

function generateOTP() {
  var digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)]
  }
  return OTP
}

generateOTP() // 503084
generateOTP() // 261868