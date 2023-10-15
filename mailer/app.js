const express = require("express");
const app = express();
let PORT = 5000;

const sendMail = require("./sendMail.js");

app.get("/", (req, res) => {
  res.send("Server Up and Running");
});

app.get("/sendmail", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`I am live at port`,PORT);
    });
  } catch (error) {}
};
start();