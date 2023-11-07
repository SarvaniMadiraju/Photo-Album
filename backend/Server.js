const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const UploadRoute=require("./routes/UploadRoute")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("public"))

const PORT= process.env.PORT || 5000

const uri = "mongodb+srv://photoapp:photo@cluster0.ya4rpkh.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("MongoDB Connected");
  app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
  });
})
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  app.use(UploadRoute);
