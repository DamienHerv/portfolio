const express = require("express");

// Port
const default_port = 4000;
let port = process.env.PORT || default_port;

// App
const app = express();

// Static
if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"), { maxAge: 24 * 60 * 60 * 1000 });
} else {
  app.use(express.static("public"));
}

// Pdf
app.get("/getpdf", (req, res) => {
  res.download("./assets/resume.pdf", "resume.pdf");
});
// Listen
app.listen(port, () => console.log(`listening to ${port}`));

module.exports = app;
