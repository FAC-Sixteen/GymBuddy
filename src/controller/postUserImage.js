const uploadImage = require("./uploadImage");

const singleUpload = uploadImage.single("Image");

exports.post = (req, res) => {
  console.log(req.file);
  singleUpload(req, res, (err, some) => {
    if (err) {
      console.log(err);
    }

    return res.json({ imageUrl: req.file.location });
  });
};
