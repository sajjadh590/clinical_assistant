// server.js
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const dotenv = require("dotenv");
const axios = require("axios");
const path = require("path");
const fs = require("fs");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

app.post("/api/upload", upload.single("audio"), async (req, res) => {
  try {
    const filePath = path.join(__dirname, req.file.path);
    const fileStream = fs.createReadStream(filePath);

    const response = await axios.post(
      "https://api-inference.huggingface.co/models/openai/whisper-large",
      fileStream,
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_TOKEN}`,
          "Content-Type": "audio/wav",
        },
      }
    );

    fs.unlinkSync(filePath); // حذف فایل بعد از ارسال

    res.json({ text: response.data.text || "نتیجه‌ای دریافت نشد." });
  } catch (err) {
    console.error("خطا:", err.message);
    res.status(500).json({ error: "خطا در تحلیل صوت یا اتصال به API" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
