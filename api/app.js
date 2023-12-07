const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const app = express();
var cors = require('cors');
app.use(cors());
const PORT = process.env.PORT;
const mongoURL = "mongodb+srv://jthomas010323:foody@cluster0.0tjnkum.mongodb.net/"

mongoose.connect(mongoURL, {
  useNewUrlParser: true
}).then(() => { console.log("Connected to database"); })
  .catch(e => console.log(e))

require("./imageDetails");
const Images = mongoose.model("ImageDetails");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage: storage })

app.get("/", async (req, res) => {
  res.send("Sucess");
})

app.post("/upload-image", upload.single("image"), async (req, res) => {
  console.log(req.body);
  const imageName = req.file.filename;

  try {
    await Images.create({ image: imageName })
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: error })
  }
});

app.get("/get-image", async (req, res) => {
  try {
    Images.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
});

if (PORT) {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
} else {
  console.log("===== ERROR ====\nCREATE A .env FILE!\n===== /ERROR ====");
}
