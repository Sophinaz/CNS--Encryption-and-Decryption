const asyncHandler = require("express-async-handler");
const crypto = require("crypto");

const encryptWithRSA = asyncHandler(async (req, res) => {
  const { message, secret } = req.body;
  const publicKey = secret.replace(/\\n/g, '\n');

  const buffer = Buffer.from(message, "utf8");
  let encrypted = crypto.publicEncrypt(publicKey, buffer);
  encrypted = encrypted.toString("base64");
  
  
  res.status(200).json({
    encryptedMessage: encrypted,
  });
});

const decryptWithRSA = asyncHandler(async (req, res) => {
  const { message, secret } = req.body;
  const privateKey = secret.replace(/\\n/g, '\n');

  const buffer = Buffer.from(message, 'base64');
  try {
    const decrypted = crypto.privateDecrypt(
      {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING, // Ensure OAEP padding
      },
      buffer
    );
    console.log("Decrypted message:", decrypted.toString('utf8'));
    res.status(200).json({
      decryptedMessage: decrypted.toString('utf8'),
    });
  } catch (error) {
    console.error("Error decrypting message:", error);
  }

});

module.exports = { encryptWithRSA, decryptWithRSA };
