
const{Router} = require('express');
const uploadMiddleware = require('../middlewares/MulterMiddleware');
const UploadModel = require('../models/UploadModel');

const router = Router();

router.get("/api/get", async (req, res) => {
    try {
      const allPhotos = await UploadModel.find().sort({ createdAt: "descending" });
      res.send(allPhotos); // Convert to JSON and send response
    } catch (error) {
      console.error("Error retrieving photos:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  router.post('/api/save', uploadMiddleware.single('photo'), (req, res) => {
  const { filename } = req.file;
  const { title, description } = req.body;

  UploadModel.create({ photo: filename, title, description })
    .then((data) => {
      console.log('Uploaded successfully');
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.error('Error uploading photo:', err);
      res.status(500).send('Internal Server Error');
    });
});

module.exports = router;
