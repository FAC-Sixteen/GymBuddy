const uploadImage = require('./uploadImage')

const singleUpload = uploadImage.single('image');

exports.post = (req, res) => {
    console.log(req.body)
    console.log(res)    
}