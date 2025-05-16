const express = require("express");
const cors = require("cors");
const fs = require('fs');
const https = require('https');
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 4000;

const options = {
  key: fs.readFileSync('../certs/key.pem'),
  cert: fs.readFileSync('../certs/cert.pem')
};

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Secure Node.js App with HTTPS!');
});
app.use("/api/3des", require("./routes/3DESroute"));
app.use("/api/aes", require("./routes/AESroute"));
app.use("/api/otp", require("./routes/OTProute"));
app.use("/api/rsa", require("./routes/RSAroute"));
app.use(errorHandler);

// app.listen(PORT, () => {
//   console.log("server has started on port", PORT);
// });

https.createServer(options, app).listen(8443, () => {
  console.log('Secure server running at https://localhost:8443');
});