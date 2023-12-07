const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const db = require("./models");
const app = express();
const PORT = process.env.PORT;

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb)=>{
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})
const upload = multer({
storage: storage
})
app.use('/image', express.static('upload/images'));
app.post("/upload", upload.single('image'), (req, res)=>{
  console.log(req.file);
  res.json({
    sucess:1,
    profile_url: `http://localhost:${PORT}/image/${req.file.filename}`
  })
})

//app.use(express.json());

//const logFormat = process.env.NODE_ENV === "production" ? "combined" : "dev";
//app.use(morgan(logFormat));

//app.use("/api", require("./controllers"));

//if (process.env.NODE_ENV === "production") {
  //app.use(express.static(path.join(__dirname, "../client/build")));

  // all unknown routes should be handed to our react app
 // app.get("*", function (req, res) {
   // res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  //});
//}

// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
//db.sequelize.sync({ force: false });

// start up the server
if (PORT) {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
} else {
  console.log("===== ERROR ====\nCREATE A .env FILE!\n===== /ERROR ====");
}
