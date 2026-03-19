const express = require("express");
const multer = require("multer");

const app = express();

app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: "uploads/" });

app.post("/submit", upload.single("photo"), (req, res) => {

  const {
    fullname,
    dob,
    gender,
    email,
    mobile,
    course,
    address
  } = req.body;

  console.log(fullname, dob, gender, email, mobile, course, address);
  if (req.file) {
  console.log("Photo:", req.file.filename);
} else {
  console.log("No photo uploaded");
}


  res.send("Form Submitted Successfully");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
